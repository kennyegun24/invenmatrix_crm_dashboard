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
import { products } from "@/utils/prods_data";
import { generateAllProductsColumns } from "@/helpers/tables/productsTablesHelper";
import useSWR from "swr";
import { fetchTableProducts } from "@/actions/fetchProductsTableData";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const display = searchParams.get("display");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  // const fetcher = async () => {
  //   console.log("fetch table data");
  //   const fetchData = await fetch(
  //     `http://localhost:3000/api/products/all?organizationId=66ddf0cad0d31ab0b903bc7d`
  //     // {
  //     //   method: "GET",
  //     //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGEyYTNlMzI5YjRhNGEwMjJmOTJkZiIsImlhdCI6MTcyNTYwMjg3NiwiZXhwIjoxNzI1ODYyMDc2fQ.MR5hRWvlHTwyNFH4JPTL44vP46N8herK32cM8n6wGNA`,
  //     // }
  //   );
  //   const data = await fetchData.json();
  //   // console.log(data?.products);
  //   const mergedProducts = data?.products.map((product) => ({
  //     ...product,
  //     ...product.customFields,
  //     customFields: undefined,
  //   }));

  //   return {
  //     products: mergedProducts,
  //   };
  // };
  // console.log(display);
  // const { data, error, isLoading } = useSWR(
  //   "all_products_table",

  //   display === "table" && fetcher,
  //   {
  //     refreshInterval: null,
  //     errorRetryInterval: 5000,
  //     revalidateIfStale: false,
  //     revalidateOnMount: true,
  //     revalidateOnFocus: false,
  //     errorRetryCount: 1,
  //   }
  // );

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

  console.log(data);
  console.log(isLoading);
  return (
    <SalesContainer>
      {display == "table" ? (
        // Move the column generation outside of the JSX
        (() => {
          const columns =
            !isLoading && data
              ? generateAllProductsColumns(data?.products)
              : [];
          // console.log(columns);
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
