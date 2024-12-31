import { useState, useEffect, useCallback } from 'react';

export const useCarousel = (itemCount: number, interval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [currentIndex, isAnimating]);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % itemCount);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [itemCount, isAnimating]);

  const previousSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [itemCount, isAnimating]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [nextSlide, interval, isPaused]);

  return {
    currentIndex,
    setCurrentIndex,
    isAnimating,
    setIsAnimating,
    isPaused,
    setIsPaused,
    goToSlide,
    nextSlide,
    previousSlide
  };
};

export default useCarousel;