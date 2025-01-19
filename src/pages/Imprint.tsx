import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Imprint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Impressum - FR Innovative Haustechnik</title>
        <meta name="description" content="Impressum Angaben gemäß § 5 TMG" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.fr-innovative-haustechnik.de/impressum"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Impressum</h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Contact Information */}
            <p>
              <strong>Angaben gemäß § 5 TMG</strong>
            </p>
            <p>Informationen über den Diensteanbieter.</p>
            <p>Felix Reinhold</p>
            <p className="font-bold">FR Innovative Haustechnik</p>
            <p>
              Albert-Schweitzer-Straße 5<br />
              63110 Rodgau,
              <br />
              Deutschland
            </p>
            <p>
              <strong>Tel.:</strong>{" "}
              <a href="tel:+4917661986416">+49 176 61986416</a>
              <br />
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@fr-innovative-haustechnik.de">
                info@fr-innovative-haustechnik.de
              </a>
            </p>
            <p>
              <strong>USt.-ID:</strong> DE4486002825
              <br />
              <strong>Berufsbezeichnung:</strong> Berufufsbezeichnung,
              Sanitäranlagen, Sanitär, Installateur, Klempner
            </p>

            {/* Divider */}
            <hr />

            {/* Responsibility for Content */}
            <h2 className="text-xl font-semibold">
              Verantwortlichkeit für Inhalte
            </h2>
            <p>
              Gemäß <strong>§ 7 Abs. 1 TMG</strong> sind wir als Diensteanbieter
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach <strong>§§ 8 bis 10 TMG</strong> sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            {/* Web Design Responsibility */}
            <h2 className="text-xl font-semibold">
              Haftung für Webdesign und externe Dienstleister
            </h2>
            <p>
              Diese Website wurde durch die <strong>ABE Webstudio GbR</strong>{" "}
              gestaltet und programmiert. Die ABE Webstudio GbR übernimmt jedoch
              keinerlei Haftung für die Inhalte, die Rechtstexte (z. B.
              Impressum, Datenschutz) oder sonstige rechtliche Angaben auf
              dieser Website. Sämtliche Inhalte, Rechtstexte, Informationen und
              Pflichten aus dem Betrieb dieser Webseite liegen in der alleinigen
              Verantwortlichkeit von <strong>FR Innovative Haustechnik</strong>.
            </p>

            {/* Privacy */}
            <h2 className="text-xl font-semibold">Datenschutz</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten (gemäß
              DSGVO) ist ausschließlich{" "}
              <strong>FR Innovative Haustechnik</strong>. Alle Fragen oder
              Anliegen hinsichtlich Datenschutz und der Verarbeitung
              personenbezogener Daten sind direkt an die oben genannten
              Kontaktdaten zu richten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
