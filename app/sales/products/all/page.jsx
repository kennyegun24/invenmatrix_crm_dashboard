"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { Suspense, lazy } from "react";
import "./page.css";
const Table = lazy(() => import("@/components/sales/table/Table"));
const ToggleGrid = lazy(() => import("@/components/ToggleGrid"));
const GridLayout = lazy(() => import("@/components/sales/grid/GridLayout"));
import { useSearchParams } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";

const Page = () => {
  const searchParams = useSearchParams();
  // console.log(searchParams.get("display"));
  const display = searchParams.get("display");
  return (
    <SalesContainer>
      {display !== "grid" ? (
        <Suspense fallback={"Loading..."}>
          <DashboardHeader text={"All Products"} />
          <div className="sales_table_container">
            <div className="sales_table">
              <Table />
            </div>
          </div>
        </Suspense>
      ) : (
        <Suspense fallback={"Loading..."}>
          <GridDisplayHeader text={"All Products"} />
          <div className="sales_grid_layout">
            <GridLayout />
          </div>
        </Suspense>
      )}
    </SalesContainer>
  );
};
export default Page;
