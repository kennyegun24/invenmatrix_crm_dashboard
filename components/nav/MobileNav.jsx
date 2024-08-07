import React, { useContext, useState } from "react";
import { TbChartHistogram } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import { PiUserSwitchLight } from "react-icons/pi";
import { MdOutlineInventory } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CloseCircleOutlined } from "@ant-design/icons";
import { HomeContext } from "@/contexts/Home";

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState(null);
  const toggleNav = (key) => {
    setActiveNav(activeNav === key ? null : key);
  };

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

  const { toggle, collapsed } = useContext(HomeContext);
  return (
    <div
      className={`navbar_component_mobile column gap15rem fixed ${
        collapsed ? "show" : "hide"
      }`}
    >
      <section className="nav_header_mobile flex justify_between">
        <h2 className="text_start">LogoIpsum</h2>
        <div className="hamburger">
          <CloseCircleOutlined onClick={toggle} />
        </div>
      </section>
      <section className="flex column gap25rem align_start">
        {navs.map((nav) => (
          <section
            key={nav.key}
            className={`flex column gap1rem ${
              activeNav === nav.key ? "active" : "non_active"
            }`}
          >
            <div
              className={` flex justify_between align_center pointer`}
              onClick={() => toggleNav(nav.key)}
            >
              <h4 className="text_start gap05rem align_center flex">
                <span>{nav.icon}</span>
                {nav.text}
              </h4>
              <IoIosArrowDown
                className={
                  nav.key === activeNav
                    ? "dropdown_icon transform"
                    : "dropdown_icon"
                }
              />
            </div>
            <div className={`nav_drop_down flex column gap1rem`}>
              <li>{nav.text} Content 1</li>
              <li>{nav.text} Content 2</li>
              <li>{nav.text} Content 3</li>
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

export default MobileNav;
