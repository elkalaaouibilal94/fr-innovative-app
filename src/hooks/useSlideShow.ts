import { useState, useEffect, useCallback } from 'react';
import type { Slide } from '../types/hero';

export const useSlideShow = (slides: Slide[], interval: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, interval, nextSlide]);

  return {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    previousSlide,
    isPlaying,
    setIsPlaying,
  };
};