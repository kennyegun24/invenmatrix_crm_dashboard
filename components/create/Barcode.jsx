import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BarcodeDialog = ({ text, barcode, setBarcode }) => {
  // const [barcode, setBarcode] = useState(null);
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="col-span-3 flex w-full gap-2 items-center">
        <p className="text-xs">{barcode}</p>
        <Button
          onClick={() => setBarcode(crypto.randomUUID())}
          className="text-xs"
          type="button"
        >
          Generate barcode
        </Button>
      </div>
    </div>
  );
};

export default BarcodeDialog;
