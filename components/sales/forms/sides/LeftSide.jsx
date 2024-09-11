import React from "react";
import "./style.css";
import PricesForm from "./left/Prices";
import GeneralInfo from "./left/GeneralInfo";
import OptionalFields from "./left/OptionalFields";

const LeftSide = ({ setData, userData }) => {
  return (
    <div className="flex column gap1rem">
      <GeneralInfo setData={setData} />
      <PricesForm />
      <OptionalFields setData={setData} userData={userData} />
    </div>
  );
};

export default LeftSide;
