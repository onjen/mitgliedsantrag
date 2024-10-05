import {

  Box,
  Button,
  Modal,
} from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { modalBoxStyle } from "../styles/styles";
import SignaturePad from "./SignaturePad";

export function SignatureModal() {
  const [signatureModalIsOpen, toggleSignatureModalIsOpen] = useAppStore(
    useShallow((state) => [state.signatureModalIsOpen, state.toggleSignatureModalIsOpen])
  );

  return (
    <Modal
      open={signatureModalIsOpen}
      onClose={() => toggleSignatureModalIsOpen()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="no-print"
    >
      <Box sx={modalBoxStyle}>
        <h2>Unterschrift</h2>

        <SignaturePad />

        <Button onClick={() => toggleSignatureModalIsOpen()} fullWidth>
          Schließen
        </Button>
      </Box>
    </Modal>
  );
}
