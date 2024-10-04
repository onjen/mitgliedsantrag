import { FormItem } from "../models/FormItem";

export function getInitialFormItems(allowedFormKeys: string[], requiredFormKeys: string[]): FormItem[] {
  return allowedFormKeys.map((key) => {
    return {
      key,
      value: "",
      required: requiredFormKeys.includes(key),
    };
  });
}