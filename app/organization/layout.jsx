import CreateOrganization from "@/components/create/createOrganization";
import { SalesContainer } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import React from "react";
import "./style.css";

const layout = ({ children }) => {
  return (
    <SalesContainer>
      <GridMainHeader
        text={"Organization"}
        component={<CreateOrganization />}
      />
      <div className="padding1rem width50 margin_auto">
        <div className="padding2rem shadow_ organization_page">{children}</div>
      </div>
    </SalesContainer>
  );
};

export default layout;
