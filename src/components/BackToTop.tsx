import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useBackToTopVisibility } from '../hooks/useBackToTopVisibility';

const BackToTop = () => {
  const isVisible = useBackToTopVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Zurück nach oben"
      className={`
        fixed bottom-20 right-6 md:bottom-8 z-50
        flex items-center justify-center
        p-3 rounded-full
        bg-white/60 text-gray-700
        transition-all duration-300
        transform hover:scale-110 hover:bg-white
        focus:outline-none
        shadow-lg backdrop-blur-sm
        ${
          isVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-16 opacity-0 pointer-events-none'
        }
      `}
    >
      <ArrowUp size={24} className="animate-pulse" />
    </button>
  );
};

export default BackToTop;
