import { Edit } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { AllowedSignatureKeys } from "../models/AllowedSignatureKeys";
import { BLANK_PNG } from "../const";
import { SignatureItem } from "../models/SignatureItem";

interface SignatureStackProps {
  signatureKey: AllowedSignatureKeys;
}

function SignatureStack(props: Readonly<SignatureStackProps>) {
  const [toggleSignatureModalIsOpen, signatures] =
  useAppStore(
    useShallow((state) => [
      state.toggleSignatureModalIsOpen,
      state.signatures,
    ])
  );
  
  function getSignatureDataURL(key: AllowedSignatureKeys, signatures: SignatureItem[]): string {
    const index = signatures.findIndex((signature) => signature.key === key)
    if(index) {
      return signatures[index].dataURL;
    }
   
    return "";
  }

  return (
    <>
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

    <TextField label="Ort" variant="standard" sx={{ width: { xs: "100%", md: "auto" } }}/>

    <TextField 
      onClick={() => toggleSignatureModalIsOpen(props.signatureKey)}
      inputProps={{ readOnly: true }}
      value={getSignatureDataURL(props.signatureKey, signatures) === BLANK_PNG ? "" : " "}
      label="Unterschrift"
      variant="standard" 
      
      sx={{
        width: { xs: "100%", md: "100%" },
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundImage: `url("${getSignatureDataURL(props.signatureKey, signatures)}")`
    }}/>

    <IconButton
      aria-label="Unterschreiben"
      onClick={() => toggleSignatureModalIsOpen(props.signatureKey)}
    >
      <Edit />
    </IconButton>
  </Stack>
  {JSON.stringify(signatures)}

  props.signatureKey {props.signatureKey}

  signatureKey
  </>
  )
}

export default SignatureStack