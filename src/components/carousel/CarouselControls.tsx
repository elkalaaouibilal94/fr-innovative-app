import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  isAnimating: boolean;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrevious,
  onNext,
  isAnimating
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                 bg-white/30 text-white backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/50
                 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={onNext}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                 bg-white/30 text-white backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/50
                 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
};

export default CarouselControls;