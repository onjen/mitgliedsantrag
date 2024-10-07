import { Edit } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { AllowedSignatureKeys } from "../models/AllowedSignatureKeys";
import { BLANK_PNG } from "../const";
import SignatureModal from "./SignatureModal";
import { useState } from "react";

interface SignatureStackProps {
  signatureKey: AllowedSignatureKeys;
}

function SignatureStack(props: Readonly<SignatureStackProps>) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [getSignatureItemDataURL] =
    useAppStore(
      useShallow((state) => [
        state.getSignatureItemDataURL,
      ])
    );

  return (
    <>
      <SignatureModal 
        signatureKey={props.signatureKey}
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}

      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
        useFlexGap
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          id="standard-basic"
          label="Datum"
          variant="standard"
          defaultValue={new Date().toLocaleDateString()}
          sx={{ width: { xs: "100%", md: "auto" } }}
        />

        <TextField
          label="Ort"
          variant="standard"
          sx={{ width: { xs: "100%", md: "auto" } }}
        />

        <TextField
          onClick={() => setModalIsOpen(true)}
          inputProps={{ readOnly: true }}
          value={
            getSignatureItemDataURL(props.signatureKey) === BLANK_PNG ? "" : " "
          }
          label="Unterschrift"
          variant="standard"
          sx={{
            width: { xs: "100%", md: "100%" },
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundImage: `url("${getSignatureItemDataURL(
              props.signatureKey
            )}")`,
          }}
        />

        <IconButton
          aria-label="Unterschreiben"
          onClick={() => setModalIsOpen(true)}
        >
          <Edit />
        </IconButton>
      </Stack>
    </>
  );
}

export default SignatureStack;
