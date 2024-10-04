import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { allowedFormKeys, requiredFormKeys } from "../models/AllowedFormKeys";
import { getInitialFormItems } from "../utils/getInitialFormItems";
import { AppState } from "../models/appState";

export const useAppStore = create<AppState>()(
  immer((set) => ({
    contributeValue: "noting",
    setContributeValue: (value) => set({ contributeValue: value }),
    formItems: getInitialFormItems(allowedFormKeys, requiredFormKeys),
    setFormItems: (formItems) => set({ formItems }),
    updateFormItemValue: (key, value) => {
      set((state) => {
        const index = state.formItems.findIndex(
          (formItem) => formItem.key === key
        );
        if (index !== -1) {
          state.formItems[index].value = value;
        }
      });
    },
    toggleFormItemRequired: (key) => {
      set((state) => {
        const index = state.formItems.findIndex(
          (formItem) => formItem.key === key
        );
        if (index !== -1) {
          state.formItems[index].required = !state.formItems[index].required;
        }
      });
    },
  }))
);
