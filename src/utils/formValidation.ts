import type { ContactFormData } from '../types/contact';

export const validateForm = (data: ContactFormData): Partial<ContactFormData> => {
  const errors: Partial<ContactFormData> = {};

  if (!data.name.trim()) {
    errors.name = 'Bitte geben Sie Ihren Namen ein';
  } else if (data.name.length < 2) {
    errors.name = 'Der Name muss mindestens 2 Zeichen lang sein';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
  }

  if (data.phone.trim() && !/^[\d\s+()-]{6,}$/.test(data.phone)) {
    errors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
  }

  if (!data.message.trim()) {
    errors.message = 'Bitte geben Sie eine Nachricht ein';
  } else if (data.message.length < 10) {
    errors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein';
  }

  return errors;
}