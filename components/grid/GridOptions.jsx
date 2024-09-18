import React, { useState } from "react";
import { Button, Popover } from "antd";
import { FaEllipsisV } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { ChadcnDropdownMenu } from "../shadcn/DropDown";
import { useSelector } from "react-redux";
export const GridProductOptions = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const { folders, loading } = useSelector((state) => state.folderStructure);

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

export const GridFolderOptions = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const content = () => {
    return (
      <div className="flex column gap05rem options_pop_up">
        <div className="flex column">
          <p className="font14 pointer">Edit folder</p>
          <p className="font14 pointer flex align_center justify_between">
            Move to folder <FaAngleRight />
          </p>
          <p className="font14 pointer flex align_center justify_between">
            Move as root folder <FaAngleRight />
          </p>
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
      trigger="hover"
      arrow={false}
      placement="right"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button className="antd_btn2" type="text">
        <FaEllipsisV />
      </Button>
    </Popover>
  );
};
