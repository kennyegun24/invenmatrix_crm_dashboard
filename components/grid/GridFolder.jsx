import React from "react";
import "./gridfolder.css";
import Image from "next/image";
import { BsFolder } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { usePathname, useRouter } from "next/navigation";
import { GridFolderOptions } from "./GridOptions";

const GridFolder = ({ image, item }) => {
  const router = useRouter();
  const pathname = usePathname();
  const form = pathname
    .split("/")
    .filter((e) => e !== "sales")
    .filter((e) => e !== "products")
    .filter((e) => e !== "folders")
    .filter((e) => e !== "all")
    .filter((e) => e);
  const navigateToSubFolder = (param) => {
    router.push(`/sales/products/folders/${form}/${param}`);
  };
  return (
    <GridFolderOptions _id={item?._id} folderName={item?.folderName}>
      <div
        onClick={() => navigateToSubFolder(`${item._id}`)}
        className="flex column grid_folder_component1 pointer"
      >
        <section className="grid_folder_image_div">
          <Image src={image} height={100} width={100} />
        </section>
        <div className="flex column gap05rem wrap grid_folder_content">
          <h4>{item.folderName}</h4>
          <div className="flex gap05rem align_center">
            <p className="flex align_center gap05rem">
              <BsFolder /> {item?.subfolders?.length}
            </p>
            <p className="flex align_center gap05rem">
              <GoStack /> {item?.products?.length}
            </p>
          </div>
        </div>
      </div>
    </GridFolderOptions>
  );
};

export default GridFolder;
