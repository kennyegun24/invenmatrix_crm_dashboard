import DashboardHeader from "@/components/DashboardHeader";
import React from "react";
import "./page.css";

const page = () => {
  return (
    <div className="flex column container gap1rem">
      <DashboardHeader text={"Sales Chart"} />
    </div>
  );
};

export default page;
