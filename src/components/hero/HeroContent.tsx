import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollArrow from '../common/ScrollArrow';

const HeroContent = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/kontakt');
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className="
        relative z-10 
        h-dvh          /* Our custom utility class */
        flex flex-col 
        justify-center
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-left text-white animate-fade-in">
          FR Innovative Haustechnik – Bäder &amp; Haustechnik für das Rhein-Main-Gebiet
        </h1>
        <p className="text-lg md:text-xl text-left text-white mb-12 max-w-3xl animate-fade-in-delay">
          Qualität aus Rodgau: Moderne Lösungen für Bad, Heizung und Sanitär – zuverlässig im gesamten Rhein-Main-Gebiet.
        </p>

        <div className="animate-fade-in-delay-2">
          <button
            onClick={handleContactClick}
            className="
              flex items-center justify-center
              bg-blue-600 text-white
              px-8 py-4 rounded-full
              text-lg font-semibold
              transition-all duration-300
              transform hover:scale-105
              shadow-lg hover:shadow-xl hover:bg-blue-700
            "
          >
            Jetzt beraten lassen
            <MessageSquare className="ml-2" size={20} />
          </button>
        </div>

        <ScrollArrow targetId="services" />
      </div>
    </div>
  );
};

export default HeroContent;
