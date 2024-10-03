import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RadioWrapper from "./RadioWrapper";
import { TextField } from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
function createData(key: string, name: string, month: number) {
  return { key, name, month };
}

const rows = [
  createData("a", "- ordentliches Mitglied", 10),
  createData("b", "- Förder Mitgliedschaft: 1. Natürliche Personen", 10),
  createData("c", "- Förder Mitgliedschaft: 2. Juristische Personen", 15),
  createData("d", "- Individuelle Förderung:", 0),
];

export default function ContributeTable() {
  const [contributeValue, setContributeValue] = useAppStore(
    useShallow((state) => [state.contributeValue, state.setContributeValue]),
  )

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setContributeValue(event.target.value);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Mitgliedsbeitragsmodell</TableCell>
            <TableCell align="right">Monatlich</TableCell>
            <TableCell align="right">Jährlich</TableCell>
            <TableCell align="right">Auswahl</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            if (row.key === "d") {
              return (
                <TableRow
                  key={row.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={3} component="th" scope="row">
                    {row.name}
                    <br />
                    Ich fördere den Erfindergeist Jülich e.V. mit folgendem
                    Betrag (in Euro, pro Monat):
                    <TextField
                      id="standard-basic"
                      label="Monats Beitrag"
                      variant="standard"
                      fullWidth
                    />
                    Dieser Betrag wird gesammelt, einmal jährlich überwiesen
                    oder abgebucht. Juristische Personen geben bitte den Namen
                    einer natürlichen Person als Vertreter an
                    (Unternehmensname).
                  </TableCell>
                  <TableCell align="right">
                    <RadioWrapper
                      checkValue={row.key}
                      selectedValue={contributeValue}
                      onChange={handleRadioChange}
                    />
                  </TableCell>
                </TableRow>
              );
            }
            return (
              <TableRow
                key={row.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.month}€</TableCell>
                <TableCell align="right">{row.month * 12}€</TableCell>
                <TableCell align="right">
                  <RadioWrapper
                    checkValue={row.key}
                    selectedValue={contributeValue}
                    onChange={handleRadioChange}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
