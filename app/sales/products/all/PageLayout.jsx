"use client";
import GridLoader from "@/components/loaders/gridLoader";
import GridLayout from "@/components/sales/grid/GridLayout";
import React from "react";
import useSWR from "swr";

const PageLayout = () => {
  const fetcher = async () => {
    const fetchData = await fetch("/api/folders/all");
    const data = await fetchData.json();
    return {
      folders: JSON.parse(data?.folders),
      items: JSON.parse(data.items),
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
  return <GridLayout data={data} isLoading={isLoading} error={error} />;
};

export default PageLayout;
