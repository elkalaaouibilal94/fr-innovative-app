import React from 'react';

interface CarouselDotsProps {
  count: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ count, currentIndex, onClick }) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300
            ${index === currentIndex 
              ? 'bg-white w-4' 
              : 'bg-white/50 hover:bg-white/70'}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;