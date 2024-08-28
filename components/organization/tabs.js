"use client";
import React, { useState } from "react";
import { Segmented, Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const Child = () => {
  console.log("first");
  return (
    <>
      <p>All keys</p>
    </>
  );
};
const items = [
  {
    key: "1",
    label: "Organization",
    children: "Organization content",
  },
  {
    key: "2",
    label: "Teams",
    children: "All teams",
  },
  {
    key: "3",
    label: "API Keys",
    children: <Child />,
  },
];
const OrganizationTabs = () => {
  const [alignValue, setAlignValue] = useState("center");
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      indicator={{
        size: (origin) => origin - 20,
        align: alignValue,
      }}
    />
  );
};
export default OrganizationTabs;
