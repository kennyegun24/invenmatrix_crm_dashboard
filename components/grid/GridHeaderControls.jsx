import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { Button, Popover, Radio, Space } from "antd";
import { FaFilter, FaTable } from "react-icons/fa6";
import { useRouter } from "next/navigation";
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

const Filter = ({ setFilterOptions, filterOptions }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => setOpen(newOpen);

  const onResetOptions = () => {
    setFilterOptions({
      createdAt: null,
      updatedAt: null,
      alphabetical: null,
      productCount: null,
      folderCount: null,
    });
  };

  const handleFilterChange = (e) => {
    setFilterOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const content = (
    <div className="flex column gap05rem grid_filter_options_component">
      <Button onClick={onResetOptions}>Reset filter</Button>
      {filters.map((option, index) => (
        <div className="grid_filter_options_sub_component flex column gap05rem">
          {index !== 0 && <hr />}
          <div key={index}>
            <p className="font14">{option.label}</p>
            <div>
              <Radio.Group
                name={option.name}
                onChange={handleFilterChange}
                value={filterOptions[option.name]}
              >
                <Space direction="vertical">
                  {option.options.map((e, _) => (
                    <Radio
                      key={_}
                      value={e.value}
                      style={{
                        color:
                          filterOptions[option.name] === e.value
                            ? "#1b8ee0"
                            : "initial",
                      }}
                    >
                      {e.label}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
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

const GridHeaderControls = ({ display, filterOptions, setFilterOptions }) => {
  return (
    <section className="flex gap15rem align_center sales_sub_head_controls">
      {display?.toLowerCase() !== "table" && (
        <Filter
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      )}
      <App display={display} />
    </section>
  );
};

export default GridHeaderControls;
