import React from "react";
import "./gridfolder.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GridProductOptions } from "./GridOptions";

const GridItem = ({ image, item }) => {
  const router = useRouter();
  const navigateToItem = (param) => {
    router.push(param);
  };
  return (
    <div className="grid_item_folder_component">
      <div className="absolute display_on_hover flex justify_between">
        <input type="checkbox" name="" id="" />
        <div className="flex column justify_between align_end">
          <GridProductOptions />
        </div>
      </div>
      <div
        onClick={() => navigateToItem(`/sales/products/product/${item._id}`)}
        className="flex column grid_folder_component pointer"
      >
        <section className="grid_folder_image_div">
          <Image src={image} height={35} width={35} />
        </section>
        <div className="flex column gap3rem wrap grid_item_content">
          <h4>{item.productName}</h4>
          <div className="flex gap05rem align_center">
            <p>{item?.stockLevel} unit</p>
            {"/"}
            <p>${item.sellingPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
