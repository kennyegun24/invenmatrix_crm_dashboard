import React from "react";
import "./gridfolder.css";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import { LuFolderInput } from "react-icons/lu";
import { FaEllipsisV } from "react-icons/fa";

const GridItem = ({ image }) => {
  return (
    <div className="flex column grid_folder_component pointer">
      <section className="grid_folder_image_div">
        <Image src={image} />

        <div className="absolute display_on_hover flex justify_between">
          <input type="checkbox" name="" id="" />
          <div className="flex column justify_between align_end">
            <section className="flex column gap05rem align_end">
              <div className="hover_icon">
                <MdOutlineEdit />
              </div>
              <p className="hover_icon">Add to folder</p>
            </section>
            <FaEllipsisV />
          </div>
        </div>
      </section>
      <div className="flex column gap3rem wrap grid_item_content">
        <h4>Glasses</h4>
        <div className="flex gap05rem align_center">
          <p>1 unit</p>
          {"/"}
          <p>$24.00</p>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
