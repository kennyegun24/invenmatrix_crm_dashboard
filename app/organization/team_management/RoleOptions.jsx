import React, { useContext } from "react";
import { Dropdown, Menu } from "antd";
import { FaEllipsisH } from "react-icons/fa";
import { useTeamRoles } from "@/hooks/team_roles_hooks";
import { TeamRolesContext } from "@/contexts/TeamRolesPop";

const RoleOptions = ({ role, record }) => {
  const { handleEditRole } = useContext(TeamRolesContext);

  return (
    <div className="flex align_center justify_between">
      {role}
      <Dropdown
        overlayStyle={{
          background: "var(--sub_bg)",
        }}
        overlay={
          <Menu style={{ background: "transparent" }}>
            <Menu.Item
              className="text-[--light_text] hover:bg-[--selectTextHoverBg]"
              key="2"
              onClick={() => handleEditRole(record)}
            >
              Edit Role
            </Menu.Item>
            <Menu.Item
              className="text-[--light_text] hover:bg-[--selectTextHoverBg]"
              key="3"
            >
              Remove User
            </Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <FaEllipsisH
          style={{ marginLeft: 10, cursor: "pointer", fontWeight: 700 }}
        />
      </Dropdown>
    </div>
  );
};

export default RoleOptions;
