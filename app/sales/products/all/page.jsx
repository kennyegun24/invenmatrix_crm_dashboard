"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { Suspense, lazy, useEffect, useState } from "react";
const Table = lazy(() => import("@/components/table/Table"));
import { useRouter, useSearchParams } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridHeaderControls from "@/components/grid/GridHeaderControls";
import GridMainHeader from "@/components/grid/GridMainHeader";
import PageLayout from "./PageLayout";
import { generateAllProductsColumns } from "@/helpers/tables/productsTablesHelper";
import { fetchTableProducts } from "@/actions/fetchProductsTableData";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const display = searchParams.get("display");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const getData = await fetchTableProducts();
      setData(getData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    display === "table" && fetchData();
  }, [display]);

  return (
    <SalesContainer>
      {display == "table" ? (
        // Move the column generation outside of the JSX
        (() => {
          const columns =
            !isLoading && data
              ? generateAllProductsColumns(data?.products)
              : [];
          return (
            <Suspense fallback={"Loading..."}>
              <DashboardHeader
                text={"All Products"}
                component={<GridHeaderControls display={display} />}
              />
              <div className="sales_table_container">
                <div className="sales_table">
                  <Table
                    columns={columns.columns}
                    products={data?.products}
                    initialState={{
                      ...columns.initialState,
                    }}
                    loading={isLoading}
                  />
                </div>
              </div>
            </Suspense>
          );
        })()
      ) : (
        <Suspense fallback={"Loading..."}>
          <GridMainHeader
            text={"All Products"}
            first_btn_text={"Add Item"}
            second_btn_text={"Add Folder"}
            first_click={() => router.push("/sales/products/new")}
          />
          <div className="sales_grid_layout">
            <PageLayout display={display} />
          </div>
        </Suspense>
      )}
    </SalesContainer>
  );
};
export default Page;
