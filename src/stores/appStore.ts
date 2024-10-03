import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface IForm {
  Unternehmensname: string;
  Nachname: string;
  Vorname: string;
  "Straße, Hausnummer": string;
  "PLZ, Ort": string;
  Telefon: string;
  "E-Mail": string;
}

export type IFromKeys = keyof IForm;

interface AppState {
  contributeValue: string;
  setContributeValue: (value: string) => void;
  form: IForm;
  setForm: (form: IForm) => void;
}

export const useAppStore = create<AppState>()(
  immer((set) => ({
    contributeValue: "noting",
    setContributeValue: (value) => set({ contributeValue: value }),
    form: {
      Unternehmensname: "",
      Nachname: "",
      Vorname: "",
      "Straße, Hausnummer": "",
      "PLZ, Ort": "",
      Telefon: "",
      "E-Mail": "",
    },
    setForm: (form) => set({ form }),
  }))
);
