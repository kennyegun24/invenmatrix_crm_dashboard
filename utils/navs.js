import { BsBarChart } from "react-icons/bs";
// import { FcSettings } from "react-icons/fc";
import { IoMegaphoneOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { PiUserSwitchLight } from "react-icons/pi";
import { TbChartHistogram } from "react-icons/tb";
// import {  } from "react-icons/io5";
export const items = [
  {
    key: "/",
    icon: <TbChartHistogram />,
    label: "Dashboard",
  },
  {
    key: "/sales",
    icon: <BsBarChart />,
    label: "Sales Performance",
    children: [
      {
        key: "/sales/chart",
        label: "Charts",
      },
      {
        key: "/sales/products/all",
        label: "All Products",
      },
      {
        key: "/sales/products/top",
        label: "Top Selling Products",
      },
      {
        key: "/sales/products/new",
        label: "Add New Product",
      },
    ],
  },
  {
    key: "/customer",
    icon: <PiUserSwitchLight />,
    label: "Customer Insights",
    children: [
      {
        key: "/customer/charts",
        label: "Charts",
      },
      {
        key: "/customer/all",
        label: "All Customers",
      },
    ],
  },
  {
    key: "/inventory",
    label: "Inventory",
    icon: <MdOutlineInventory />,
    children: [
      {
        key: "/inventory/charts",
        label: "Charts",
      },
      {
        key: "/inventory/table",
        label: "Table",
      },
    ],
  },
  {
    key: "/marketing",
    label: "Marketing",
    icon: <IoMegaphoneOutline />,
    children: [
      {
        key: "/marketing/charts",
        label: "Charts",
      },
    ],
  },
  {
    key: "/settings",
    icon: <IoSettingsOutline />,
    label: "Settings",
  },
];

export const mobile_navs = [
  {
    key: 1,
    icon: <TbChartHistogram />,
    text: "Dashboard",
  },
  {
    key: 2,
    icon: <BsBarChart />,
    text: "Sales Performance",
    children: [
      {
        key: "5",
        label: "Charts",
      },
      {
        key: "6",
        label: "All Products",
      },
      {
        key: "7",
        label: "Top Selling Products",
      },
      {
        key: "8",
        label: "Add New Product",
      },
    ],
  },
  {
    key: 3,
    icon: <PiUserSwitchLight />,
    text: "Customer Insights",
    children: [
      {
        key: "5",
        label: "Charts",
      },
      {
        key: "6",
        label: "All Customers",
      },
    ],
  },
  {
    key: 4,
    icon: <MdOutlineInventory />,
    text: "Inventory",
    children: [
      {
        key: "5",
        label: "Charts",
      },
      {
        key: "6",
        label: "Table",
      },
    ],
  },
  {
    key: 5,
    icon: <IoMegaphoneOutline />,
    text: "Marketing",
    children: [
      {
        key: "9",
        label: "Charts",
      },
    ],
  },
];
