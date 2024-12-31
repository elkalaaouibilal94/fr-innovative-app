import React from 'react';
import SlideShow from './hero/SlideShow';
import HeroContent from './hero/HeroContent';
import { slides } from '../data/slides';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SlideShow slides={slides} />
      <HeroContent />
    </div>
  );
};

export default Hero;