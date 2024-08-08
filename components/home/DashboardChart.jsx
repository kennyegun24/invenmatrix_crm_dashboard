"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Chart from "./Chart";
import { FaRegCalendarAlt } from "react-icons/fa";

const DashboardChart = () => {
  const demoUrl = "https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl";

  return (
    <div className="dashboard_chart flex column gap1rem">
      <h3 className="flex align_center gap1rem">
        Total Sales <IoIosArrowDown />
      </h3>
      <section className="flex align_center justify_between">
        <h2>$50.98M</h2>
        <div className="flex gap05rem align_center">
          <select name="" id="">
            <option value="">
              {/* <FaRegCalendarAlt /> */}
              Jan 1, 2023 - December 31, 2023
              {/* <IoIosArrowDown /> */}
            </option>
          </select>
          <select name="" id="">
            <option value="">
              Monthly
              {/* <IoIosArrowDown /> */}
            </option>
          </select>
        </div>
      </section>
      <Chart />
    </div>
  );
};
export default DashboardChart;
