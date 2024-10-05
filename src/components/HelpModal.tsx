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
          <AccordionDetails>
            Wir nutzen die Standard Druck-Funktion Ihres Browsers. Diese weiche
            je nach Drucker ab. Daher müssen Sie selber ein paar einstellungen
            vornehmen. Prüfen Sie bitte ob die Druckvorschau alles richtig
            anzeigt. Deaktivieren Sie gegebenenfalls unter "Weiteren
            Einstellungen" die "Kopf- und Fusszeilen"
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            senden via E-Mail
          </AccordionSummary>
          <AccordionDetails>
            Vollständig ausgefüllte Anträge können Sie auch als PDF Drucken und
            uns direkt senden. Sie können auch von Hand den Antrag ausfüllen, im
            anschluss Scannen und uns via E-Mail senden. E-Mail:{" "}
            <a href="mailto:vorstand@erfindergeist.org">
              vorstand@erfindergeist.org
            </a>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            senden via Post
          </AccordionSummary>
          <AccordionDetails>
            Vollständig ausgefüllte Anträge können Sie an: xxx senden.
          </AccordionDetails>
        </Accordion>

        <Button onClick={() => toggleHelpModalIsOpen()} fullWidth>
          Schließen
        </Button>
      </Box>
    </Modal>
  );
}
