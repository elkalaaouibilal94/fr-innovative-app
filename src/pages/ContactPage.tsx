import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontaktieren Sie uns</h1>
          <p className="text-xl text-gray-600">
            Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns für eine unverbindliche Beratung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      Albert-Schweitzer Str 5<br />
                      63110 Rodgau
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a 
                      href="tel:+4917661986416" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      0176 / 61986416
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a 
                      href="mailto:info@fr-innovative-haustechnik.de" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      info@fr-innovative-haustechnik.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montag</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dienstag</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mittwoch</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Donnerstag</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Freitag</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samstag</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sonntag</span>
                    <span className="font-medium">Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Anfahrt</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.843418880357!2d8.877525776891334!3d50.02673917151771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd4b7d2e23ab1d%3A0x9f68429aa6d2b7b0!2sAlbert-Schweitzer-Stra%C3%9Fe%205%2C%2063110%20Rodgau!5e0!3m2!1sde!2sde!4v1709865435645!5m2!1sde!2sde"
                  className="w-full h-64 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Kontaktformular</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;