import { IMAGES } from '../constants/images';

export const projects = [
  {
    id: 'komplettbad-sanierung',
    title: 'Komplette Badsanierung',
    bannerImage: IMAGES.PROJECTS.BATHROOM.COMPLETE.GALLERY[0],
    client: 'Familie B.',
    industry: 'Sanitär',
    overview: 'Vollständige Renovierung eines Badezimmers mit modernem Design und hochwertiger Ausstattung.',
    objectives: [
      'Komplette Neugestaltung',
      'Optimierte Raumnutzung',
      'Moderne Sanitäranlagen',
      'Energieeffiziente Lösungen'
    ],
    solutions: [
      'Neue Sanitärinstallationen',
      'Großformatige Fliesen',
      'LED-Beleuchtungssystem',
      'Fußbodenheizung'
    ],
    results: [
      'Zeitgemäßes Badezimmer',
      'Verbesserte Funktionalität',
      'Erhöhter Wohnkomfort',
      'Wertsteigerung der Immobilie'
    ],
    testimonial: {
      content: 'Das neue Bad ist ein Traum. Die Umsetzung war perfekt und das Team sehr professionell.',
      author: 'Familie Becker',
      role: 'Auftraggeber'
    },
    technologies: [
      'Moderne Sanitärtechnik',
      'LED-Beleuchtung',
      'Fußbodenheizung',
      'Wasserspartechnik'
    ],
    timeline: {
      start: '2024-02-15',
      end: '2024-03-10'
    },
    images: IMAGES.PROJECTS.BATHROOM.COMPLETE.GALLERY.map((url, index) => ({
      url,
      caption: `Badezimmer Ansicht ${index + 1}`
    })),
    relatedProjects: ['duschsanierung-1', 'duschsanierung-2']
  },
  {
    id: 'duschsanierung-1',
    title: 'Duschsanierung Projekt 1',
    bannerImage: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.AFTER,
    client: 'Familie S.',
    industry: 'Sanitär',
    overview: 'Komplette Modernisierung einer veralteten Dusche mit Fokus auf Barrierefreiheit und modernem Design.',
    objectives: [
      'Barrierefreier Zugang',
      'Moderne Optik',
      'Verbesserte Funktionalität',
      'Optimierte Raumnutzung'
    ],
    solutions: [
      'Bodengleiche Duschfläche',
      'Hochwertige Glasabtrennung',
      'Moderne Armaturen',
      'Rutschfeste Fliesen'
    ],
    results: [
      'Barrierefrei zugängliche Dusche',
      'Zeitgemäßes Design',
      'Erhöhte Sicherheit',
      'Wertsteigerung der Immobilie'
    ],
    testimonial: {
      content: 'Die neue Dusche übertrifft unsere Erwartungen. Die Umsetzung war professionell und sauber.',
      author: 'Familie Schmidt',
      role: 'Auftraggeber'
    },
    technologies: [
      'Bodengleiche Duschtasse',
      'Glasabtrennung',
      'LED-Beleuchtung',
      'Thermostatarmatur'
    ],
    timeline: {
      start: '2024-01-10',
      end: '2024-01-15'
    },
    images: [
      {
        url: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.BEFORE,
        caption: 'Ursprünglicher Zustand'
      },
      {
        url: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.AFTER,
        caption: 'Nach der Sanierung'
      }
    ],
    relatedProjects: ['duschsanierung-2', 'komplettbad-sanierung']
  },
  {
    id: 'duschsanierung-2',
    title: 'Duschsanierung Projekt 2',
    bannerImage: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE2.AFTER,
    client: 'Familie W.',
    industry: 'Sanitär',
    overview: 'Umfassende Renovierung mit Schwerpunkt auf Funktionalität und zeitgemäßer Ästhetik.',
    objectives: [
      'Modernisierung der Dusche',
      'Verbesserung der Beleuchtung',
      'Optimierung der Raumnutzung',
      'Energieeffizienz'
    ],
    solutions: [
      'Großformatige Wandfliesen',
      'Integrierte LED-Beleuchtung',
      'Thermostatarmatur',
      'Optimierte Raumnutzung'
    ],
    results: [
      'Modernes Ambiente',
      'Verbesserte Beleuchtung',
      'Effiziente Raumnutzung',
      'Reduzierter Wasserverbrauch'
    ],
    testimonial: {
      content: 'Hervorragende Arbeit mit großer Liebe zum Detail. Das Ergebnis ist beeindruckend.',
      author: 'Familie Weber',
      role: 'Auftraggeber'
    },
    technologies: [
      'LED-Technik',
      'Thermostatarmatur',
      'Großformatfliesen',
      'Glasabtrennung'
    ],
    timeline: {
      start: '2024-02-01',
      end: '2024-02-05'
    },
    images: [
      {
        url: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE2.BEFORE,
        caption: 'Vor der Sanierung'
      },
      {
        url: IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE2.AFTER,
        caption: 'Nach der Modernisierung'
      }
    ],
    relatedProjects: ['duschsanierung-1', 'komplettbad-sanierung']
  },
  {
    id: 'rohrsystem-installation',
    title: 'Installation Rohrsysteme',
    bannerImage: IMAGES.PROJECTS.PIPES.INSTALLATION[0],
    client: 'Mehrfamilienhaus Rodgau',
    industry: 'Sanitär',
    overview: 'Installation eines kompletten Rohrsystems für ein Mehrfamilienhaus, einschließlich Trinkwasser- und Abwasserleitungen.',
    objectives: [
      'Erneuerung des Leitungssystems',
      'Optimierung der Wasserversorgung',
      'Verbesserung der Abwasserführung',
      'Minimierung von Wärmeverlusten'
    ],
    solutions: [
      'Hochwertige Kupferrohre',
      'Moderne Verbindungstechnik',
      'Effiziente Isolierung',
      'Optimierte Leitungsführung'
    ],
    results: [
      'Verbesserte Wasserqualität',
      'Reduzierte Wärmeverluste',
      'Erhöhte Betriebssicherheit',
      'Langfristige Wartungsfreundlichkeit'
    ],
    testimonial: {
      content: 'Die Installation wurde sehr professionell durchgeführt. Alles funktioniert einwandfrei.',
      author: 'Hausverwaltung Rodgau',
      role: 'Auftraggeber'
    },
    technologies: [
      'Kupferrohrsysteme',
      'Pressfittings',
      'Isolationstechnik',
      'Leckageschutz'
    ],
    timeline: {
      start: '2024-01-20',
      end: '2024-02-15'
    },
    images: IMAGES.PROJECTS.PIPES.INSTALLATION.map((url, index) => ({
      url,
      caption: `Installation Phase ${index + 1}`
    })),
    relatedProjects: ['heizungsinstallation', 'komplettbad-sanierung']
  },
  {
    id: 'heizungsinstallation',
    title: 'Installation von Heizsystemen',
    bannerImage: IMAGES.PROJECTS.HEATING.SYSTEM[0],
    client: 'Mehrfamilienhaus',
    industry: 'Heizungstechnik',
    overview: 'Komplette Installation eines modernen Heizsystems für ein Mehrfamilienhaus, mit Fokus auf Energieeffizienz und Nachhaltigkeit.',
    objectives: [
      'Installation eines energieeffizienten Heizsystems',
      'Optimierung der Wärmeverteilung',
      'Integration einer intelligenten Steuerung',
      'Reduzierung der Betriebskosten'
    ],
    solutions: [
      'Installation einer Brennwertheizung',
      'Hydraulischer Abgleich',
      'Smart Home Integration',
      'Hocheffiziente Umwälzpumpen'
    ],
    results: [
      '30% Energieeinsparung',
      'Verbesserte Wärmeverteilung',
      'Reduzierte Betriebskosten',
      'Erhöhter Wohnkomfort'
    ],
    testimonial: {
      content: 'Die neue Heizungsanlage arbeitet äußerst effizient. Die Energieeinsparungen sind beeindruckend.',
      author: 'Hausverwaltung Schmidt',
      role: 'Auftraggeber'
    },
    technologies: [
      'Brennwerttechnik',
      'Smart Home Steuerung',
      'Hocheffizienzpumpen',
      'Digitale Regelung'
    ],
    timeline: {
      start: '2024-01-15',
      end: '2024-02-10'
    },
    images: [
      ...IMAGES.PROJECTS.HEATING.SYSTEM.map((url, index) => ({
        url,
        caption: `Heizungssystem Installation Phase ${index + 1}`
      })),
      ...IMAGES.PROJECTS.HEATING.FLOOR_HEATING.map((url, index) => ({
        url,
        caption: `Fußbodenheizung Installation Phase ${index + 1}`
      }))
    ],
    relatedProjects: ['komplettbad-sanierung', 'rohrsystem-installation']
  },
  {
    id: 'badsanierungen-vorher-und-nachher',
    title: 'Badsanierung Vorher & Nachher',
    bannerImage: IMAGES.PROJECTS.BATHROOM.SANIERUNG.NACHHER[0],
    client: 'Mehrfamilienhaus',
    industry: 'Badsanierung',
    overview: 'Komplette Badsanierung eines Mehrfamilienhauses von der Rohbauphase bis zur fertigen Installation. Fokus auf Funktionalität und modernes Design.',
    objectives: [
      'Komplette Badsanierung',
      'Optimierung der Raumnutzung',
      'Modernes Design',
      'Energieeffizienz',
      'Erhöhung des Wohnkomforts'
    ],
    solutions: [
      'Rohbau und Strukturarbeiten',
      'Installation moderner Sanitäranlagen',
      'Elektrische und Beleuchtungssysteme',
      'Fliesenarbeiten',
      'Sanitäre Ausstattung'
    ],
    results: [
      'Vollständige Transformation',
      'Erhöhte Energieeffizienz',
      'Verbesserte Ästhetik',
      'Optimierte Raumnutzung',
      'Zufriedene Kunden'
    ],
    testimonial: {
      content: 'Die Badsanierung hat unsere Badezimmer komplett verwandelt. Die Qualität und der neue Wohnkomfort sind beeindruckend.',
      author: 'Hausverwaltung S.',
      role: 'Auftraggeber'
    },
    technologies: [
      'Hochwertige Sanitäranlagen',
      'Energieeffiziente Beleuchtung',
      'Moderne Fliesentechniken',
      'Smart Home Integration',
      'Nachhaltige Materialien'
    ],
    timeline: {
      start: '2023-03-01',
      end: '2023-08-31'
    },
    images: [
      ...IMAGES.PROJECTS.BATHROOM.SANIERUNG.VORHER.map((url, index) => ({
        url,
        caption: `Vorher – Badezimmer Rohbau Phase ${index + 1}`
      })),
      ...IMAGES.PROJECTS.BATHROOM.SANIERUNG.NACHHER.map((url, index) => ({
        url,
        caption: `Nachher – Fertig saniertes Badezimmer ${index + 1}`
      }))
    ],
    relatedProjects: ['komplettbad-sanierung', 'rohrsystem-installation']
  }
];