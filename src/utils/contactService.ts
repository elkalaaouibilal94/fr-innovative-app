import type { ContactFormData } from '../types/contact';
import { sanitizeInput } from './security';
import { sendEmail } from './emailjs';

export const sendContactForm = async (formData: ContactFormData): Promise<void> => {
  // Sanitize all input data
  const sanitizedData = {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    phone: sanitizeInput(formData.phone),
    message: sanitizeInput(formData.message),
    service: sanitizeInput(formData.service) // Add service to sanitized data
  };

  try {
    await sendEmail(sanitizedData);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send message');
  }
};