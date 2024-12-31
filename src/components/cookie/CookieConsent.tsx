import React, { useState, useEffect } from 'react';
import CookieSettings from './CookieSettings';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const handleSaveSettings = (settings: { [key: string]: boolean }) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...settings,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Wir respektieren Ihre Privatsphäre
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                Einige sind notwendig für den Betrieb der Seite, während andere uns helfen, 
                die Website zu optimieren und Ihnen ein besseres Nutzererlebnis zu bieten.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 
                         rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Einstellungen anpassen
              </button>
              <button
                onClick={handleAcceptAll}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent 
                         rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSettings && (
        <CookieSettings
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
        />
      )}
    </>
  );
};

export default CookieConsent;