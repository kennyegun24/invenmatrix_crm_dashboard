import React from "react";
import "./gridfolder.css";
import Image from "next/image";

const GridItem = ({ image }) => {
  return (
    <div className="flex column grid_folder_component pointer">
      <Image src={image} />
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
