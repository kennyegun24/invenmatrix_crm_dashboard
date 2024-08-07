"use client";
// import React from "react";
// import "./style.css";
// import { TbChartHistogram } from "react-icons/tb";
// import { BsBarChart } from "react-icons/bs";
// import { PiUserSwitchLight } from "react-icons/pi";
// import { MdOutlineInventory } from "react-icons/md";
// import { IoMegaphoneOutline } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";

// const navs = [
//   {
//     key: 1,
//     icon: <TbChartHistogram />,
//     text: "Dashboard",
//   },
//   {
//     key: 2,
//     icon: <BsBarChart />,
//     text: "Sales Performance",
//   },
//   {
//     key: 3,
//     icon: <PiUserSwitchLight />,
//     text: "Customer Insights",
//   },
//   {
//     key: 4,
//     icon: <MdOutlineInventory />,
//     text: "Inventory",
//   },
//   {
//     key: 5,
//     icon: <IoMegaphoneOutline />,
//     text: "Marketing",
//   },
// ];

// const NavBar = () => {
//   return (
//     <div className="navbar_component flex column gap1rem sticky">
//       <h2 className="text_center">LogoIpsum</h2>
//       <section className="flex column gap25rem align_start">
//         {navs.map((nav, _) => (
//           <section key={nav.key} className="flex column gap1rem">
//             <div className="flex justify_between align_center pointer">
//               <h4 className="text_start gap05rem align_center flex">
//                 <span>{nav.icon}</span>
//                 {nav.text}
//               </h4>
//               <IoIosArrowDown />
//             </div>
//             <div className="flex column gap1rem nav_drop_down">
//               {navs.map((nav) => (
//                 <p>{nav.text}</p>
//               ))}
//             </div>
//           </section>
//         ))}
//       </section>
//       <section className="settings_btn_container sticky">
//         <button className="settings_btn" type="submit">
//           Settings
//         </button>
//       </section>
//     </div>
//   );
// };

// export default NavBar;

import React, { useContext, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./style.css";
import { ThemeContext } from "@/contexts/DarkMode";
import Toggle from "./Toggle";
import MobileNav from "./MobileNav";
const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Option 1",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Option 2",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub3",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "sub4",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
  {
    key: "sub99",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "2398",
        label: "Option 13",
      },
      {
        key: "283",
        label: "Option 14",
      },
      {
        key: "sub87",
        label: "Submenu",
        children: [
          {
            key: "2132",
            label: "Option 15",
          },
          {
            key: "327884",
            label: "Option 16",
          },
        ],
      },
    ],
  },
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { Sider } = Layout;
  const { mode } = useContext(ThemeContext);

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
          className="menu-list flex column gap1rem"
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          items={items}
        />
        <Toggle click={toggleCollapsed} collapsed={collapsed} />
      </Sider>
      <MobileNav />
    </>
  );
};
export default NavBar;
