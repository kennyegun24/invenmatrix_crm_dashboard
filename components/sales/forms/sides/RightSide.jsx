import React from "react";
import UploadImage from "./right/UploadImage";
import Category from "./right/Category";
import BarcodeGenerate from "./right/BarcodeGenerate";

const RightSide = () => {
  return (
    <div className="flex column gap1rem">
      <UploadImage />
      <Category />
      <BarcodeGenerate />
    </div>
  );
};

export default RightSide;
