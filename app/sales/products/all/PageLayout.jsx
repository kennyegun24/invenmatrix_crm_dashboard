"use client";
import Empty from "@/components/Empty";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridLoader from "@/components/loaders/gridLoader";
import GridLayout from "@/components/sales/grid/GridLayout";
import { getUserSession } from "@/libs/getUserSession";
import { fetchFolderStructure } from "@/redux/folderStructure";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

const BACKEND_API_ROUTE = process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;
const PageLayout = ({ display }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const createdAt = useSearchParams().get("createdAt");
  const updatedAt = useSearchParams().get("updatedAt");
  const name = useSearchParams().get("name");
  const productCount = useSearchParams().get("productCount");
  const folderCount = useSearchParams().get("folderCount");
  const fetcher = async () => {
    const { user } = await getUserSession();
    const params = new URLSearchParams();

    if (user?.organization?.value) {
      params.append("organizationId", user.organization.value);
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
    if (folderCount) {
      params.append("folderCount", folderCount);
    }
    if (productCount) {
      params.append("productCount", productCount);
    }
    const fetchData = await fetch(
      `${BACKEND_API_ROUTE}/folder/all?${params.toString()}`
    );
    const data = await fetchData.json();
    return {
      folders: data?.folders || [],
      items: data?.products || [],
    };
  };
  const key = [name, createdAt, updatedAt, folderCount, productCount].join("|");
  const { data, error, isLoading } = useSWR(
    `all_folders_and_products, ${key}`,
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
  useEffect(() => {
    dispatch(fetchFolderStructure());
  }, []);
  if (isLoading) return <GridLoader />;
  if (data?.folders?.length === 0 && data?.items?.length === 0)
    return <Empty />;
  return (
    <div className="flex column gap1rem">
      <GridDisplayHeader
        breadcrumbs={false}
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
