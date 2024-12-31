import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselSlide from './CarouselSlide';
import CarouselDots from './CarouselDots';
import CarouselControls from './CarouselControls';
import { useCarousel } from '../../hooks/useCarousel';
import type { CarouselItem } from '../../types/carousel';

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
  transitionDuration?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  interval = 5000,
  transitionDuration = 800,
}) => {
  const {
    currentIndex,
    setCurrentIndex,
    isAnimating,
    setIsAnimating,
    isPaused,
    setIsPaused,
    goToSlide,
    nextSlide,
    previousSlide
  } = useCarousel(items.length, interval);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(difference) > minSwipeDistance) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {items.map((item, index) => (
          <CarouselSlide
            key={index}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      <CarouselControls
        onPrevious={previousSlide}
        onNext={nextSlide}
        isAnimating={isAnimating}
      />

      <CarouselDots
        count={items.length}
        currentIndex={currentIndex}
        onClick={goToSlide}
      />

      {/* No-JS Fallback */}
      <noscript>
        <div className="p-4 bg-yellow-100 text-yellow-800">
          Please enable JavaScript to view the carousel. Meanwhile, you can still view all items below:
          <div className="grid gap-4 mt-4">
            {items.map((item, index) => (
              <div key={index} className="w-full">
                <img
                  src={typeof item.content === 'string' ? item.content : item.content.imageUrl}
                  alt={typeof item.content === 'string' ? `Slide ${index + 1}` : item.content.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </noscript>
    </div>
  );
};

export default Carousel;