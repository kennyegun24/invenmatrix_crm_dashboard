import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Button } from "antd";
import "./grid_main_header.css";
import AddFolder from "../create/addFolder";

const GridMainHeader = ({
  text,
  first_btn_text,
  second_btn_text,
  first_click = () => alert("No functionality yet!"),
  second_click = () => alert("No functionality yet!"),
  component,
  id,
}) => {
  return (
    <section className="grid_header sticky flex align_center justify_between">
      <h2 className="flex align_center gap05rem">
        <FaRegCalendarMinus /> {text}
      </h2>

      <section className="flex gap05rem">
        {first_btn_text && (
          <Button
            size="small"
            onClick={first_click}
            className="antd_btn"
            type="default"
          >
            {first_btn_text}
          </Button>
        )}
        {second_btn_text?.toLowerCase() === "add folder" ? (
          <AddFolder params={id}>
            <Button size="small" className="antd_btn" type="default">
              {second_btn_text}
            </Button>
          </AddFolder>
        ) : (
          second_btn_text && (
            <Button
              size="small"
              onClick={second_click}
              className="antd_btn"
              type="default"
            >
              {second_btn_text}
            </Button>
          )
        )}
        {component}
      </section>
    </section>
  );
};

export default GridMainHeader;
