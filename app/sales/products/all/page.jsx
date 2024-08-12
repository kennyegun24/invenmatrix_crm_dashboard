"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { Suspense, lazy } from "react";
import "./page.css";
const Table = lazy(() => import("@/components/sales/table/Table"));
const GridLayout = lazy(() => import("@/components/sales/grid/GridLayout"));
import { useSearchParams } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridHeaderControls from "@/components/grid/GridHeaderControls";
import GridMainHeader from "@/components/grid/GridMainHeader";

const Page = () => {
  const searchParams = useSearchParams();
  const display = searchParams.get("display");
  return (
    <SalesContainer>
      {display == "table" ? (
        <Suspense fallback={"Loading..."}>
          <DashboardHeader
            text={"All Products"}
            component={<GridHeaderControls display={display} />}
          />
          <div className="sales_table_container">
            <div className="sales_table">
              <Table />
            </div>
          </div>
        </Suspense>
      ) : (
        <Suspense fallback={"Loading..."}>
          <GridMainHeader text={"All Products"} />
          <GridDisplayHeader display={display} />
          <div className="sales_grid_layout">
            <GridLayout folder_number={5} items_number={3} />
          </div>
        </Suspense>
      )}
    </SalesContainer>
  );
};
export default Page;
