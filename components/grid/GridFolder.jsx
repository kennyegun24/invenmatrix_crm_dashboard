import React from "react";
import "./gridfolder.css";
import Image from "next/image";
import { BsFolder } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { LuFolderInput } from "react-icons/lu";
import { FaEllipsisV } from "react-icons/fa";
import { useRouter } from "next/navigation";

const GridFolder = ({ image, item }) => {
  const router = useRouter();
  const navigateToSubFolder = (param) => {
    router.push(param);
  };
  return (
    <div
      className="flex column grid_folder_component pointer"
      onClick={() => navigateToSubFolder(`/sales/products/folders/${item.id}`)}
    >
      <section className="grid_folder_image_div">
        <Image src={image} />

        <div className="absolute display_on_hover flex justify_between">
          <input type="checkbox" name="" id="" />
          <div className="flex column justify_between">
            <section className="flex column gap05rem">
              <div className="hover_icon">
                <MdOutlineEdit />
              </div>
              <div className="hover_icon">
                <LuFolderInput />
              </div>
            </section>
            <FaEllipsisV />
          </div>
        </div>
      </section>
      <div className="flex column gap05rem wrap grid_folder_content">
        <h4>{item.folderName}</h4>
        <div className="flex gap05rem align_center">
          {/* <p>${item.sellingPrice}</p> */}
          <p className="flex align_center gap05rem">
            <BsFolder /> {item?.subFolder?.length}
          </p>
          <p className="flex align_center gap05rem">
            <GoStack /> {item?.products?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridFolder;
