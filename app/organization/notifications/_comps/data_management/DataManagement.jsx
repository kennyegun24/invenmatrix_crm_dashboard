import React from "react";
import SettingItemComponent from "../../SettingItem";
import Export from "../data/Export";

const Management = () => {
  return (
    <div>
      <div className="flex column gap15rem">
        <div className="flex column gap03rem">
          <h3 className="text-[20px] font-[700] text-[--light_text]">
            Data Management
          </h3>
          <hr className="hr" />
        </div>
        <div className="flex column gap05rem">
          <Export>
            <SettingItemComponent
              title={"Data Export"}
              desc={`Export your inventory and organizational data in CSV format.`}
              // link_to={""}
            />
          </Export>
          {/* <SettingItemComponent
            title={"Data Backup"}
            desc={`Schedule regular data backups to ensure the safety of your information.`}
            // link_to={""}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Management;
// 6130039276 globus bazi obiaderi eze
// 31000

/**
 * 100,000
 * 8,500
 * 5,000
 * 100,000
 *
 * 80,000 for designer template overflow
 * 40,000 for invenmatrix
 * 20,000 for 3d
 *
 * 250,000
 */
