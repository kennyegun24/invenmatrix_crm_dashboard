"use client";
import { chart_date } from "@/utils/chart_data";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./dashboard_chart.css";

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
        width={500}
        height={400}
        data={chart_date}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22ad01" stopOpacity={0.5} />
            <stop offset="65%" stopColor="#22ad01" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis dataKey="amt" fontSize={12} />
        <Tooltip
          content={(p) => {
            return (
              <div>
                {p.payload?.map((item) => (
                  <div
                    style={{
                      background: "#000",
                      padding: ".5rem 1rem",
                      borderRadius: 12,
                      fontSize: "14px",
                    }}
                    key={item.payload.uv * Math.floor(Math.random())}
                  >
                    <p style={{ color: "#fff" }}>Value: {item.value}</p>
                    <p style={{ color: "#fff" }}>
                      Item name: {item.payload?.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          }}
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#22ad01"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
