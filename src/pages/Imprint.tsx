import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Imprint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
      <title>Impressum - FR Innovative Haustechnik</title>
          <meta
            name="description"
            content="Impressum Angaben gemäß § 5 TMG"
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.fr-innovative-haustechnik.de/impressum"
          />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Impressum</h1><br />
          
          <div className="prose prose-lg max-w-none">
            <p>Angaben gemäß § 5 TMG</p>
            <p>Informationen über den Diensteanbieter.</p>
            <p>Felix Reinhold</p>
            
            <p className="font-bold">FR Innovative Haustechnik</p>
            
            <p>
              Albert-Schweitzer-Straße 5<br />
              63110 Rodgau,<br />
              Deutschland
            </p>
            
            <p>
              <strong>Tel.:</strong> <a href="tel:+4917661986416">+49 176 61986416</a><br />
              <strong>E-Mail:</strong> <a href="mailto:info@fr-innovative-haustechnik.de">info@fr-innovative-haustechnik.de</a>
            </p>
            
            <p>
              <strong>USt.-ID:</strong> DE4486002825<br />
              <strong>Berufsbezeichnung:</strong> Berufufsbezeichnung, Sanitäranlagen, Sanitär, Installateur, Klempner<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;