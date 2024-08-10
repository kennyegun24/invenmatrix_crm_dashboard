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
import GridHeaderControls from "@/components/grid/GridHeaderControls";

const Page = () => {
  const searchParams = useSearchParams();
  const display = searchParams.get("display");
  return (
    <SalesContainer>
      {display !== "grid" ? (
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
          <GridDisplayHeader text={"All Products"} display={display} />
          <div className="sales_grid_layout">
            <GridLayout />
          </div>
        </Suspense>
      )}
    </SalesContainer>
  );
};
export default Page;
