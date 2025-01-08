import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/kontakt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img 
              src="https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734647725/transparent_Log_ggrs0m.png"
              alt="FR innovative Haustechnik Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400">
              Ihr Partner für moderne Haustechnik und Sanitärlösungen.
            </p>
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/fr_innovative_haustechnik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-6 h-6 mr-2" />
              <span>Folgen Sie uns auf Instagram</span>
            </a>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <button 
                onClick={() => handleNavigation('services')}
                className="text-white hover:text-gray-300"
              >
                Leistungen
              </button>
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="text-gray-400 hover:text-white"
                >
                  Sanitär
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="text-gray-400 hover:text-white"
                >
                  Heizung
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="text-gray-400 hover:text-white"
                >
                  Reparaturen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="text-gray-400 hover:text-white"
                >
                  Roharbeiten
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <button 
                onClick={handleContactClick}
                className="text-white hover:text-gray-300"
              >
                Kontakt
              </button>
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Albert-Schweitzer Str 5</li>
              <li className="text-gray-400">63110 Rodgau</li>
              <li>
                <a 
                  href="tel:+4917661986416" 
                  className="text-gray-400 hover:text-white"
                >
                  0176 / 61986416
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@fr-innovative-haustechnik.de" 
                  className="text-gray-400 hover:text-white"
                >
                  info@fr-innovative-haustechnik.de
                </a>
              </li>
            </ul>
          </div>
          
          {/* Website Credits */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Webseite designed von</h4>
            <div className="mb-6">
              <a 
                href="https://www.abe-webstudio.de"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
                aria-label="Designed by ABE Webstudio"
              >
                <picture>
                  <source 
                    media="(prefers-color-scheme: dark)" 
                    srcSet="https://res.cloudinary.com/dkrftmenj/image/upload/v1736376073/Logo_Discord_Quality_White_l85tuh.png"
                  />
                  <img
                    src="https://res.cloudinary.com/dkrftmenj/image/upload/v1736375896/Logo_Discord_Quality_ottyrc.png"
                    alt="ABE Webstudio"
                    className="h-20 w-auto object-contain"
                  />
                </picture>
              </a>
            </div>
            <div className="space-y-2">
              <Link to="/datenschutz" className="block text-gray-400 hover:text-white">
                Datenschutzerklärung
              </Link>
              <Link to="/impressum" className="block text-gray-400 hover:text-white">
                Impressum
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} FR innovative Haustechnik. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;