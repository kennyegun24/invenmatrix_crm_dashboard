import React, { useEffect, useState } from "react";
import { Popover } from "antd";
import { ChadcnDropdownMenu } from "../shadcn/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { storeFolders } from "@/redux/Breadcrumbs";
export const GridProductOptions = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const { folders, loading } = useSelector((state) => state.folderStructure);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeFolders(folders));
  }, []);
  const content = () => {
    return (
      <div className="flex column gap05rem options_pop_up">
        <div className="flex column">
          <p className="font14 pointer">Edit product</p>
          <ChadcnDropdownMenu
            text={`Move to folder`}
            isLoading={loading}
            folders={folders}
          />
          <ChadcnDropdownMenu
            text={"Copy to folder"}
            isLoading={loading}
            folders={folders}
          />
        </div>
        <hr className="horizontal_line" />
        <div>
          <p className="font14 pointer">Create a bundle with this product</p>
          <p className="font14 pointer">Create a kit</p>
        </div>
        <hr className="horizontal_line" />
        <div>
          <p className="font14 pointer">Delete</p>
        </div>
      </div>
    );
  };
  return (
    <Popover
      content={content}
      title="Product Actions"
      trigger="contextMenu"
      open={open}
      onOpenChange={handleOpenChange}
      placement="right"
      arrow={false}
    >
      {children}
    </Popover>
  );
};

export const GridFolderOptions = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const { folders, loading } = useSelector((state) => state.folderStructure);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeFolders(folders));
  }, []);
  const content = () => {
    return (
      <div className="flex column gap05rem options_pop_up">
        <div className="flex column">
          <p className="font14 pointer">Edit folder</p>
          <ChadcnDropdownMenu
            text={`Move to folder`}
            isLoading={loading}
            folders={folders}
          />
          <ChadcnDropdownMenu
            text={"Copy to folder"}
            isLoading={loading}
            folders={folders}
          />
        </div>
        <hr className="horizontal_line" />
        <div>
          <p className="font14 pointer">Delete</p>
        </div>
      </div>
    );
  };
  return (
    <Popover
      content={content}
      title="Folder Actions"
      trigger="contextMenu"
      arrow={false}
      placement="right"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {children}
    </Popover>
  );
};
