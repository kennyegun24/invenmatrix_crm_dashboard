import React from "react";
import SettingItemComponent from "../../SettingItem";
import TimeZonePickerDemo from "./SelectTimeZone";

const Preferences = () => {
  return (
    <div className="flex column gap15rem">
      <div className="flex column gap03rem">
        <h3 className="text-[20px] font-[700] text-[--light_text]">
          Preferences
        </h3>
        <hr className="hr" />
      </div>
      <div className="flex column gap1rem">
        {/* <TimeZoneComponent /> */}
        <TimeZonePickerDemo>
          <SettingItemComponent
            title={"Time Zone"}
            desc={`Set the default time zone for your organization.`}
            link_to={""}
          />
        </TimeZonePickerDemo>
      </div>
    </div>
  );
};

export default Preferences;
