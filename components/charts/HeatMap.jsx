"use client";
import { ThemeContext } from "@/contexts/DarkMode";
import React, { useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";

const generateData = (days, yrange) => {
  let i = 0;
  let series = [];
  while (i < days) {
    let y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x: `Day ${i + 1}`, y: y });
    i++;
  }
  return series;
};

const ApexChart = () => {
  const { mode } = useContext(ThemeContext);
  const [state] = useState({
    series: [
      { name: "Jan", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Feb", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Mar", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Apr", data: generateData(7, { min: -30, max: 55 }) },
      { name: "May", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Jun", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Jul", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Aug", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Sep", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Oct", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Nov", data: generateData(7, { min: -30, max: 55 }) },
      { name: "Dec", data: generateData(7, { min: -30, max: 55 }) },
    ],
    options: {
      chart: {
        height: 500,
        type: "heatmap",
      },
      xaxis: {
        type: "category",
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
          style: {
            colors: mode === "dark" ? "#fff" : "#102A43",
          },
        },
      },
      yaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              { from: -30, to: 5, name: "low", color: "#00A100" },
              { from: 6, to: 20, name: "medium", color: "#128FD9" },
              { from: 21, to: 45, name: "high", color: "#FFB200" },
              { from: 46, to: 55, name: "extreme", color: "#FF0000" },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      title: {
        text: "Sales Activity Across Different Times of the Year",
        style: {
          color: mode === "dark" ? "#fff" : "#102A43",
        },
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    },
  });

  return (
    <div className="heat_map_component">
      <div id="chart">
        <ReactApexChart
          options={{
            ...state.options,
            legend: {
              labels: {
                colors: mode === "dark" ? "#fff" : "#102A43",
              },
            },
            yaxis: {
              ...state.options.yaxis,
              labels: {
                style: {
                  colors: mode === "dark" ? "#fff" : "#102A43",
                },
              },
            },
            xaxis: {
              ...state.options.xaxis,
              labels: {
                style: {
                  colors: mode === "dark" ? "#fff" : "#102A43",
                },
              },
            },
            tooltip: {
              cssClass: "heat_map_toolkit",
            },
          }}
          series={state.series}
          type="heatmap"
          height={500}
        />
      </div>
    </div>
  );
};

export default ApexChart;
