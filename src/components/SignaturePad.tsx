import { Button, Stack } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";

import { useResizeDetector } from "react-resize-detector";

function SignaturePad() {
  const signatureCanvasRef = useRef<SignatureCanvas>(null);
  const signatureCanvasWrapperRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeDetector({
    targetRef: signatureCanvasWrapperRef,
  });

  const [
    updateSignatureItemDataURL,
    toggleSignatureModalIsOpen,
    getSignatureItemDataURL,
  ] = useAppStore(
    useShallow((state) => [
      state.updateSignatureItemDataURL,
      state.toggleSignatureModalIsOpen,
      state.getSignatureItemDataURL,
    ])
  );

  const clearSignature = () => {
    if (signatureCanvasRef.current) {
      signatureCanvasRef.current?.clear();
    }
  };

  const saveSignature = () => {
    if (signatureCanvasRef.current) {
      const signatureImage = signatureCanvasRef.current?.toDataURL();
      updateSignatureItemDataURL(signatureImage);
      toggleSignatureModalIsOpen();
    }
  };

  useLayoutEffect(() => {
    if (width && signatureCanvasRef.current) {
      const x = signatureCanvasRef.current?.getCanvas();
      x.width = width;
      signatureCanvasRef.current.fromDataURL(getSignatureItemDataURL());
    }
  }, [width, signatureCanvasRef, getSignatureItemDataURL]);

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

      {`width:${width} height:${height}`}
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
          onClick={() => toggleSignatureModalIsOpen()}
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
