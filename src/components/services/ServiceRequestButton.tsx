import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Service } from '../../constants/services';

interface ServiceRequestButtonProps {
  service: Service;
}

const ServiceRequestButton: React.FC<ServiceRequestButtonProps> = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/kontakt', { state: { selectedService: service } });
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white 
                bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
    >
      <MessageSquare className="w-4 h-4 mr-2" />
      Jetzt anfragen
    </button>
  );
};

export default ServiceRequestButton;