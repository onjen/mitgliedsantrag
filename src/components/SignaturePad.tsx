import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function SignaturePad() {
  const signatureCanvasRef = useRef<SignatureCanvas>(null);
  const signatureCanvasWrapperRef = useRef<HTMLDivElement>(null);

  const clearSignature = () => {
    if (signatureCanvasRef.current) {
      signatureCanvasRef.current?.clear();
    }
  };

  const saveSignature = () => {
    if (signatureCanvasRef.current) {
      const signatureImage = signatureCanvasRef.current?.toDataURL();
      console.log("Signature Image:", signatureImage);
    }
  };

  useEffect(() => {
    if(signatureCanvasRef.current && signatureCanvasWrapperRef.current) {
      const x = signatureCanvasRef.current?.getCanvas() 
      x.width = signatureCanvasWrapperRef.current.clientWidth
    }

  }, [signatureCanvasRef, signatureCanvasWrapperRef]);

  return (
    <div>
      <div 
      ref={signatureCanvasWrapperRef}
      style={{
        width: "100%"
        
      }}>
      <SignatureCanvas
        ref={signatureCanvasRef}
        penColor="blue"
        canvasProps={{ height: 200, className: "signature-canvas" }}
        
      />
      </div>

      <Button variant="contained" onClick={() => clearSignature()}>
        Löschen
      </Button>

      <Button variant="contained" onClick={() => saveSignature()}>
        Speichern
      </Button>
    </div>
  );
}

export default SignaturePad;
