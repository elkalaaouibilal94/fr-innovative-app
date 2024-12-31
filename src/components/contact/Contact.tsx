import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Kontakt"
          subtitle="Nehmen Sie Kontakt mit uns auf"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Kontaktinformationen</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">Albert-Schweitzer Str 5<br />63110 Rodgau</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+4917661986416" className="text-gray-600 hover:text-blue-600">
                    0176 / 61986416
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a href="mailto:info@fr-innovative-haustechnik.de" className="text-gray-600 hover:text-blue-600">
                    info@fr-innovative-haustechnik.de
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;