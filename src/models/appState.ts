import { AllowedFormKeys } from "./AllowedFormKeys";
import { FormItem } from "./FormItem";

export interface AppState {
  // Contribute FORM
  contributeValue: string;
  setContributeValue: (value: string) => void;

  // FORM
  formItems: FormItem[];
  setFormItems: (formItems: FormItem[]) => void;
  updateFormItemValue: (key: AllowedFormKeys, value: string) => void;
  toggleFormItemRequired: (key: AllowedFormKeys) => void;

  // MODALS
  printModalIsOpen: boolean;
  togglePrintModalIsOpen: () => void;
}