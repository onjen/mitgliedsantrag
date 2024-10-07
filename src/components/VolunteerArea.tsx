import {
  FormHelperText,
  Input,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function VolunteerArea() {
  return (
    <>
      <h2>Freiwillige angaben </h2>
      <ul>
        <li>
          <FormControl variant="standard" fullWidth>
            <Input aria-describedby="standard-weight-helper-text" multiline/>
            <FormHelperText id="standard-weight-helper-text">
              Beruf/Tätigkeitsort
            </FormHelperText>
          </FormControl>
        </li>
        <li>
        <FormControl variant="outlined" fullWidth>
            <Input aria-describedby="standard-weight-helper-text" multiline minRows={5}/>
            <FormHelperText id="standard-weight-helper-text" sx={{marginLeft: 0}}>
              Warum möchten Sie Mitglied bei uns werden?
            </FormHelperText>
          </FormControl>
        </li>
      </ul>
      <div>
        <p>Möchten sie aktiv bei der Vereinsplanung und Struktur mitwirken?</p>
      </div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Ja" control={<Radio />} label="Ja" />
          <FormControlLabel
            value="Vielleicht"
            control={<Radio />}
            label="Vielleicht"
          />
          <FormControlLabel value="Nein" control={<Radio />} label="Nein" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default VolunteerArea;
