"use client";
import React, { useContext, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import "./style.css";
import { ThemeContext } from "@/contexts/DarkMode";
import Toggle from "./Toggle";
import MobileNav from "./MobileNav";
import { items } from "@/utils/navs";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { Sider } = Layout;
  const { mode } = useContext(ThemeContext);
  const router = useRouter();
  const path = usePathname();
  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    setOpenKeys([`/${path.split("/")[1]}`]);
  }, [router]);

  const handleMenuClick = (e) => {
    router.push(e.key);
  };
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };
  return (
    <>
      <Sider
        theme="dark"
        collapsed={collapsed}
        style={{ background: mode === "dark" ? "#102A43" : "#fff" }}
        className="sider flex column"
      >
        <div
          style={{
            color: mode === "dark" ? "#fff" : "#102a43",
            background: mode === "dark" ? "#102A43" : "#fff",
          }}
          className="flex justify_center align_center sticky header"
        >
          AJLCRM
        </div>
        <Menu
          onClick={handleMenuClick}
          className="menu-list flex column gap1rem"
          selectedKeys={[path]}
          multiple={true}
          mode="inline"
          activeKey={path}
          openKeys={openKeys}
          items={items}
          onOpenChange={handleOpenChange}
        />
        <Toggle click={toggleCollapsed} collapsed={collapsed} />
      </Sider>
      <MobileNav />
    </>
  );
};

export default NavBar;
