import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validateForm } from '../../utils/formValidation';
import type { ContactFormData } from '../../types/contact';
import { sendContactForm } from '../../utils/contactService';

export const useContactForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData(prev => ({
        ...prev,
        service: location.state.selectedService
      }));

      // Scroll to the form with a slight delay to ensure the page has loaded
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Focus the name input after scrolling
          const nameInput = document.getElementById('name');
          if (nameInput) {
            nameInput.focus();
          }
        }
      }, 100);
    }
  }, [location.state]);

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  };
};