import React from 'react';
import { Send, Loader } from 'lucide-react';
import { useContactForm } from './useContactForm';
import FormField from './FormField';
import ServiceSelect from './ServiceSelect';

const ContactForm: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <FormField
        label="E-Mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <FormField
        label="Telefon"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <ServiceSelect
        value={formData.service}
        onChange={handleChange}
        error={errors.service}
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Nachricht
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className={`mt-1 block w-full rounded-md shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500
                     ${errors.message ? 'border-red-300' : 'border-gray-300'}`}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">
          Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center px-6 py-3 border border-transparent 
                 rounded-md shadow-sm text-base font-medium text-white 
                 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 
                 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin mr-2 h-5 w-5" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;