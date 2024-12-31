import React from 'react';
import { Bath, Flame, Wrench, Hammer } from 'lucide-react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../common/SectionTitle';

const Services = () => {
  const services = [
    {
      title: 'Badsanierungen und Sanitärtechnik',
      shortDescription: 'Professionelle Badsanierungen und Installation von Sanitäranlagen für Ihr Zuhause.',
      longDescription: 'Wir gestalten Ihr Badezimmer komplett neu – von der Planung bis zur Umsetzung. Dabei arbeiten wir ausschließlich mit zertifizierten Partnerfirmen zusammen. Wir installieren hochwertige Waschbecken, WC-Anlagen, Küchenspülen und Spülkästen. Auch die Montage von Duscharmaturen und Wasserhähnen gehört zu unseren Leistungen. Auf Wunsch bieten wir auch Komplettbäder in Zusammenarbeit mit unseren zertifizierten Partnerfirmen an.',
      Icon: Bath
    },
    {
      title: 'Heizungssysteme und Fußbodenheizung',
      shortDescription: 'Effiziente Heizungslösungen und fachgerechte Installation von Fußbodenheizungen.',
      longDescription: 'Wir bieten moderne Heizsysteme, die auf Ihre individuellen Bedürfnisse abgestimmt sind. Von der Installation energieeffizienter Heizlösungen bis hin zur fachgerechten Verlegung von Fußbodenheizungen sorgen wir für optimale Wärme und niedrige Betriebskosten.',
      Icon: Flame
    },
    {
      title: 'Reparaturen und Instandsetzungen',
      shortDescription: 'Schnelle Hilfe bei Wasserschäden, Rohrproblemen und Abflussstörungen.',
      longDescription: 'Ob Leckortung, die Instandsetzung von Kupferleitungen oder das Abpumpen von Wasser – wir stehen Ihnen bei sämtlichen Reparaturen zur Seite. Auch bei Abflussproblemen und der Reparatur von Abwasserleitungen sorgen wir für eine zuverlässige Lösung, damit alles wieder einwandfrei funktioniert.',
      Icon: Hammer
    },
    {
      title: 'Rohinstallationen und Leitungsarbeiten',
      shortDescription: 'Installation von Wasser- und Abwasserleitungen für Neubauten und Renovierungen.',
      longDescription: 'Wir übernehmen die komplette Verlegung von Wasser- und Abwasserleitungen. Egal, ob Sie ein neues Badezimmer planen oder Ihr Zuhause renovieren, wir sorgen für präzise Rohinstallationen, die den höchsten Standards entsprechen.',
      Icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Unsere Leistungen"
          subtitle="Professionelle Lösungen für Ihr Zuhause"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              shortDescription={service.shortDescription}
              longDescription={service.longDescription}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;