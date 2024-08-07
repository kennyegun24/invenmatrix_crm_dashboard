import React from "react";
import "./style.css";
import { TbChartHistogram } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import { PiUserSwitchLight } from "react-icons/pi";
import { MdOutlineInventory } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const navs = [
  {
    key: 1,
    icon: <TbChartHistogram />,
    text: "Dashboard",
  },
  {
    key: 2,
    icon: <BsBarChart />,
    text: "Sales Performance",
  },
  {
    key: 3,
    icon: <PiUserSwitchLight />,
    text: "Customer Insights",
  },
  {
    key: 4,
    icon: <MdOutlineInventory />,
    text: "Inventory",
  },
  {
    key: 5,
    icon: <IoMegaphoneOutline />,
    text: "Marketing",
  },
];

const NavBar = () => {
  return (
    <div className="navbar_component flex column gap1rem sticky">
      <h2 className="text_center">LogoIpsum</h2>
      <section className="flex column gap25rem align_start">
        {navs.map((nav, _) => (
          <section key={nav.key} className="flex column gap1rem">
            <div className="flex justify_between align_center pointer">
              <h4 className="text_start gap05rem align_center flex">
                <span>{nav.icon}</span>
                {nav.text}
              </h4>
              <IoIosArrowDown />
            </div>
            <div className="flex column gap1rem nav_drop_down">
              {navs.map((nav) => (
                <p>{nav.text}</p>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section className="settings_btn_container sticky">
        <button className="settings_btn" type="submit">
          Settings
        </button>
      </section>
    </div>
  );
};

export default NavBar;
