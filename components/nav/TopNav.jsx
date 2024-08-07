import React, { useContext } from "react";
import "./topnav.css";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { HomeContext } from "@/contexts/Home";
const TopNav = () => {
  const { toggle, collapsed } = useContext(HomeContext);
  return (
    <div className="flex align_center justify_end sticky topnav_component">
      <div className="gap1rem align_center pointer user_profile_nav">
        <div className="img_plh" />
        <div className="flex column align_center">
          <h5>Lorem Ipsum</h5>
          <p>My Profile</p>
        </div>
      </div>
      <div className="top_nav_logo">
        <h3>LogoIpsum</h3>
      </div>
      <div onClick={toggle} className="hamburger">
        <MenuUnfoldOutlined />
      </div>
    </div>
  );
};

export default TopNav;
