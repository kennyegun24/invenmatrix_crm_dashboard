import { ThemeContext } from "@/contexts/DarkMode";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const Toggle = ({ click, collapsed }) => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        collapsed && "align_center"
      } toggle-theme-btn sticky flex column gap1rem`}
    >
      <Button
        className={`${collapsed ? "" : ""}`}
        type="button"
        onClick={toggle}
      >
        {mode === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
      <Button
        className={`${collapsed ? "" : ""}`}
        type="primary"
        onClick={click}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};

export default Toggle;
