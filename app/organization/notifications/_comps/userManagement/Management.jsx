import React from "react";
import SettingItemComponent from "../../SettingItem";

const Management = () => {
  return (
    <div>
      <div className="flex column gap15rem">
        <div className="flex column gap03rem">
          <h3 className="text-[20px] font-[700] text-[--light_text]">
            User Management
          </h3>
          <hr className="hr" />
        </div>
        <div className="flex column gap05rem">
          <SettingItemComponent
            title={"Manage Team Members"}
            desc={
              "Add, remove, or edit the roles of team members in your organization."
            }
            link_to={" "}
          />
          <SettingItemComponent
            title={"Role-Based Access Control"}
            desc={
              "Assign roles like Admin, Manager, or Viewer with specific permissions."
            }
            link_to={" "}
          />
        </div>
      </div>
    </div>
  );
};

export default Management;
// 6130039276 globus bazi obiaderi eze
// 31000
