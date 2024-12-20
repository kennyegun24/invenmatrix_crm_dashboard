import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { Button, Popover, Radio, Space, Checkbox } from "antd";
import { FaFilter, FaTable } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import { filters } from "./sortOptions";

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

const Filter = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => setOpen(newOpen);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterChange = (e, _) => {
    const { name, value, checked } = e.target;
    const params = new URLSearchParams(searchParams.toString());
    if (checked) {
      if (value) {
        params.set(name, value);
      }
    } else {
      params.delete(name);
    }
    router.push(`?${params.toString()}`);
  };

  const onResetOptions = () => {
    router.push(window.location.pathname);
  };

  const content = (
    <div className="flex column gap05rem grid_filter_options_component">
      <Button onClick={onResetOptions}>Reset filter</Button>
      {filters.map((option, index) => (
        <div
          key={option.label}
          className="grid_filter_options_sub_component flex column gap05rem"
        >
          {index !== 0 && <hr />}
          <div key={option.id}>
            <p className="font14">{option.label}</p>
            <div>
              <Checkbox.Group
                name={option.name}
                value={searchParams.get(option.name)}
              >
                <Space direction="vertical">
                  {option.options.map((e, _) => {
                    const isChecked = searchParams.get(option.name) === e.value;
                    return (
                      <Checkbox
                        onChange={handleFilterChange}
                        name={option.name}
                        key={_}
                        value={e.value}
                        style={{
                          color: isChecked ? "#1b8ee0" : "initial",
                        }}
                      >
                        {e.label}
                      </Checkbox>
                    );
                  })}
                </Space>
              </Checkbox.Group>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Popover
      content={content}
      title="Filter options"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <p className="flex align_center gap03rem pointer">
        <FaFilter />
        Filter
      </p>
    </Popover>
  );
};

const GridHeaderControls = ({ display }) => {
  return (
    <section className="flex gap15rem align_center sales_sub_head_controls">
      {display?.toLowerCase() !== "table" && <Filter />}
      <App display={display} />
    </section>
  );
};

export default GridHeaderControls;
