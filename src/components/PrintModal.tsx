import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Modal } from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { ExpandMore } from "@mui/icons-material";


export function PrintModal() {
  const [printModalIsOpen, togglePrintModalIsOpen] = useAppStore(
    useShallow((state) => [
      state.printModalIsOpen,
      state.togglePrintModalIsOpen,
    ])
  );

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "90vw",
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function handlePrint(): void {
    togglePrintModalIsOpen();
    window.print();
  }

  return (
    <Modal
      open={printModalIsOpen}
      onClose={togglePrintModalIsOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="no-print"
    >
      <Box sx={style}>
        <h2>
          Anleitung
        </h2>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Druck Hilfe
        </AccordionSummary>
        <AccordionDetails>
    
          Wir nutzen die Standard Druck-Funktion Ihres Browsers. Diese weiche je nach Drucker ab. Daher müssen Sie selber ein paar einstellungen vornehmen.
          Prüfen Sie bitte ob die Druckvorschau alles richtig anzeigt.
          Deaktivieren Sie gegebenenfalls unter "Weiteren Einstellungen" die "Kopf- und Fusszeilen"
   
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
          Vollständig ausgefüllte Anträge können Sie auch als PDF Drucken und uns direkt senden. Sie können auch von Hand den Antrag ausfüllen, im anschluss Scannen und uns via E-Mail senden. {" "}
          E-Mail: <a href="mailto:vorstand@erfindergeist.org">vorstand@erfindergeist.org</a>
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
          Vollständig ausgefüllte Anträge können Sie an:
          xxx
          senden.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Drucken
        </AccordionSummary>
        <AccordionDetails>
          Wir überlassen es Ihnen das Formular im Browser auszufüllen, es per Hand auszufüllen oder gemischt ausfüllen.
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={() => togglePrintModalIsOpen()}>Abbrechen</Button>
          <Button
          variant="contained"
          onClick={() => handlePrint()}
          fullWidth
        >
          Drucken
        </Button>
        </AccordionActions>
      </Accordion>

        <Button
          variant="contained"
          onClick={() => handlePrint()}
          fullWidth
        >
          Drucken
        </Button>
      </Box>
    </Modal>
  );
}
