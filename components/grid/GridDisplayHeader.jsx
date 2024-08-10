import React from "react";
import "./style.css";
import { Button } from "antd";
import { FaSearch, FaRegCalendarMinus } from "react-icons/fa";
import { IoGridOutline, IoArrowDownOutline } from "react-icons/io5";
const GridDisplayHeader = ({ text }) => {
  return (
    <div className="grid_display_header_component flex gap1rem column">
      <section className="grid_header flex align_center justify_between">
        <h2 className="flex align_center gap05rem">
          <FaRegCalendarMinus /> {text}
        </h2>

        <section className="flex gap05rem">
          <Button size="small" className="antd_btn" type="default">
            Add Item
          </Button>
          <Button size="small" className="antd_btn" type="default">
            Add Folder
          </Button>
        </section>
      </section>
      <section className="sales_sub_header_container flex align_center justify_between">
        <section className="sales_search flex align_center">
          <input type="search" name="" id="" />
          <div className="sales_search_icon pointer flex align_center justify_center">
            <FaSearch />
          </div>
        </section>

        <section className="flex gap15rem align_center sales_sub_head_controls">
          <button>
            Updated At <IoArrowDownOutline />
          </button>
          <IoGridOutline className="pointer" fontSize={14} />
        </section>
      </section>
    </div>
  );
};

export default GridDisplayHeader;
