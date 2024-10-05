import { AllowedSignatureKeys } from "./AllowedSignatureKeys";

export interface SignatureItem {
  key: AllowedSignatureKeys;
  dataURL: string;
}
