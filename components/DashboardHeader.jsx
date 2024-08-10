import React from "react";
import "./dashboard_header.css";

const DashboardHeader = ({ text, component }) => {
  return (
    <div className="dashboard_header flex align_center justify_between">
      <h2>{text}</h2>
      {component && component}
    </div>
  );
};

export default DashboardHeader;
