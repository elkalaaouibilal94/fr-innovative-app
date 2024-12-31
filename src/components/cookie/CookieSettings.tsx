import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CookieSettingsProps {
  onClose: () => void;
  onSave: (settings: { [key: string]: boolean }) => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ onClose, onSave }) => {
  const [settings, setSettings] = useState({
    necessary: true,
    functional: false,
    marketing: false
  });

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Cookie-Einstellungen</h3>
              <button
                onClick={onClose}
                className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Notwendige Cookies</h4>
                  <p className="text-sm text-gray-500">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.necessary}
                  disabled
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Funktionale Cookies</h4>
                  <p className="text-sm text-gray-500">
                    Ermöglichen erweiterte Funktionen und Personalisierung.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.functional}
                  onChange={(e) => setSettings({ ...settings, functional: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Marketing Cookies</h4>
                  <p className="text-sm text-gray-500">
                    Werden verwendet, um Werbung relevanter für Sie zu gestalten.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex w-full justify-center rounded-md border border-transparent 
                       bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Einstellungen speichern
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 inline-flex w-full justify-center rounded-md border 
                       border-gray-300 bg-white px-4 py-2 text-base font-medium 
                       text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                       sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;