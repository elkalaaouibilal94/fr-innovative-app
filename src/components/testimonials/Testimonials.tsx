import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialsCarousel from './TestimonialsCarousel';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Andreas M.',
      role: 'Hausbesitzer',
      content: 'Die Badsanierung wurde perfekt umgesetzt. Das Team war professionell, pünktlich und sehr sauber in der Ausführung.',
      rating: 5
    },
    {
      name: 'Sarah K.',
      role: 'Immobilienbesitzerin',
      content: 'Hervorragende Beratung und Installation unserer neuen Heizungsanlage. Die Energiekosten sind deutlich gesunken.',
      rating: 5
    },
    {
      name: 'Marcus W.',
      role: 'Architekt',
      content: 'Zuverlässiger Partner für alle Sanitärarbeiten. Innovative Lösungen und termingerechte Umsetzung.',
      rating: 5
    },
    {
      name: 'Julia S.',
      role: 'Hausbesitzerin',
      content: 'Fantastische Arbeit bei der Installation unserer Fußbodenheizung. Sehr kompetente Beratung und saubere Ausführung.',
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Kundenstimmen"
          subtitle="Was unsere Kunden über uns sagen"
        />
        
        <div className="mt-12">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;