"use client";
import React from "react";
import Barcode from "react-barcode";

const BarcodeComponent = () => {
  return <Barcode height={"50%"} value="randombrcode" fontSize={14} />;
};

export default BarcodeComponent;
