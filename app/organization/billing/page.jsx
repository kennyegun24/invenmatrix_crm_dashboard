import React from "react";
import BillingRowsComponent from "./BillingComponent";

const page = () => {
  return (
    <div className="gap2rem flex column">
      <h2 className="font-[700] text-[28px]">Billing Information</h2>
      <BillingRowsComponent />
    </div>
  );
};

export default page;
