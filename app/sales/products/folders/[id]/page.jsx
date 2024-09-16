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

const RenderData = ({ isLoading, error, data, display }) => {
  const [searchInput, setSearchInput] = useState("");
  if (isLoading) return <GridLoader />;
  if (data?.folders?.length === 0 && data?.items?.length === 0)
    return <Empty />;
  return (
    <div className="flex column gap1rem">
      <GridDisplayHeader setSearchInput={setSearchInput} display={display} />
      <GridLayout
        searchInput={searchInput}
        data={data}
        folder={data?.folders}
        products={data?.items}
      />
    </div>
  );
};

const Page = ({ params }) => {
  const BACKEND_API_ROUTE = process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;
  const display = useSearchParams().get("display");
  const createdAt = useSearchParams().get("createdAt");
  const updatedAt = useSearchParams().get("updatedAt");
  const name = useSearchParams().get("name");
  const productCount = useSearchParams().get("productCount");
  const folderCount = useSearchParams().get("folderCount");
  const { id } = params;
  const router = useRouter();
  const fetcher = async () => {
    const { user } = await getUserSession();
    const params = new URLSearchParams();

    if (user?.organization?.value) {
      params.append("organizationId", user.organization.value);
    }
    if (id) {
      params.append("folderId", id);
    }
    if (name) {
      params.append("name", name);
    }
    if (createdAt) {
      params.append("createdAt", createdAt);
    }
    if (updatedAt) {
      params.append("updatedAt", updatedAt);
    }
    if (productCount) {
      params.append("productCount", productCount);
    }

    const fetchData = await fetch(
      `${BACKEND_API_ROUTE}/folder/sub_folder?${params.toString()}`
    );

    // const fetchData = await fetch(
    //   `${BACKEND_API_ROUTE}/folder/sub_folder?organizationId=${
    //     user?.organization?.value
    //   }&${
    //     "folderId=" +
    //     id +
    //     "&name=" +
    //     name +
    //     "&createdAt=" +
    //     createdAt +
    //     "&updatedAt=" +
    //     updatedAt +
    //     "&folderCount=" +
    //     folderCount +
    //     "&productCount=" +
    //     productCount
    //   }`
    // );
    const data = await fetchData.json();
    return {
      folders: data?.folders,
      items: data.products,
    };
  };
  // const key = id;
  const key = [id, name, createdAt, updatedAt, folderCount, productCount].join(
    "|"
  );
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
