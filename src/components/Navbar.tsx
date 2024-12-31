import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Check if current route is homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar if scrolling down quickly (> 50px difference) and beyond 100px from top
      if (currentScrollY > lastScrollY + 50 && currentScrollY > 100) {
        setIsHidden(true);
      } 
      // Show navbar if scrolling up by at least 10px or near the top (< 50px)
      else if (currentScrollY < lastScrollY - 10 || currentScrollY < 50) {
        setIsHidden(false);
      }

      // Toggle background after scrolling 20px
      setIsScrolled(currentScrollY > 20);

      setLastScrollY(currentScrollY);

      // Close mobile menu on scroll
      if (isOpen) {
        setIsOpen(false);
      }

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // After user stops scrolling for 150ms, show navbar again
      scrollTimeout = setTimeout(() => {
        setIsHidden(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, isOpen]);

  // Scroll or navigate to a specific section
  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      // Navigate home, then scroll to section
      navigate('/', { state: { scrollTo: id } });
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/kontakt');
    window.scrollTo(0, 0);
  };

  // Logo click => navigate to home, scroll to top
  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`
        fixed w-full z-50 transition-transform duration-300 ease-out
        ${
          isHomePage
            ? isScrolled
              ? 'bg-white/60 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
            : 'bg-white/60 backdrop-blur-md shadow-lg'
        }
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          
          {/* Logo (no extra top padding) */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center focus:outline-none transition-transform duration-300 hover:scale-105"
              aria-label="FR innovative Haustechnik - Zur Startseite"
            >
              <img
                src="https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734643159/transparent_Logo_Ohne_Schrift_qhvolc.png"
                alt="FR innovative Haustechnik Logo"
                className="h-8 w-auto object-contain"
              />
            </button>
          </div>
          
          {/* Desktop Nav (with top padding) */}
          <div className="hidden md:flex items-center space-x-6 pt-2">
            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-blue-200'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Leistungen
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-blue-200'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Über uns
            </button>
            <button
              onClick={() => handleNavClick('references')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-blue-200'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Referenzen
            </button>
            <button
              onClick={handleContactClick}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-blue-200'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button (with top padding) */}
          <div className="md:hidden pt-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                p-2 rounded-md
                ${isHomePage && !isScrolled
                  ? 'text-white hover:text-blue-200'
                  : 'text-gray-700 hover:text-blue-600'
                }
              `}
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Leistungen
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Über uns
            </button>
            <button
              onClick={() => handleNavClick('references')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Referenzen
            </button>
            <button
              onClick={handleContactClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
