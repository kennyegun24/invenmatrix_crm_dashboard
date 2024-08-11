import React from "react";
import "./gridfolder.css";
import Image from "next/image";
import { BsFolder } from "react-icons/bs";
import { GoStack } from "react-icons/go";

const GridFolder = ({ image }) => {
  return (
    <div className="flex column grid_item_component">
      <Image src={image} />
      <div className="flex column gap05rem wrap grid_item_content">
        <h4>Glasses</h4>
        <div className="flex gap05rem align_center">
          <p>$24.00</p>
          <p className="flex align_center gap05rem">
            <BsFolder /> 2
          </p>
          <p className="flex align_center gap05rem">
            <GoStack /> 12
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridFolder;
