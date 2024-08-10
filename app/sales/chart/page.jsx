"use client";
import DashboardHeader from "@/components/DashboardHeader";
import React from "react";
import "./page.css";
import BigChart from "@/components/sales/charts/BigChart";
import SmChart from "@/components/sales/charts/SmChart";
import Bar from "@/components/sales/charts/Bar";
import SingleBar from "@/components/sales/charts/SingleBar";
import Line from "@/components/sales/charts/Line";
import HeatChart from "@/components/sales/charts/HeatChart";

const page = () => {
  return (
    <div className="flex column container gap1rem">
      <DashboardHeader text={"Sales Chart"} />

      <div className="sales_charts padding1rem flex column gap1rem">
        <section className="sales_bg_chart padding1rem">
          <BigChart />
        </section>

        <section className="sales_sm_grid_charts gap1rem">
          <div className="sales_sm_chart padding075rem">
            <Bar title={"Revenue and Expenses"} />
          </div>
          <div className="sales_sm_chart padding075rem">
            <SingleBar title={"Numbers of items sold"} />
          </div>
          <div className="sales_sm_chart padding075rem">
            <SingleBar title={"Top Selling Products"} />
          </div>
          <div className="sales_sm_chart padding075rem">
            <Line title={"Sales Trend"} />
          </div>
        </section>
        <section className="sales_heat_map_bg_chart padding1rem">
          <HeatChart title={"Sales Activity Accross the Year"} />
        </section>
      </div>
    </div>
  );
};

export default page;
