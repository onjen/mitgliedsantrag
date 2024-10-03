import { TextField } from "@mui/material";
import { IFromKeys, useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";

export function PersonalDataList() {
  const [form, setForm] = useAppStore(
    useShallow((state) => [state.form, state.setForm])
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: IFromKeys) {
    form[key] = event.target.value
    setForm(form)
  }

  return (
    <>
    {JSON.stringify(form)}
    <ul>
      {Object.keys(form).map((key) => {
        return (
          <li key={key}>
            <TextField
              id="standard-basic"
              label={key}
              variant="standard"
              fullWidth
              onChange={(event) => {
                setForm({
                  ...form,
                  
                })
              }}
            />
          </li>
        );
      })}
    </ul>
    </>
  );
}
