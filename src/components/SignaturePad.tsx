import { Button, Stack } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";

import { useResizeDetector } from "react-resize-detector";
import { BLANK_PNG } from "../const";
import { AllowedSignatureKeys } from "../models/AllowedSignatureKeys";

interface SignaturePadProps {
  signatureKey: AllowedSignatureKeys;
  onClose: () => void;
}
function SignaturePad(props: Readonly<SignaturePadProps>) {

  const signatureCanvasRef = useRef<SignatureCanvas>(null);
  const signatureCanvasWrapperRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeDetector({
    targetRef: signatureCanvasWrapperRef,
  });

  const [
    signatures,
    updateSignatureItemDataURL,
  ] = useAppStore(
    useShallow((state) => [
      state.signatures,
      state.updateSignatureItemDataURL,
    ])
  );

  const clearSignature = () => {
    if (signatureCanvasRef.current) {
      signatureCanvasRef.current?.clear();
      signatureCanvasRef.current?.fromDataURL(BLANK_PNG);
    }
  };

  const saveSignature = () => {
    if (signatureCanvasRef.current) {
      const signatureImage = signatureCanvasRef.current?.toDataURL();
      updateSignatureItemDataURL(props.signatureKey, signatureImage);
      props.onClose();
    }
  };

  useLayoutEffect(() => {
    if (width && signatureCanvasRef.current) {
      const x = signatureCanvasRef.current?.getCanvas();
      x.width = width;
      signatureCanvasRef.current.fromDataURL(  signatures.find(
        (signature) => signature.key === props.signatureKey
      )?.dataURL || BLANK_PNG);
    }
  }, [width, signatureCanvasRef, signatures, props.signatureKey]);

  return (
    <div>
      <div
        ref={signatureCanvasWrapperRef}
        style={{
          width: "100%",
        }}
      >
        <SignatureCanvas
          ref={signatureCanvasRef}
          penColor="blue"
          canvasProps={{ height: 200, className: "signature-canvas" }}
        />
      </div>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
        useFlexGap
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => props.onClose()}
          sx={{ width: { xs: "100%", md: "auto" } }}
        >
          schließen
        </Button>

        <Button
          variant="outlined"
          onClick={() => clearSignature()}
          sx={{ width: { xs: "100%", md: "auto" } }}
        >
          Löschen
        </Button>

        <Button
          variant="contained"
          onClick={() => saveSignature()}
          sx={{ width: { xs: "100%", md: "auto" } }}
        >
          Speichern
        </Button>
      </Stack>
    </div>
  );
}

export default SignaturePad;
