import React from "react";
import { GoKey } from "react-icons/go";
import MappedKeysComponent from "./MappedKeysComponent";
import { Button } from "antd";

const page = () => {
  const arr = Array.from({ length: 4 });
  return (
    <div className="organization_sub_pages flex column gap2rem relative">
      <div className="z-50 sticky flex column gap1rem">
        <h3 className="text-[20px] font-[700] flex align_center gap05rem">
          Secret API Key <GoKey size={16} />
        </h3>
        <div className="border_all padding1rem">
          <p>
            Your API keys are securely encrypted before being stored in our
            database. Neither our team at Invenmatrix nor anyone else can view
            your keys.
          </p>
        </div>
      </div>

      {arr.map((e, _) => (
        <MappedKeysComponent key={_} />
      ))}
      <button className="text-[#000] rounded-[6px] bg-[--green_color] hover:border-green-200 border-2 border-solid border-transparent hover:bg-transparent sticky bottom-0 z-40">
        Add new API key
      </button>
    </div>
  );
};

export default page;
