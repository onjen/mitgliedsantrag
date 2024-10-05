import { SignatureItem } from "../models/SignatureItem";

export function getInitialSignatureItems(allowedSignatureKeys: string[]): SignatureItem[] {
  return allowedSignatureKeys.map((key) => {
    return {
      key,
      signatureDataURL: "",      
    };
  });
}