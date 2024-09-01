"use client";
import { Switch } from "antd";
import React, { useContext } from "react";
import { FaChevronRight } from "react-icons/fa6";
import "./style.css";
import { ThemeContext } from "@/contexts/DarkMode";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Page = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const router = useRouter();
  const onchange = () => {
    toggle();
  };

  // const logout = () => {
  //   router.push("/login");
  // };

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
        <hr />
        <div
          onClick={async () => {
            await signOut();
          }}
          className="flex justify_between align_center pointer"
        >
          <p>Logout</p>
          <span className="settings_arrow_div flex justify_center align_center">
            <FaChevronRight />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Page;
