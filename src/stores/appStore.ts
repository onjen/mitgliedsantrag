import { create } from "zustand";

interface AppState {
  contributeValue: string;
  setContributeValue: (value: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  contributeValue: "noting",
  setContributeValue: (value) => set({contributeValue: value}),
}));
