import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CloseCircleOutlined } from "@ant-design/icons";
import { HomeContext } from "@/contexts/Home";
import Link from "next/link";
import { mobile_navs } from "@/utils/navs";

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState(null);
  const toggleNav = (key) => {
    setActiveNav(activeNav === key ? null : key);
  };

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
        {mobile_navs.map((nav) => (
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
              {nav?.children && (
                <IoIosArrowDown
                  className={
                    nav.key === activeNav
                      ? "dropdown_icon transform"
                      : "dropdown_icon"
                  }
                />
              )}
            </div>
            {nav.children && (
              <div className={`nav_drop_down flex column gap1rem`}>
                {nav.children.map((chil, _) => (
                  <>
                    <li>{chil.label}</li>
                  </>
                ))}
              </div>
            )}
          </section>
        ))}
      </section>
      <section className="settings_btn_container sticky flex">
        <Link
          href={"/settings"}
          className="settings_btn text_center"
          type="submit"
        >
          Settings
        </Link>
      </section>
    </div>
  );
};

export default MobileNav;
