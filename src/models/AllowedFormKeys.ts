export const allowedFormKeys: string[] = [
  "Unternehmensname",
  "Titel",
  "Nachname",
  "Vorname",
  "Straße, Hausnummer",
  "PLZ, Ort",
  "Telefon",
  "E-Mail",
] as const;

export type AllowedFormKeys = (typeof allowedFormKeys)[number];

export const requiredFormKeys: Partial<AllowedFormKeys>[] = [
  "Titel",
  "Nachname",
  "Vorname",
  "Straße, Hausnummer",
  "PLZ, Ort",
  "Telefon",
  "E-Mail",
];