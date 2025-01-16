import React from 'react';
import BeforeAfterImage from './BeforeAfterImage';
import FeatureList from './FeatureList';
import SectionTitle from '../common/SectionTitle';
import { IMAGES } from '../../constants/images';

const ShowerShowcase = () => {
  const showcases = [
    {
      title: 'Duschsanierung Projekt 1',
      description: 'Komplette Modernisierung einer veralteten Dusche mit Fokus auf Barrierefreiheit und modernem Design.',
      features: [
        'Bodengleiche Duschfläche',
        'Hochwertige Glasabtrennung',
        'Moderne Armaturen',
        'Rutschfeste Fliesen'
      ],
      beforeImage: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.BEFORE,
      afterImage: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.AFTER
    },
    {
      title: 'Duschsanierung Projekt 2',
      description: 'Umfassende Renovierung mit Schwerpunkt auf Funktionalität und zeitgemäßer Ästhetik.',
      features: [
        'Großformatige Wandfliesen',
        'Integrierte LED-Beleuchtung',
        'Thermostatarmatur',
        'Optimierte Raumnutzung'
      ],
      beforeImage: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE2.BEFORE,
      afterImage: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE2.AFTER
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Duschsanierungen"
          subtitle="Vorher-Nachher Vergleiche unserer Badsanierungen"
        />
        
        <div className="mt-12 space-y-16">
          {showcases.map((showcase, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {showcase.title}
              </h3>
              <BeforeAfterImage
                beforeImage={showcase.beforeImage}
                afterImage={showcase.afterImage}
                alt={showcase.title}
              />
              <p className="text-gray-600 mb-2">{showcase.description}</p>
              <FeatureList features={showcase.features} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowerShowcase;