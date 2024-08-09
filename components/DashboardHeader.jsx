import React from "react";
import "./dashboard_header.css";

const DashboardHeader = ({ text }) => {
  return (
    <div className="dashboard_header">
      <h2>{text}</h2>
    </div>
  );
};

export default DashboardHeader;
