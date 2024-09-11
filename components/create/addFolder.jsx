import { Popover } from "antd";
import React, { useState } from "react";
import "./style.css";
import { toastError, toastSuccess } from "@/libs/toast";
import { createFolderAction, createSubFolderAction } from "@/actions/addFolder";

const AddFolder = ({ children, params }) => {
  const [open, setOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const handleOpenChange = async (newOpen) => {
    setOpen(newOpen);
  };
  const createFolder = async () => {
    try {
      await createFolderAction(folderName);
      return toastSuccess("Folder Created");
    } catch (error) {
      return toastError(error.message || "Something went wrong");
    }
  };
  const createSubFolder = async () => {
    try {
      await createSubFolderAction(folderName, params);
      return toastSuccess("Folder Created");
    } catch (error) {
      return toastError(error.message || "Something went wrong");
    }
  };

  const content = () => {
    return (
      <section className="flex column gap1rem grid_menu_component">
        <input
          onChange={(e) => setFolderName(e.target.value)}
          type="text"
          placeholder="Folder Name..."
        />
        <button onClick={!params ? createFolder : createSubFolder}>
          Create folder
        </button>
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
      {children}
    </Popover>
  );
};

export default AddFolder;
