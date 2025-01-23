import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Instagram } from "lucide-react";
import { IMAGES } from "../constants/images";
import { getImageUrl } from "../utils/imageUtils";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate("/kontakt");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={getImageUrl(IMAGES.LOGO)}
              alt="FR innovative Haustechnik Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400">
              Ihr Partner für moderne Haustechnik und Sanitärlösungen.
            </p>
            <a
              href="https://www.instagram.com/fr_innovative_haustechnik?igsh=cjZ5cHVuMjVsNzQ5"
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
                onClick={() => handleNavigation("services")}
                className="text-white hover:text-gray-300"
              >
                Leistungen
              </button>
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="text-gray-400 hover:text-white"
                >
                  Sanitär
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="text-gray-400 hover:text-white"
                >
                  Heizung
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="text-gray-400 hover:text-white"
                >
                  Reparaturen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
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

          <div>
            <div className="space-y-2">
              <Link
                to="/datenschutz"
                className="block text-gray-400 hover:text-white"
              >
                Datenschutzerklärung
              </Link>
              <Link
                to="/impressum"
                className="block text-gray-400 hover:text-white"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} FR innovative Haustechnik. Alle
              Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
