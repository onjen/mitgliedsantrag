import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
    const signatureCanvasRef = useRef(null);

    const clearSignature = () => {
      if(signatureCanvasRef.current) {
        signatureCanvasRef.current.clear();
      }
      
    };

    const saveSignature = () => {
      if(signatureCanvasRef.current) {
        const signatureImage = signatureCanvasRef.current.toDataURL();
        console.log('Signature Image:', signatureImage);
      }

    };

    return (
      <div>
        <SignatureCanvas
          ref={signatureCanvasRef}
          penColor='blue'
          canvasProps={{ width: 500, height: 200, className: 'signature-canvas' }}
        />
        <button onClick={clearSignature}>Clear Signature</button>
        <button onClick={saveSignature}>Save Signature</button>
      </div>
    );
  };

  export default SignaturePad;