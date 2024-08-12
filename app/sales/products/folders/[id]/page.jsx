"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import GridDisplayHeader from "@/components/grid/GridDisplayHeader";
import GridMainHeader from "@/components/grid/GridMainHeader";
import { useSearchParams } from "next/navigation";
import React from "react";
import GridLayout from "@/components/sales/grid/GridLayout";

const Page = () => {
  const display = useSearchParams().get("display");
  const noOfFolders = Array.from({ length: 3 });
  return (
    <SalesContainer>
      <GridMainHeader text={"All Products"} />
      <GridDisplayHeader display={display} />
      <div className="sales_grid_layout">
        <GridLayout folder_number={0} items_number={4} />
      </div>
    </SalesContainer>
  );
};

export default Page;
