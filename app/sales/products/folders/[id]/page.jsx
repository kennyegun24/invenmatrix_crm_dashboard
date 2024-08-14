"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridMainHeader from "@/components/grid/GridMainHeader";
import { useSearchParams } from "next/navigation";
import React from "react";
import GridLayout from "@/components/sales/grid/GridLayout";
import useSWR from "swr";
import GridLoader from "@/components/loaders/gridLoader";

const Page = ({ params }) => {
  const display = useSearchParams().get("display");
  const { id } = params;
  const fetcher = async () => {
    const fetchData = await fetch(`/api/folders/sub_folder?id=${id}`);
    const data = await fetchData.json();
    return {
      folders: JSON.parse(data?.folders),
      items: JSON.parse(data.items),
    };
  };
  const key = id;
  const { data, error, isLoading } = useSWR(key, fetcher, {
    refreshInterval: null,
    errorRetryInterval: 5000,
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return (
    <SalesContainer>
      <GridMainHeader
        text={"All Products"}
        first_btn_text={"Add Item"}
        second_btn_text={"Add Folder"}
      />
      <GridDisplayHeader display={display} />
      <div className="sales_grid_layout">
        {isLoading ? (
          <GridLoader />
        ) : (
          <GridLayout data={data} isLoading={isLoading} error={error} />
        )}
      </div>
    </SalesContainer>
  );
};

export default Page;
