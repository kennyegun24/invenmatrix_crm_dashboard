"use client";
import React from "react";
import Barcode from "react-barcode";

const BarcodeComponent = ({ text }) => {
  return <Barcode height={"50%"} width={0.58} value={text} fontSize={14} />;
};

export default BarcodeComponent;
