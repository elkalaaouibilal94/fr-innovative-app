import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { Wrench, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Clock,
      title: 'Etabliert seit 2022',
      description: 'Kontinuierliche Weiterentwicklung und Expertise im Sanitärbereich'
    },
    {
      icon: Shield,
      title: 'Qualitätsversprechen',
      description: 'Höchste Standards bei Material und Ausführung'
    },
    {
      icon: Users,
      title: 'Starke Partnerschaften',
      description: 'Verlässliches Netzwerk für Großprojekte'
    },
    {
      icon: Wrench,
      title: 'Innovative Lösungen',
      description: 'Moderne Techniken für zeitgemäße Badkonzepte'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Über FR innovative Haustechnik"
          subtitle="Ihr Partner für moderne Sanitär- und Heizungstechnik im Rhein-Main-Gebiet"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="prose lg:prose-lg">
            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Kompetenz und Innovation für Ihr Projekt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                FR innovative Haustechnik steht seit der Gründung im Februar 2022 für hochwertige 
                Sanitär- und Heizungstechnik im Rhein-Main-Gebiet. Als verlässlicher Partner 
                für private Bauherren und kooperierende Handwerksbetriebe setzen wir auf eine 
                Kombination aus fundiertem Fachwissen und innovativen Lösungsansätzen.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Unser Erfolg basiert auf der engen Zusammenarbeit mit einem starken Netzwerk 
                spezialisierter Fachbetriebe. Diese Partnerschaften ermöglichen es uns, auch 
                umfangreiche Projekte termingerecht und in höchster Qualität umzusetzen. Dabei 
                profitieren unsere Kunden von kurzen Kommunikationswegen und einer transparenten 
                Projektabwicklung.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Von der kostenlosen Erstberatung über die detaillierte Planung bis zur 
                professionellen Umsetzung begleiten wir Sie bei jedem Schritt. Unser Fokus 
                liegt dabei auf nachhaltigen, energieeffizienten Lösungen, die nicht nur heute, 
                sondern auch in Zukunft überzeugen.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <div 
                key={highlight.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <highlight.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Unsere Leistungsversprechen</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start space-x-2">
              <span className="text-blue-200">✓</span>
              <span>Kostenlose Beratung und Planung</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-200">✓</span>
              <span>Transparente Preisgestaltung</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-200">✓</span>
              <span>Termintreue Ausführung</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-200">✓</span>
              <span>Hochwertige Materialien</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-200">✓</span>
              <span>Saubere Arbeitsweise</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-200">✓</span>
              <span>Langfristige Garantie</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;