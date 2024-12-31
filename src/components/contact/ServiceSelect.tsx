import React from 'react';
import { SERVICES } from '../../constants/services';

interface ServiceSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({ value, onChange, error }) => {
  return (
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-gray-700">
        Gewünschte Leistung (optional)
      </label>
      <select
        id="service"
        name="service"
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full rounded-md shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500
                   ${error ? 'border-red-300' : 'border-gray-300'}`}
      >
        <option value="">Bitte wählen Sie eine Leistung (optional)</option>
        {SERVICES.map(service => (
          <option key={service} value={service}>{service}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ServiceSelect;