import { BLANK_PNG } from "../const";
import { AllowedSignatureKeys } from "../models/AllowedSignatureKeys";
import { SignatureItem } from "../models/SignatureItem";

export function getInitialSignatureItems(
  allowedSignatureKeys: AllowedSignatureKeys[]
): SignatureItem[] {
  return allowedSignatureKeys.map((key) => {
    return {
      key,
      dataURL: BLANK_PNG,
    };
  });
}
