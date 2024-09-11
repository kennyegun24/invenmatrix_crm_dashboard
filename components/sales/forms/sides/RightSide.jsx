import React from "react";
import UploadImage from "./right/UploadImage";
import Category from "./right/Category";
import BarcodeGenerate from "./right/BarcodeGenerate";

const RightSide = ({ setData }) => {
  return (
    <div className="flex column gap1rem">
      <UploadImage />
      <Category setData={setData} />
      <BarcodeGenerate setData={setData} />
    </div>
  );
};

export default RightSide;
