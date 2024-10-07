import {
  FormControl,
  FormHelperText,
  Input,
  Stack,
} from "@mui/material";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [signatures, updateSignatureItemDate, updateSignatureItemLocation] =
    useAppStore(
      useShallow((state) => [
        state.signatures,
        state.updateSignatureItemDate,
        state.updateSignatureItemLocation,
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
        <FormControl variant="standard" fullWidth>
          <Input
            aria-describedby="standard-weight-helper-text"
            onChange={(event) =>
              updateSignatureItemDate(props.signatureKey, event.target.value)
            }
            value={
              signatures.find(
                (signature) => signature.key === props.signatureKey
              )?.date
            }
          />
          <FormHelperText id="standard-weight-helper-text">
            Datum
          </FormHelperText>
        </FormControl>

        <FormControl variant="standard" fullWidth>
          <Input
            aria-describedby="standard-weight-helper-text"
            onChange={(event) =>
              updateSignatureItemLocation(
                props.signatureKey,
                event.target.value
              )
            }
            value={
              signatures.find(
                (signature) => signature.key === props.signatureKey
              )?.location
            }
          />
          <FormHelperText id="standard-weight-helper-text">Ort</FormHelperText>
        </FormControl>

        <FormControl
          variant="standard"
          onClick={() => setModalIsOpen(true)}
          fullWidth
        >
          <Input
            id="input-with-icon-adornment"
            value={
              signatures.find(
                (signature) => signature.key === props.signatureKey
              )?.dataURL === BLANK_PNG
                ? ""
                : " "
            }
            readOnly
          />
          <img
            width="100%"
            height="80%"
            style={{
              position: "absolute",
            }}
            src={
              signatures.find(
                (signature) => signature.key === props.signatureKey
              )?.dataURL
            }
          />

          <FormHelperText id="standard-weight-helper-text">
            Unterschrift
          </FormHelperText>
        </FormControl>
      </Stack>
    </>
  );
}

export default SignatureStack;
