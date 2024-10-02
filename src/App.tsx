import React from "react";

import "./App.css";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import RadioWrapper from "./RadioWrapper";

function App() {
  const [selectedValue, setSelectedValue] = React.useState<string>("nothing");
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setSelectedValue(event.target.value);
    }
  };
  return (
    <>
      <div>
        <h1>Antrag auf Mitgliedschaft </h1>
        <div>
          <p>
            Hier mit beantrage ich die Mitgliedschaft im Erfindergeist Jülich
            e.V. zum nächstmöglichen Zeitpunkt. Ich habe die Vereinssatzung
            gelesen und bin mit der Einhaltung derer einverstanden. Mir ist
            bewusst, dass mit der Annahme des Antrages eine Einladung zu den
            Kommunikation- & Co-Working-Apps erfolgen und die Bildrechte
            abgegeben werden.{" "}
          </p>
        </div>
        {/* <h2>Mitgliedsbeitragsmodelle (Bitte ankreuzen):</h2> */}
        <table>
          <tr>
            <th>
              <p> Mitgliedsbeitragsmodell</p>
            </th>
            <th>
              <p>Monatlich</p>
            </th>
            <th>
              <p> Jährlich</p>
            </th>
            <th>
              <p>Auswahl</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>- ordentliches Mitglied</p>
            </td>
            <td>
              <p>10€</p>
            </td>
            <td>
              <p>120€</p>
            </td>
            <td>
              <RadioWrapper
                checkValue="a"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>- Förder Mitgliedschaft:1. Natürliche Personen</p>
            </td>
            <td>
              <p>10€</p>
            </td>
            <td>
              <p>120€</p>
            </td>
            <td>
              <RadioWrapper
                checkValue="b"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>- Förder Mitgliedschaft: 2. Juristische Personen</p>
            </td>
            <td>
              <p>15€</p>
            </td>
            <td>
              <p>180€</p>
            </td>
            <td>
              <RadioWrapper
                checkValue="c"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>
                - Individuelle Förderung:
                <br />
                Ich fördere den Erfindergeist Jülich e.V. mit folgendem Betrag
                (in Euro, pro Monat):
                <TextField
                  id="standard-basic"
                  label="Monats Beitrag"
                  variant="standard"
                  fullWidth
                />
                Dieser Betrag wird gesammelt, einmal jährlich überwiesen oder
                abgebucht. Juristische Personen geben bitte den Namen einer
                natürlichen Person als Vertreter an.
              </p>
            </td>
            <td>
              <RadioWrapper
                checkValue="d"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </td>
          </tr>
        </table>

        <ul>
          {selectedValue === "d" && (
            <li>
              <TextField
                id="standard-basic"
                label="Unternehmensname"
                variant="standard"
                fullWidth
                required={selectedValue === "d"}
              />
            </li>
          )}
          <li>
            <TextField
              id="standard-basic"
              label="Name, Titel"
              variant="standard"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              id="standard-basic"
              label="Vorname"
              variant="standard"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              id="standard-basic"
              label="Straße, Hausnummer"
              variant="standard"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              id="standard-basic"
              label="PLZ, Ort"
              variant="standard"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              id="standard-basic"
              label="Telefon"
              variant="standard"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              id="standard-basic"
              label="E-Mail"
              variant="standard"
              fullWidth
              required
            />
          </li>
        </ul>

        <p>
          Personen unter 16 Jahren sollten sich mit einem Erziehungsberechtigten
          anmelden, siehe Vereinssatzung.
        </p>
        <p>
          Alle Daten werden unter strenger Beachtung der EU-DSGVO,
          ausschließlich für vereinsinterne Zwecke vom Vorstand EDV-gestützt
          verarbeitet. Mit der Bestätigung der Mitgliedschaft erhalten Sie eine
          Mitgliedsnummer, die Sie in den Überweisungen als Verwendungszweck
          angeben müssen. Bitte richten Sie einen Dauerauftrag ein oder nutzen
          Sie das Formular für ein Lastschriftmandat. Kontoinhaberin:
          Erfindergeist Jülich e.V. IBAN: DE20 3955 0110 1201 5533 00 BIC:
          SDUEDE33XXX Verwendungszweck: Mitgliedsnummer (Wird Ihnen per E-Mail
          mitgeteilt)
        </p>

        <TextField
          id="standard-basic"
          label="Unterschrift"
          variant="standard"
          fullWidth
          disabled
        />
        <h1>Freiwillige angaben </h1>
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
        <p>
          Möchten sie aktiv bei der Vereinsplanung und Struktur mitwirken? xxxx
        </p>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
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
      </div>

      <div>
        <h1>SEPA-Lastschriftmandat</h1>
        <p>
          Gläubiger-Identifikationsnummer: DE27ZZZ00002425162
          Hier mit ermächtige ich, dass der Erfindergeist Jülich mittels Lastschrift die im Antrag
          angekreuzte Zahlung einziehen darf. Zugleich weise ich mein
          Kreditinstitut an, die vom Erfindergeist Jülich e.V. auf mein Konto
          gezogene Lastschrift einzulösen.
        </p>
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
    </>
  );
}

export default App;
