"use client";
import Empty from "@/components/Empty";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridLoader from "@/components/loaders/gridLoader";
import GridLayout from "@/components/sales/grid/GridLayout";
import { getUserSession } from "@/libs/getUserSession";
import React, { useState } from "react";
import useSWR from "swr";

const BACKEND_API_ROUTE = process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;
const PageLayout = ({ display }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    createdAtFilter: null,
    updatedAtFilter: null,
    alphabeticalFilter: null,
    productCountFilter: null,
    folderCountFilter: null,
  });
  const fetcher = async () => {
    const { user } = await getUserSession();
    const fetchData = await fetch(
      `${BACKEND_API_ROUTE}/folder/all?organizationId=${user?.organization?.value}`
    );
    const data = await fetchData.json();
    return {
      folders: data?.folders || [],
      items: data?.products || [],
    };
  };
  const { data, error, isLoading } = useSWR(
    "all_folders_and_products",
    fetcher,
    {
      refreshInterval: null,
      errorRetryInterval: 5000,
      revalidateIfStale: false,
      revalidateOnMount: true,
      revalidateOnFocus: false,
      errorRetryCount: 1,
    }
  );

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
        folder={data?.folders?.filter((e) =>
          searchInput
            ? e?.folderName?.toLowerCase().includes(searchInput?.toLowerCase())
            : []
        )}
        products={data?.items?.filter((e) =>
          searchInput
            ? e?.productName?.toLowerCase().includes(searchInput?.toLowerCase())
            : []
        )}
        searchInput={searchInput}
      />
    </div>
  );
};

export default PageLayout;
