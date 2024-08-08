"use client";
import { Switch } from "antd";
import React, { useContext } from "react";
import { FaChevronRight } from "react-icons/fa6";
import "./style.css";
import { ThemeContext } from "@/contexts/DarkMode";

const Page = () => {
  const { toggle, mode } = useContext(ThemeContext);

  const onchange = () => {
    toggle();
  };

  return (
    <div className="flex column gap4rem settings_page">
      <h1>Settings</h1>

      <section className="flex column gap2rem">
        <div className="flex column gap15rem">
          <h3>Theme</h3>
          <hr />
          <div className="flex justify_between">
            <p>Dark mode</p>
            {/* <Switch /> */}
            <Switch
              checked={mode === "dark" ? true : false}
              onChange={onchange}
            />
          </div>
        </div>
        <div className="flex column gap15rem">
          <h3>Account Settings</h3>
          <hr />
          <div className="flex justify_between align_center">
            <p>Change password</p>
            <span className="settings_arrow_div flex justify_center align_center">
              <FaChevronRight />
            </span>
          </div>
          <div className="flex justify_between align_center">
            <p>Edit Profile</p>
            <span className="settings_arrow_div flex justify_center align_center">
              <FaChevronRight />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
