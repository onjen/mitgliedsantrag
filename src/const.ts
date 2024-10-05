import { AllowedFormKeys } from "./models/AllowedFormKeys";

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

export const requiredFormKeys: Partial<AllowedFormKeys>[] = [
  "Titel",
  "Nachname",
  "Vorname",
  "Straße, Hausnummer",
  "PLZ, Ort",
  "Telefon",
  "E-Mail",
] as const;

export const allowedSignatureKeys: string[] = [
  "form",
  "sepa"
] as const;

export const BANK_ACCOUNT_ARRAY = [
  "Kontoinhaberin: Erfindergeist Jülich e.V.",
  "IBAN: DE20 3955 0110 1201 5533 00",
  "BIC: SDUEDE33XXX",
  "Verwendungszweck: Mitgliedsnummer (Wird Ihnen per E-Mail mitgeteilt)"
]