import {
  Box,
  Button,
  Modal,
  Stack,
} from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { Print } from "@mui/icons-material";
import { modalBoxStyle } from "../styles/styles";
import { PRINT_SETTINGS_TEXT } from "../const";

export function PrintModal() {
  const [printModalIsOpen, togglePrintModalIsOpen] = useAppStore(
    useShallow((state) => [
      state.printModalIsOpen,
      state.togglePrintModalIsOpen,
    ])
  );

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
      <Box sx={modalBoxStyle}>
        <h2>Drucken</h2>

            {PRINT_SETTINGS_TEXT}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 1, md: 1 }}
              useFlexGap
              sx={{
                padding: "8px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button onClick={() => togglePrintModalIsOpen()} fullWidth>
                Abbrechen
              </Button>
              <Button
                variant="contained"
                onClick={() => handlePrint()}
                endIcon={<Print />}
                fullWidth
              >
                Drucken
              </Button>
            </Stack>


      </Box>
    </Modal>
  );
}
