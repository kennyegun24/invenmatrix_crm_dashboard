import React, { useState } from "react";
import { IoArrowDownOutline, IoGridOutline } from "react-icons/io5";
import { Button, Popover } from "antd";
import { FaTable } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const App = ({ display }) => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const router = useRouter();
  const changeView = (param) => {
    router.push(`/sales/products/all?display=${param}`);
  };

  const content = () => {
    return (
      <div className="flex column gap05rem">
        <hr />
        <p
          className={`flex align_center gap05rem pointer ${
            display === "table" ? "green_text" : ""
          }`}
          onClick={() => changeView("table")}
        >
          <FaTable />
          Table
        </p>
        <hr />
        <p
          className={`flex align_center gap05rem pointer ${
            display !== "table" ? "green_text" : ""
          }`}
          onClick={() => changeView("grid")}
        >
          <IoGridOutline />
          Grid
        </p>
      </div>
    );
  };

  return (
    <Popover
      content={content}
      title="Choose display layout"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {display === "grid" ? (
        <FaTable className="pointer" />
      ) : (
        <IoGridOutline className="pointer" />
      )}
    </Popover>
  );
};

const GridHeaderControls = ({ display }) => {
  return (
    <section className="flex gap15rem align_center sales_sub_head_controls">
      <button>
        Updated At <IoArrowDownOutline />
      </button>
      <App display={display} />
    </section>
  );
};

export default GridHeaderControls;
