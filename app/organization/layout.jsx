import CreateOrganization from "@/components/create/createOrganization";
import { SalesContainer } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import React from "react";
import "./style.css";

const layout = ({ children }) => {
  return (
    <SalesContainer classname={"overflow-hidden"}>
      <GridMainHeader
        text={"Organization"}
        component={<CreateOrganization />}
      />
      {/* <div className="width60 margin_auto"> */}
      {/* <div className="padding2rem shadow_ organization_page">{children}</div> */}
      <div className="py-4 px-8">{children}</div>
      {/* </div> */}
    </SalesContainer>
  );
};

export default layout;
