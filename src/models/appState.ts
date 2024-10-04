import { AllowedFormKeys } from "./AllowedFormKeys";
import { FormItem } from "./FormItem";

export interface AppState {
  contributeValue: string;
  setContributeValue: (value: string) => void;
  formItems: FormItem[];
  setFormItems: (formItems: FormItem[]) => void;
  updateFormItemValue: (key: AllowedFormKeys, value: string) => void;
  toggleFormItemRequired: (key: AllowedFormKeys) => void;
}