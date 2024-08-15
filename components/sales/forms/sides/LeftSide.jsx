import React from "react";
import "./style.css";
import PricesForm from "./left/Prices";
import GeneralInfo from "./left/GeneralInfo";
import OptionalFields from "./left/OptionalFields";

const LeftSide = () => {
  return (
    <div className="flex column gap1rem">
      <GeneralInfo />
      <PricesForm />
      <OptionalFields />
    </div>
  );
};

export default LeftSide;
