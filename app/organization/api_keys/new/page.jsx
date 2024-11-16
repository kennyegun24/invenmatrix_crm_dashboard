import React from "react";
import ApiKeysForm from "./Form";

const page = () => {
  return (
    <div className="flex column gap15rem width50 small_scroll margin_auto overflow-auto h-[85vh]">
      <div className="sticky flex column z-50">
        <h3 className="text-[24px] font-[700]">Add new API key</h3>
        <p>This API key will be saved in your key manager</p>
      </div>
      <ApiKeysForm />
    </div>
  );
};

export default page;
