"use client";
import React from "react";
import "jspdf-autotable";
import { SalesContainer } from "@/components/GlobalComponents";
import DashboardHeader from "@/components/DashboardHeader";
import GridHeaderControls from "@/components/grid/GridHeaderControls";
import Table from "@/components/sales/table/Table";
import "../all/page.css";

const ExportPDF = () => {
  return (
    <SalesContainer>
      <DashboardHeader
        text={"Top Products"}
        // component={<GridHeaderControls display={"table"} />}
      />
      <div className="sales_table_container">
        <div className="sales_table">
          <Table />
        </div>
      </div>
    </SalesContainer>
  );
};

export default ExportPDF;
