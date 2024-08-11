import React from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import GridHeaderControls from "./GridHeaderControls";
import { MdOutlineMenuOpen } from "react-icons/md";
import GridMenu from "./GridMenu";

const GridDisplayHeader = ({ text, display }) => {
  return (
    <div className="grid_display_header_component flex gap1rem column">
      <section className="sales_sub_header_container flex justify_between">
        <div className="flex align_center gap1rem">
          <section className="sales_search flex align_center">
            <input type="search" name="" id="" />
            <div className="sales_search_icon pointer flex align_center justify_center">
              <FaSearch />
            </div>
          </section>
          <GridMenu>
            <p className="flex gap05rem align_center grid_menu_option pointer">
              Menu <MdOutlineMenuOpen />
            </p>
          </GridMenu>
        </div>

        <GridHeaderControls display={display} />
      </section>
      <section className="sales_sub_header_container flex align_center gap1rem">
        <p>5 Folders</p>
        <p>12 Items</p>
        <p>Total Quantities 24 Units</p>
        <p>Total Value: $13000</p>
      </section>
    </div>
  );
};

export default GridDisplayHeader;
