import { orgs_settings } from "@/utils/org_settings";
import { Switch } from "@mui/material";
import React from "react";
import Preferences from "./_comps/preferences/Preferences";
import Management from "./_comps/userManagement/Management";
import DataManagement from "./_comps/data_management/DataManagement";

const page = () => {
  return (
    <div className="gap2rem flex column width50 small_scroll margin_auto overflow-auto h-[85vh]">
      <h1 className="font-[700] text-[28px] text-[--light_text] sticky top-0 w-full">
        Notification Settings
      </h1>
      <div className="w-[98%] margin-auto flex column gap3rem">
        <Preferences />
        {orgs_settings.map((setting) => (
          <div
            key={setting.key}
            className="flex column gap2rem organization_list_item width100"
          >
            <div className="flex column gap03rem">
              <h3 className="text-[20px] font-[600] text-[--light_text]">
                {setting.title}
              </h3>
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
                    <div className="pl-2">
                      <h5 className="font-[600] text-[16px]">{e.title}</h5>
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
