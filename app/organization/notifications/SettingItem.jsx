import Link from "next/link";
import React from "react";

const SettingItemComponent = ({ desc, title, link_to }) => {
  return (
    <>
      {link_to ? (
        <Link
          href={link_to}
          className={`flex justify_between align_center pointer hover:bg-[--sub_bg] py-2 pl-4`}
        >
          <div>
            <h5 className="font-[600] text-[17px]">{title}</h5>
            <p className="text-[14px] text-[--light_text]">{desc}</p>
          </div>
        </Link>
      ) : (
        <div
          // href={link_to}
          className={`flex justify_between align_center pointer hover:bg-[--sub_bg] py-2 pl-4`}
        >
          <div>
            <h5 className="font-[600] text-[17px]">{title}</h5>
            <p className="text-[14px] text-[--light_text]">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingItemComponent;
