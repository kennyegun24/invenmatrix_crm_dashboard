import React from "react";
import { Tabs } from "antd";
import IntegrationCards from "./Card";
import {
  ecommerce_completed_integration_list,
  ecommerce_integration_list,
} from "../integrations";
// const onChange = (key) => {
//   console.log(key);
// };
const items = [
  {
    key: "1",
    label: "All Integrations",
    children: <IntegrationCards mapped_data={ecommerce_integration_list} />,
  },
  {
    key: "2",
    label: "Connected",
    children: (
      <IntegrationCards mapped_data={ecommerce_completed_integration_list} />
    ),
  },
];
const IntegrationsTabs = () => (
  <div className="h-[87vh]">
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);
export default IntegrationsTabs;
