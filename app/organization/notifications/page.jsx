import { orgs_settings } from "@/utils/org_settings";
import { Switch } from "@mui/material";
import React from "react";
import Preferences from "./_comps/preferences/Preferences";
import Management from "./_comps/userManagement/Management";
import DataManagement from "./_comps/data_management/DataManagement";

const page = () => {
  return (
    <div className="gap2rem flex column">
      <h1 className="font-[700] text-[28px] text-[--light_text]">
        Notification Settings
      </h1>
      <div className="organization_page_list flex column gap2rem">
        <Preferences />
        {orgs_settings.map((setting) => (
          <div key={setting.key} className="flex column gap15rem">
            <div className="flex column gap03rem">
              <h3 className="text-[20px] font-[700] text-[--light_text]">
                {setting.title}
              </h3>
              <hr className="hr" />
            </div>
            <div className="flex column gap1rem">
              {setting.children.map((e) => {
                const hasNotificationText =
                  setting.title.includes("Notification");
                return (
                  <div
                    key={e.key}
                    className={`flex justify_between align_center ${
                      !hasNotificationText && "pointer"
                    }`}
                  >
                    <div>
                      <h5 className="font-[600] text-[17px]">{e.title}</h5>
                      <p className="text-[14px] text-[--light_text]">
                        {e.desc}
                      </p>
                    </div>
                    {hasNotificationText && <Switch />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <Management />
        <DataManagement />
      </div>
    </div>
  );
};

export default page;
