import BarcodeComponent from "@/components/BARCODE";
import React, { useState } from "react";

const BarcodeGenerate = () => {
  const [generateBarcode, setGenerateBarcode] = useState(false);
  return (
    <div className="flex column gap1rem border_all padding1rem generate_barcode">
      <h2>Generate Barcode</h2>
      {generateBarcode && <BarcodeComponent text={generateBarcode} />}
      <button onClick={() => setGenerateBarcode(crypto.randomUUID())}>
        Generate Barcode
      </button>
    </div>
  );
};

export default BarcodeGenerate;
