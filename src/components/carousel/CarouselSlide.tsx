import React from 'react';
import type { CarouselItem } from '../../types/carousel';

interface CarouselSlideProps {
  item: CarouselItem;
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ item, isActive }) => {
  const content = typeof item.content === 'string' ? (
    <img
      src={item.content}
      alt={`Slide`}
      className="w-full h-full object-cover"
    />
  ) : (
    <img
      src={item.content.imageUrl}
      alt={item.content.alt}
      className="w-full h-full object-cover"
    />
  );

  return (
    <div
      className={`flex-shrink-0 w-full transition-opacity duration-800 ease-in-out
        ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      {content}
    </div>
  );
};

export default CarouselSlide;