import BarcodeComponent from "@/components/BARCODE";
import React, { useState } from "react";

const BarcodeGenerate = ({ setData }) => {
  const [generateBarcode, setGenerateBarcode] = useState("");
  return (
    <div className="flex column gap1rem border_all align_center padding1rem generate_barcode">
      <h2>Generate Barcode</h2>
      {generateBarcode.trim().length > 1 && (
        <BarcodeComponent text={generateBarcode} />
      )}
      <button
        className={
          // ${
          // ${generateBarcode ? "disable_barcode" : "enable_barcode"}
          // }
          `generate_barcode_btn enable_barcode`
        }
        // disabled={generateBarcode}
        onClick={(e) => {
          const generatedUUID = crypto.randomUUID();
          generateBarcode.trim().length <= 0
            ? [
                e.preventDefault(),
                setGenerateBarcode(generatedUUID),
                setData((prev) => ({ ...prev, barcode: generatedUUID })),
              ]
            : [e.preventDefault(), setGenerateBarcode("")];
        }}
      >
        {generateBarcode.trim().length <= 0
          ? "Generate Barcode"
          : "Generate new barcode"}
      </button>
    </div>
  );
};

export default BarcodeGenerate;
