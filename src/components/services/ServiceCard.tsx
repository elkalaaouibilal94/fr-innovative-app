import React, { useState, useEffect } from 'react';
import { LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';
import ServiceRequestButton from './ServiceRequestButton';
import type { Service } from '../../constants/services';

interface ServiceCardProps {
  title: Service;
  shortDescription: string;
  longDescription: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, shortDescription, longDescription, Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`service-${title.replace(/\s+/g, '-').toLowerCase()}`);
      if (card) {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!isVisible && isExpanded) {
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className="group bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
                hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/30"
    >
      <div className="w-12 h-12 mb-4 text-blue-600 transition-transform duration-300 
                    group-hover:scale-110 group-hover:rotate-3">
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 
                   group-hover:text-blue-600">{title}</h3>
      <p className="text-gray-600 mb-4">{shortDescription}</p>
      
      <div className="flex items-center justify-between gap-4 mb-4">
        <button 
          onClick={toggleExpand}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 
                   font-medium transition-all duration-300 hover:gap-2"
        >
          {isExpanded ? (
            <>
              Weniger anzeigen
              <ChevronUp className="ml-1 transition-transform duration-300" size={20} />
            </>
          ) : (
            <>
              Mehr erfahren
              <ChevronDown className="ml-1 transition-transform duration-300" size={20} />
            </>
          )}
        </button>

        <ServiceRequestButton service={title} />
      </div>

      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{longDescription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;