"use client";
import { Container } from "@/components/GlobalComponents";
import React from "react";
import "./page.css";
import DashboardHeader from "@/components/DashboardHeader";
import Table from "@/components/sales/table/Table";

const page = () => {
  return (
    <Container>
      <DashboardHeader text={"All Products"} />
      <div className="sales_table_container">
        <div className="sales_table">
          <Table />
        </div>
      </div>
    </Container>
  );
};
export default page;
