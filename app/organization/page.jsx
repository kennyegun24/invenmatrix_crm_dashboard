"use client";
import CreateOrganization from "@/components/create/createOrganization";
import { Container, SalesContainer } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import OrganizationTabs from "@/components/organization/tabs";
import { org_lists } from "@/utils/organization_page_lists";
import React from "react";
import OrganizationList from "./OrganizationList";
import "./style.css";

const page = () => {
  return (
    // <SalesContainer>
    //   <GridMainHeader
    //     text={"Organization"}
    //     // first_btn_text={"Create organization"}
    //     component={<CreateOrganization />}
    //   />
    // {/* <div className="padding1rem"><OrganizationTabs /></div> */}
    // {/* <div className="padding1rem width50 margin_auto">
    //   <div className="border_all padding2rem organization_page"> */}
    <OrganizationList />
    //     {/* </div>
    //   </div>
    // </SalesContainer> */}
  );
};

export default page;
