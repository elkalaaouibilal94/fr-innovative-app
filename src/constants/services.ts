export const SERVICES = [
  'Badsanierungen und Sanitärtechnik',
  'Heizungssysteme und Fußbodenheizung',
  'Reparaturen und Instandsetzungen',
  'Rohinstallationen und Leitungsarbeiten'
] as const;

export type Service = typeof SERVICES[number];