"use client";
import CreateOrganization from "@/components/create/createOrganization";
import { Container } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import OrganizationTabs from "@/components/organization/tabs";
import React from "react";

const page = () => {
  return (
    <Container>
      <GridMainHeader
        text={"Organization"}
        // first_btn_text={"Create organization"}
        component={<CreateOrganization />}
      />
      <div className="padding1rem">
        <OrganizationTabs />
      </div>
    </Container>
  );
};

export default page;
