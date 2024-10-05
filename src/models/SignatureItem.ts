import { AllowedSignatureKeys } from "./AllowedSignatureKeys";

export interface SignatureItem {
  key: AllowedSignatureKeys;
  signatureDataURL: string;
}