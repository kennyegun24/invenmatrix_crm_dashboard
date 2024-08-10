"use client";
import ApexChart from "@/components/charts/HeatMap";
import React from "react";

const HeatChart = ({ title }) => {
  return (
    <div style={{ height: "100%" }} className="flex column gap1rem">
      <p className="chart_header">{title}</p>
      <section className="flex align_center justify_between sales_chart_prices">
        <div className="flex gap05rem align_center">
          <select name="" id="">
            <option value="">Jan 1, 2023 - December 31, 2023</option>
          </select>
          <select name="" id="">
            <option value="">Monthly</option>
          </select>
        </div>
      </section>
      {(typeof window !== undefined || typeof window !== null) && <ApexChart />}
    </div>
  );
};

export default HeatChart;
