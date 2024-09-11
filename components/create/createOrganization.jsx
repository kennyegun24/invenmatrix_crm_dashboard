import { Popover } from "antd";
import React, { useState } from "react";
import "./style.css";
import { toastError, toastSuccess } from "@/libs/toast";
import { createFolderAction, createSubFolderAction } from "@/actions/addFolder";
import { Button } from "antd";
import { createOrganizationAction } from "@/actions/fetchAllOrganizations";

const CreateOrganization = ({ children, params }) => {
  const [open, setOpen] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const handleOpenChange = async (newOpen) => {
    setOpen(newOpen);
  };
  const createOrg = async () => {
    try {
      const req = await createOrganizationAction(organizationName);
      if (await req?.error) {
        return toastError(req.error || "Something went wrong");
      }
      return toastSuccess("Organization Created");
    } catch (error) {
      return toastError(error.message || "Something went wrong");
    }
  };

  const content = () => {
    return (
      <section className="flex column gap1rem grid_menu_component">
        <input
          onChange={(e) => setOrganizationName(e.target.value)}
          type="text"
          placeholder="Organization Name..."
        />
        <button onClick={createOrg}>Create</button>
      </section>
    );
  };

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement={"bottomLeft"}
    >
      <Button size="small" className="antd_btn" type="default">
        Create Organization
      </Button>
    </Popover>
  );
};

export default CreateOrganization;
