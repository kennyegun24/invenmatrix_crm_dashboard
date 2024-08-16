"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { Suspense, lazy } from "react";
import "./page.css";
const Table = lazy(() => import("@/components/table/Table"));
import { useSearchParams } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridHeaderControls from "@/components/grid/GridHeaderControls";
import GridMainHeader from "@/components/grid/GridMainHeader";
import PageLayout from "./PageLayout";
import { products } from "@/utils/prods_data";
import { generateAllProductsColumns } from "../tableHelper";

const Page = () => {
  const searchParams = useSearchParams();
  const display = searchParams.get("display");
  const columns = generateAllProductsColumns(products);
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
              <Table columns={columns} products={products} />
            </div>
          </div>
        </Suspense>
      ) : (
        <Suspense fallback={"Loading..."}>
          <GridMainHeader
            text={"All Products"}
            first_btn_text={"Add Item"}
            second_btn_text={"Add Folder"}
          />
          <GridDisplayHeader display={display} />
          <div className="sales_grid_layout">
            <PageLayout />
          </div>
        </Suspense>
      )}
    </SalesContainer>
  );
};
export default Page;
