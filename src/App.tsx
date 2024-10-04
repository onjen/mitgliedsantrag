import "./App.css";

import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  FormControl,
  FormControlLabel,
  PaletteColorOptions,
  Radio,
  RadioGroup,
  TextField,
  ThemeProvider,
} from "@mui/material";

import ContributeTable from "./components/ContributeTable";
import AppBarWrapper from "./components/AppBarWrapper";
import { PersonalDataList } from "./components/PersonalDataList";
import { PrintModal } from "./components/PrintModal";
import { useAppStore } from "./stores/appStore";
import { useShallow } from "zustand/shallow";

function App() {
  const [togglePrintModalIsOpen] = useAppStore(
    useShallow((state) => [
      state.togglePrintModalIsOpen,
    ])
  );

  const primary: PaletteColorOptions = {
    main: "#159989",
    light: "#159989",
    dark: "#159989",
    contrastText: "#fff",
  };

  const secondary: PaletteColorOptions = {
    main: "#F9B338",
    light: "#F9B338",
    dark: "#F9B338",
    contrastText: "#000",
  };

  const theme = createTheme({
    palette: {
      primary: primary,
      secondary: secondary,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "block" }}>
        <CssBaseline />
        <AppBarWrapper />
        <PrintModal />
        <Box component="main" sx={{ p: 3 }}>
          <h1>Antrag auf Mitgliedschaft </h1>

          <div>
            <p>
              Hier mit beantrage ich die Mitgliedschaft im Erfindergeist Jülich
              e.V. zum nächstmöglichen Zeitpunkt. Ich habe die Vereinssatzung
              gelesen und bin mit der Einhaltung derer einverstanden. Mir ist
              bewusst, dass mit der Annahme des Antrages eine Einladung zu den
              Kommunikation- & Co-Working-Apps erfolgen und die Bildrechte
              abgegeben werden.
            </p>
          </div>

          <ContributeTable />

          <PersonalDataList />

          <div>
            <p>
              Personen unter 16 Jahren sollten sich mit einem
              Erziehungsberechtigten anmelden, siehe Vereinssatzung.
            </p>
            <p>
              Alle Daten werden unter strenger Beachtung der EU-DSGVO,
              ausschließlich für vereinsinterne Zwecke vom Vorstand EDV-gestützt
              verarbeitet. Mit der Bestätigung der Mitgliedschaft erhalten Sie
              eine Mitgliedsnummer, die Sie in den Überweisungen als
              Verwendungszweck angeben müssen. Bitte richten Sie einen
              Dauerauftrag ein oder nutzen Sie das Formular für ein
              Lastschriftmandat.

            </p>
            <ul>
                <li>Kontoinhaberin: Erfindergeist Jülich e.V.</li>
                <li>IBAN: DE20 3955 0110 1201 5533 00</li>
                <li>BIC: SDUEDE33XXX </li>
                <li>
                  Verwendungszweck: Mitgliedsnummer (Wird Ihnen per E-Mail
                  mitgeteilt)
                </li>
              </ul>
            <TextField
              id="standard-basic"
              label="Unterschrift"
              variant="standard"
              fullWidth
              disabled
            />
          </div>

          <h2>Freiwillige angaben </h2>
          <ul>
            <li>
              <TextField
                id="standard-basic"
                label="Beruf/Tätigkeitsort"
                variant="standard"
                fullWidth
              />
            </li>
            <li>
              <TextField
                id="standard-basic"
                label="Warum möchten Sie Mitglied bei uns werden?"
                variant="outlined"
                minRows={3}
                multiline
                fullWidth
              />
            </li>
          </ul>
          <div>
            <p>
              Möchten sie aktiv bei der Vereinsplanung und Struktur mitwirken?
            </p>
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

          <h1>SEPA-Lastschriftmandat</h1>
          <div>
            <p>
              Gläubiger-Identifikationsnummer: DE27ZZZ00002425162 Hier mit
              ermächtige ich, dass der Erfindergeist Jülich mittels Lastschrift
              die im Antrag angekreuzte Zahlung einziehen darf. Zugleich weise
              ich mein Kreditinstitut an, die vom Erfindergeist Jülich e.V. auf
              mein Konto gezogene Lastschrift einzulösen.
            </p>
          </div>
          <ul>
            <li>
              <TextField
                id="standard-basic"
                label="Kontoinhaber"
                variant="standard"
                fullWidth
              />
            </li>
            <li>
              <TextField
                id="standard-basic"
                label="Kreditinstitut"
                variant="standard"
                fullWidth
              />
            </li>
            <li>
              <TextField
                id="standard-basic"
                label="IBAN"
                variant="standard"
                fullWidth
              />
            </li>
            <li>
              <TextField
                id="standard-basic"
                label="BIC"
                variant="standard"
                fullWidth
              />
            </li>
            <li>
              <TextField
                id="standard-basic"
                label="Unterschrift"
                variant="standard"
                fullWidth
                disabled
              />
            </li>
          </ul>
          <div>
            <p>
              abschicken an: <br></br>
              Erfindergeist Jülich e.V. <br></br>
              Buchenweg 16 <br></br>
              52399 Merzenich <br></br>
              <br></br>
              oder <br></br>
              Persönlich bei uns in der{" "}
              <a href="https://werkstatt.erfindergeist.org" target="_blank">
                Werkstatt
              </a>{" "}
              abgeben.
            </p>
          </div>

          <div className="no-print">
            <Button variant="contained" onClick={() => togglePrintModalIsOpen()}>
              Drucken
            </Button>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
