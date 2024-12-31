import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

const MobileContactBar = () => {
  const isVisible = useScrollVisibility({ threshold: 100, hideOnScroll: true, initialVisibility: true });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hallo! Ich interessiere mich für Ihre Dienstleistungen und hätte gerne weitere Informationen.');
    window.open(`https://wa.me/4917661986416?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+4917661986416';
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 md:hidden z-50 mb-6 transition-all duration-300
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-center gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex items-center justify-center bg-green-500/90 text-white 
                     px-6 py-3 rounded-full text-base font-medium transition-all duration-300 
                     active:scale-95 shadow-lg backdrop-blur-sm hover:bg-green-600 
                     min-w-[130px] max-w-[180px]"
            aria-label="WhatsApp Kontakt"
          >
            <MessageCircle size={20} className="mr-2" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handlePhoneClick}
            className="flex-1 flex items-center justify-center bg-blue-600/90 text-white 
                     px-6 py-3 rounded-full text-base font-medium transition-all duration-300 
                     active:scale-95 shadow-lg backdrop-blur-sm hover:bg-blue-700
                     min-w-[130px] max-w-[180px]"
            aria-label="Telefonischer Kontakt"
          >
            <Phone size={20} className="mr-2" />
            <span>Anrufen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileContactBar;