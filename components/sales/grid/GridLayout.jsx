import React from "react";
import "./style.css";
import GridFolder from "@/components/grid/GridFolder";
import GridItem from "@/components/grid/GridItem";
import folderImg from "@/public/empty.png";

const GridLayout = ({ folder, products }) => {
  return (
    <div className="grid_layout_component flex column gap2rem">
      {folder.length > 0 && (
        <div>
          <h3 className="grid_layout_folder_header">Folders</h3>
          <section className="grid_layout">
            {folder?.map((each, _) => (
              <GridFolder item={each} key={_} image={folderImg} />
            ))}
          </section>
        </div>
      )}
      {products.length > 0 && (
        <div>
          <h3 className="grid_layout_folder_header">Items</h3>
          <section className="grid_layout">
            {products.map((each, _) => (
              <GridItem key={_} item={each} image={each.images[0]} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
};
export default GridLayout;
