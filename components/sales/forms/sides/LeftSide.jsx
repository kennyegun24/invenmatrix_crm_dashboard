import React from "react";
import "./style.css";
import PricesForm from "./left/Prices";
import GeneralInfo from "./left/GeneralInfo";

const LeftSide = () => {
  return (
    <div className="flex column gap1rem">
      <GeneralInfo />
      <PricesForm />
    </div>
  );
};

export default LeftSide;
