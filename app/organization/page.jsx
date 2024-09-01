import { Container } from "@/components/GlobalComponents";
import OrganizationTabs from "@/components/organization/tabs";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="padding1rem">
        <OrganizationTabs />
      </div>
    </Container>
  );
};

export default page;
