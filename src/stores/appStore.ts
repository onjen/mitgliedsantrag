import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getInitialFormItems } from "../utils/getInitialFormItems";
import { AppState } from "../models/appState";
import { getInitialSignatureItems } from "../utils/getInitialSignatureItems";
import { allowedFormKeys, requiredFormKeys } from "../const";
import { AllowedFormKeys } from "../models/AllowedFormKeys";

export const useAppStore = create<AppState>()(
  immer((set, get) => ({
    contributeValue: "noting",
    setContributeValue: (value) => set({ contributeValue: value }),
    formItems: getInitialFormItems(
      allowedFormKeys as unknown as AllowedFormKeys[],
      requiredFormKeys
    ),
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
    updateSignatureItemDataURL: (dataURL) => {
      set((state) => {
        const index = state.signatures.findIndex(
          (signature) => signature.key === state.signatureKey
        );
        if (index !== -1) {
          state.signatures[index].dataURL = dataURL;
        }
      });
    },
    getSignatureItemDataURL: () => {
      const index = get().signatures.findIndex(
        (signature) => signature.key === get().signatureKey
      );
      if (index !== -1) {
        return get().signatures[index].dataURL;
      }

      return "";
    },
    printModalIsOpen: false,
    togglePrintModalIsOpen: () =>
      set((state) => {
        state.printModalIsOpen = !state.printModalIsOpen;
      }),
    helpModalIsOpen: false,
    toggleHelpModalIsOpen: () =>
      set((state) => {
        state.helpModalIsOpen = !state.helpModalIsOpen;
      }),
    signatureModalIsOpen: false,
    signatureKey: "form",
    toggleSignatureModalIsOpen: (signatureKey) =>
      set((state) => {
        if (signatureKey) {
          state.signatureKey = signatureKey;
        }

        state.signatureModalIsOpen = !state.signatureModalIsOpen;
      }),
  }))
);
