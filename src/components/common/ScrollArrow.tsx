import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  targetId: string;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ targetId }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-slow-bounce"
      aria-label="Scroll to services"
    >
      <ChevronDown size={32} className="text-white hover:text-blue-200 transition-colors duration-300" />
    </button>
  );
};

export default ScrollArrow;