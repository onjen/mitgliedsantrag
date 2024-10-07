import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Modal,
} from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { ExpandMore } from "@mui/icons-material";
import { modalBoxStyle } from "../styles/styles";
import { ADDRESS_ARRAY, MAIL_ADDRESS, PRINT_SETTINGS_TEXT } from "../const";

export function HelpModal() {
  const [helpModalIsOpen, toggleHelpModalIsOpen] = useAppStore(
    useShallow((state) => [state.helpModalIsOpen, state.toggleHelpModalIsOpen])
  );

  return (
    <Modal
      open={helpModalIsOpen}
      onClose={toggleHelpModalIsOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="no-print"
    >
      <Box sx={modalBoxStyle}>
        <h2>Hilfe</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Druck Hilfe
          </AccordionSummary>
          <AccordionDetails>{PRINT_SETTINGS_TEXT}</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Senden via E-Mail
          </AccordionSummary>
          <AccordionDetails>
            Vollständig ausgefüllte Anträge können Sie auch als PDF Drucken und
            uns direkt senden. Sie können den Antrag auch Drucken und von Hand
            ausfüllen, im anschluss Scannen und uns via E-Mail senden, an:{" "}
            <br />
            <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Senden via Post
          </AccordionSummary>
          <AccordionDetails>
            Vollständig ausgefüllte Anträge an folgende Adresse
            senden:
            <ul>
              {ADDRESS_ARRAY.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>

        <Button onClick={() => toggleHelpModalIsOpen()} fullWidth>
          Schließen
        </Button>
      </Box>
    </Modal>
  );
}
