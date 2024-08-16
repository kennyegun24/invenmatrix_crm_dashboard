"use client";
import React from "react";
import "jspdf-autotable";
import { SalesContainer } from "@/components/GlobalComponents";
import DashboardHeader from "@/components/DashboardHeader";
import Table from "@/components/table/Table";
import "../all/page.css";
import { generateAllProductsColumns } from "../tableHelper";
import { products } from "@/utils/prods_data";

const ExportPDF = () => {
  const columns = generateAllProductsColumns(products);
  return (
    <SalesContainer>
      <DashboardHeader
        text={"Top Products"}
        // component={<GridHeaderControls display={"table"} />}
      />
      <div className="sales_table_container">
        <div className="sales_table">
          <Table columns={columns} products={products} />
        </div>
      </div>
    </SalesContainer>
  );
};

export default ExportPDF;
