import React from "react";
import BillingRowsComponent from "./BillingComponent";

const page = () => {
  return (
    <div className="gap2rem flex column h-[85vh]">
      <section className="flex column gap05rem sticky">
        <h2 className="font-[700] text-[24px]">Billing Information</h2>
        <p>
          Check your billing history from your first subscription, till date
        </p>
        <hr />
      </section>
      <BillingRowsComponent />
    </div>
  );
};

export default page;
