import { TextField } from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";

export function PersonalDataList() {
  const [formItems, updateFormItemValue] = useAppStore(
    useShallow((state) => [state.formItems, state.updateFormItemValue])
  );

  return (
    <ul>
      {formItems.map((formItem) => {
        return (
          <li key={formItem.key}>
            <TextField
              id="standard-basic"
              label={formItem.key}
              variant="standard"
              fullWidth
              value={
                formItems.find(
                  (formItemFind) => formItemFind.key === formItem.key
                )?.value
              }
              onChange={(event) => {
                updateFormItemValue(formItem.key, event.target.value);
              }}
              required={formItem.required}
            />
          </li>
        );
      })}
    </ul>
  );
}
