import "./App.css";

import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material";

import ContributeTable from "./components/ContributeTable";
import AppBarWrapper from "./components/AppBarWrapper";
import { PersonalDataList } from "./components/PersonalDataList";
import { PrintModal } from "./components/PrintModal";
import { useAppStore } from "./stores/appStore";
import { useShallow } from "zustand/shallow";
import { BankAccountList } from "./components/BankAccountList";
import { HelpModal } from "./components/HelpModal";
import SignatureStack from "./components/SignatureStack";
import VolunteerArea from "./components/VolunteerArea";
import SepaArea from "./components/SepaArea";
import AddressArea from "./components/AddressArea";


function App() {
  const [togglePrintModalIsOpen] =
    useAppStore(
      useShallow((state) => [
        state.togglePrintModalIsOpen
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
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "block" }}>
        <CssBaseline />
        <AppBarWrapper />
        <PrintModal />
        <HelpModal />

        <Box component="main">
          <div className="no-print" style={{height: "30px"}}>
            {/* simples spacer div */}

          </div>
          <h1>Antrag auf Mitgliedschaft </h1>

          <div>
            <p>
              Hier mit beantrage ich die Mitgliedschaft im Erfindergeist Jülich
              e.V. zum nächstmöglichen Zeitpunkt. Ich habe die Vereinssatzung
              gelesen und bin mit deren Einhaltung einverstanden. Mir ist
              bewusst, dass mit der Annahme des Antrages eine Einladung zu den vereinsinternen
              Kommunikations- & Co-Working-Apps erfolgt.
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
              eine Mitgliedsnummer, welche Sie in den Überweisungen als
              Verwendungszweck angeben müssen. Bitte richten Sie einen
              Dauerauftrag ein oder nutzen Sie das Formular um ein
              Lastschriftmandat zu erteilen.
            </p>
          </div>

          <BankAccountList />

          <SignatureStack signatureKey="form" />
        
          <VolunteerArea />
          <AddressArea />

          {/* NEW SITE */}
          <SepaArea />
          <AddressArea />

          <div className="no-print">
            <Button
              variant="contained"
              onClick={() => togglePrintModalIsOpen()}
              fullWidth
            >
              Drucken
            </Button>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
