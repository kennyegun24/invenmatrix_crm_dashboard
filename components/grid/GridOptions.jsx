import React, { useState } from "react";
import { Button, Popover } from "antd";
import { FaEllipsisV } from "react-icons/fa";
export const GridProductOptions = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const content = () => {
    return (
      <div className="flex column gap05rem options_pop_up">
        <div className="flex column">
          <p className="font14 pointer">Edit product</p>
          <p className="font14 pointer">Move to folder</p>
          <p className="font14 pointer">Copy to folder</p>
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
      trigger="hover"
      open={open}
      onOpenChange={handleOpenChange}
      placement="right"
      arrow={false}
    >
      <Button className="antd_btn2" type="text">
        <FaEllipsisV />
      </Button>
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
          <p className="font14 pointer">Move to folder</p>
          <p className="font14 pointer">Move as root folder</p>
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
