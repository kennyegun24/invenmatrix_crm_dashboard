import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Button } from "antd";

const GridMainHeader = ({ text }) => {
  return (
    <section className="grid_header sticky flex align_center justify_between">
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
  );
};

export default GridMainHeader;
