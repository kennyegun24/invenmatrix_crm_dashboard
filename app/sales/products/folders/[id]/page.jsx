"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridMainHeader from "@/components/grid/GridMainHeader";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import GridLayout from "@/components/sales/grid/GridLayout";
import useSWR from "swr";
import GridLoader from "@/components/loaders/gridLoader";
import Empty from "@/components/Empty";
import { getUserSession } from "@/libs/getUserSession";
import { filterProducts } from "@/components/grid/sortOptions";

const RenderData = ({ isLoading, error, data, display }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    createdAt: null,
    updatedAt: null,
    alphabetical: null,
    productCount: null,
    folderCount: null,
  });

  if (isLoading) return <GridLoader />;
  if (data?.folders?.length === 0 && data?.items?.length === 0)
    return <Empty />;
  return (
    <div className="flex column gap1rem">
      <GridDisplayHeader
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        setSearchInput={setSearchInput}
        display={display}
      />
      <GridLayout
        searchInput={searchInput}
        data={data}
        folder={filterProducts(data?.folders, filterOptions)}
        products={filterProducts(data?.items, filterOptions)}
      />
    </div>
  );
};

const Page = ({ params }) => {
  const BACKEND_API_ROUTE = process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;
  const display = useSearchParams().get("display");
  const { id } = params;
  const router = useRouter();
  const fetcher = async () => {
    const { user } = await getUserSession();
    const fetchData = await fetch(
      `${BACKEND_API_ROUTE}/folder/sub_folder?organizationId=${user?.organization?.value}&folderId=${id}`
    );
    const data = await fetchData.json();
    return {
      folders: data?.folders,
      items: data.products,
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
        text={data?.productName}
        first_btn_text={"Add Item"}
        second_btn_text={"Add Folder"}
        first_click={() => router.push(`/sales/products/new?folderId=${id}`)}
        id={id}
      />
      <div className="sales_grid_layout">
        <RenderData
          display={display}
          data={data}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </SalesContainer>
  );
};

export default Page;
