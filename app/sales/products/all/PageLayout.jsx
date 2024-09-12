"use client";
import Empty from "@/components/Empty";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridLoader from "@/components/loaders/gridLoader";
import GridLayout from "@/components/sales/grid/GridLayout";
import { getUserSession } from "@/libs/getUserSession";
import React from "react";
import useSWR from "swr";

const PageLayout = ({ display }) => {
  const fetcher = async () => {
    const user = await getUserSession();
    const fetchData = await fetch(
      `http://localhost:3000/api/folder/all?organizationId=${user?.organization?.value}`
      // {
      //   method: "GET",
      //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGEyYTNlMzI5YjRhNGEwMjJmOTJkZiIsImlhdCI6MTcyNTYwMjg3NiwiZXhwIjoxNzI1ODYyMDc2fQ.MR5hRWvlHTwyNFH4JPTL44vP46N8herK32cM8n6wGNA`,
      // }
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
      <GridDisplayHeader display={display} />
      <GridLayout data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default PageLayout;
