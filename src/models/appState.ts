import { AllowedFormKeys } from "./AllowedFormKeys";
import { AllowedSignatureKeys } from "./AllowedSignatureKeys";
import { FormItem } from "./FormItem";
import { SignatureItem } from "./SignatureItem";

export interface AppState {
  // Contribute FORM
  contributeValue: string;
  setContributeValue: (value: string) => void;

  // FORM
  formItems: FormItem[];
  setFormItems: (formItems: FormItem[]) => void;
  updateFormItemValue: (key: AllowedFormKeys, value: string) => void;
  toggleFormItemRequired: (key: AllowedFormKeys) => void;

  // SIGNATURES
  signatures: SignatureItem[];
  updateSignatureItemDataURL: (key: AllowedSignatureKeys, dataURL: string) => void;
  getSignatureItemDataURL: (key: AllowedSignatureKeys) => string;

  // MODALS
  printModalIsOpen: boolean;
  togglePrintModalIsOpen: () => void;

  helpModalIsOpen: boolean;
  toggleHelpModalIsOpen: () => void;

  
}
