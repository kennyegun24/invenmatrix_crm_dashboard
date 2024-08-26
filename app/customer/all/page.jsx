"use client";
import DashboardHeader from "@/components/DashboardHeader";
import { SalesContainer } from "@/components/GlobalComponents";
import Table from "@/components/table/Table";
import { users } from "@/utils/users_data";
import React from "react";
import { generateCustomersColumns } from "../tableHelper";

const page = () => {
  const { columns, initialState } = generateCustomersColumns(users);
  return (
    <SalesContainer>
      <DashboardHeader
        text={"All Users"}
        // component={<GridHeaderControls display={"table"} />}
      />
      <div className="sales_table_container">
        <div className="sales_table">
          <Table
            columns={columns}
            products={users}
            initialState={initialState}
          />
        </div>
      </div>
    </SalesContainer>
  );
};

export default page;
