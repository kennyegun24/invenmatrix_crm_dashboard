"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridMainHeader from "@/components/grid/GridMainHeader";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import GridLayout from "@/components/sales/grid/GridLayout";
import useSWR from "swr";
import GridLoader from "@/components/loaders/gridLoader";
import Empty from "@/components/Empty";
import { getUserSession } from "@/libs/getUserSession";

const RenderData = ({ isLoading, error, data, display }) => {
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

const Page = ({ params }) => {
  const display = useSearchParams().get("display");
  const { id } = params;
  const router = useRouter();
  const fetcher = async () => {
    const { user } = await getUserSession();
    const fetchData = await fetch(
      `http://localhost:3000/api/folder/sub_folder?organizationId=${user?.organization?.value}&folderId=${id}`
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
