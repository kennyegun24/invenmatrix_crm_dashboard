"use client";
import React from "react";
import "jspdf-autotable";
import { SalesContainer } from "@/components/GlobalComponents";
import DashboardHeader from "@/components/DashboardHeader";
import Table from "@/components/table/Table";
import { generateAllProductsColumns } from "@/helpers/tables/productsTablesHelper";
import { products } from "@/utils/prods_data";

const ExportPDF = () => {
  const { columns, initialState } = generateAllProductsColumns(products);
  return (
    <SalesContainer>
      <DashboardHeader
        text={"Top Products"}
        // component={<GridHeaderControls display={"table"} />}
      />
      <div className="sales_table_container">
        <div className="sales_table">
          <Table
            columns={columns}
            products={products}
            initialState={initialState}
          />
        </div>
      </div>
    </SalesContainer>
  );
};

export default ExportPDF;
