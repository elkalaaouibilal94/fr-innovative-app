import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useZoom } from '../contexts/ZoomContext';
import { useScrollVisibility } from '../hooks/useScrollVisibility';

const FloatingContactButtons = () => {
  const { isZoomed } = useZoom();
  const isVisible = useScrollVisibility({ threshold: 100, hideOnScroll: true, initialVisibility: true });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hallo! Ich interessiere mich für Ihre Dienstleistungen und hätte gerne weitere Informationen.');
    window.open(`https://wa.me/4917661986416?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+4917661986416';
  };

  if (isZoomed) return null;

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block transition-all duration-300
                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
      <div className="flex flex-col gap-4">
        <button
          onClick={handleWhatsAppClick}
          className="relative group bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-sm
                   hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp Kontakt"
        >
          <span className="absolute right-full mr-3 whitespace-nowrap bg-white/90 
                         px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 
                         transition-opacity duration-200 text-sm font-medium shadow-lg">
            WhatsApp Chat
          </span>
          <MessageCircle size={24} className="text-green-500" />
        </button>

        <button
          onClick={handlePhoneClick}
          className="relative group bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-sm
                   hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Telefonischer Kontakt"
        >
          <span className="absolute right-full mr-3 whitespace-nowrap bg-white/90
                         px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 
                         transition-opacity duration-200 text-sm font-medium shadow-lg">
            Jetzt anrufen
          </span>
          <Phone size={24} className="text-blue-600" />
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButtons;