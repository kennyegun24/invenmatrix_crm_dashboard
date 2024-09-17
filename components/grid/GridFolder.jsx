import React from "react";
import "./gridfolder.css";
import Image from "next/image";
import { BsFolder } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { useRouter } from "next/navigation";
import { GridFolderOptions } from "./GridOptions";

const GridFolder = ({ image, item }) => {
  const router = useRouter();
  const navigateToSubFolder = (param) => {
    router.push(param);
  };
  return (
    <div className="grid_item_folder_component">
      <div className="absolute display_on_hover flex justify_between">
        <input type="checkbox" name="" id="" />
        <GridFolderOptions />
      </div>
      <div
        className="flex column grid_folder_component pointer padding05rem"
        onClick={() =>
          navigateToSubFolder(`/sales/products/folders/${item._id}`)
        }
      >
        <section className="grid_folder_image_div">
          <Image src={image} height={100} width={100} />
        </section>
        <div className="flex column gap05rem wrap grid_folder_content">
          <h4>{item.folderName}</h4>
          <div className="flex gap05rem align_center">
            {/* <p>${item.sellingPrice}</p> */}
            <p className="flex align_center gap05rem">
              <BsFolder /> {item?.subfolders?.length}
            </p>
            <p className="flex align_center gap05rem">
              <GoStack /> {item?.products?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridFolder;
