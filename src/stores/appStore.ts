import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getInitialFormItems } from "../utils/getInitialFormItems";
import { AppState } from "../models/appState";
import { getInitialSignatureItems } from "../utils/getInitialSignatureItems";
import { allowedFormKeys, requiredFormKeys } from "../const";

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
    signatures: getInitialSignatureItems(["form", "sepa"]),
    printModalIsOpen: false,
    togglePrintModalIsOpen: () => set((state) => {state.printModalIsOpen = !state.printModalIsOpen}),
    helpModalIsOpen: false,
    toggleHelpModalIsOpen: () => set((state) => {state.helpModalIsOpen = !state.helpModalIsOpen}),
    signatureModalIsOpen: false,
    signatureKey: "",
    toggleSignatureModalIsOpen: (signatureKey) => set((state) => {
      if(signatureKey) {
        state.signatureKey = signatureKey;
      }
      
      state.signatureModalIsOpen = !state.signatureModalIsOpen}
    )
  }))
);
