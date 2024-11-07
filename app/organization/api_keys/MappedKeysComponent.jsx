"use client";
import { toastSuccess } from "@/libs/toast";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "sonner";
const MappedKeysComponent = () => {
  const [showKey, setShowKey] = useState(false);
  const copyFunction = (param) => {
    const copyText = param;
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        return toast.success("Key copied!");
      })
      .catch((error) => {
        toast.success("Key not copied!");
      });
  };
  const displayKey = () => {
    setShowKey((prev) => !prev);
  };
  const text = crypto.randomUUID();
  return (
    <div className="flex column gap2rem">
      <h3 className="font-[700] text-[16px]">Google Public API</h3>
      <p className="text-[16px] font-[700] flex column gap03rem">
        Website Link:{" "}
        <a className="text-[16px] font-[400]" href="https://google.com?s=api">
          https://google.com?s=api
        </a>
      </p>

      <section className="flex column gap05rem">
        <h3 className="font-[700] text-[16px]">API Key</h3>
        <div className="overflow-hidden border_all relative padding1rem flex align_center justify_between gap1rem w-fit min-w-[45%] max-w-[60%]">
          <p className="overflow-hidden">
            {showKey ? text : "******************************"}
          </p>

          <div
            // style={{ background: "var(--main_bg)" }}
            className="flex align_center pl-1 pr-1 gap05rem absolute right-[.5rem] bg-[--main_bg] bg-opacity-25 z-30"
          >
            {!showKey ? (
              <IoIosEye
                onClick={() => displayKey()}
                size={24}
                color="#000"
                className="h-[30px] w-[30px] p-[0.5rem] bg-[#000] rounded-[6px] pointer hover:bg-[#888888]"
              />
            ) : (
              <IoIosEyeOff
                onClick={() => displayKey()}
                size={24}
                color="#000"
                className="h-[30px] w-[30px] p-[0.5rem] bg-[#000] rounded-[6px] pointer hover:bg-[#888888]"
              />
            )}
            <FiCopy
              onClick={() => copyFunction(text)}
              size={24}
              className="h-[30px] w-[30px] p-[0.5rem] bg-[#22ad01] rounded-[6px] pointer hover:bg-[#000]"
            />
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default MappedKeysComponent;
