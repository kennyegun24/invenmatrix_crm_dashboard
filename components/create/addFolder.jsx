import { Popover } from "antd";
import React, { useContext, useState } from "react";
import "./style.css";
import { toastError, toastSuccess } from "@/libs/toast";
import { createFolderAction, createSubFolderAction } from "@/actions/addFolder";
import { RequestSpinnerContext } from "@/contexts/RequestSpinner";

const AddFolder = ({ children, params }) => {
  const [open, setOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const { setRequested } = useContext(RequestSpinnerContext);
  const handleOpenChange = async (newOpen) => {
    setOpen(newOpen);
  };
  const createFolder = async () => {
    try {
      setRequested(true);
      await createFolderAction(folderName);
      setRequested(false);
      return toastSuccess("Folder Created");
    } catch (error) {
      setRequested(false);
      return toastError(error.message || "Something went wrong");
    }
  };
  const createSubFolder = async () => {
    try {
      setRequested(true);
      await createSubFolderAction(folderName, params);
      setRequested(false);
      return toastSuccess("Folder Created");
    } catch (error) {
      setRequested(false);
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
      className="popover"
    >
      {children}
    </Popover>
  );
};

export default AddFolder;
