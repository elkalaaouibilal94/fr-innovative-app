import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types/contact';

emailjs.init("He0bkh9GV8zJW82Fs");

export const sendEmail = async (formData: ContactFormData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      phone_number: formData.phone || 'Nicht angegeben',
      reply_to: formData.email,
      service: formData.service || 'Keine spezifische Leistung ausgewählt',
      message: formData.message
    };

    const response = await emailjs.send(
      "service_crsa8aa",
      "template_5qdebjj",
      templateParams
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};