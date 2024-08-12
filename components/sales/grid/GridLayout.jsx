import React from "react";
import "./style.css";
import GridFolder from "@/components/grid/GridFolder";
import GridItem from "@/components/grid/GridItem";
import { products } from "@/utils/prods_data";
const GridLayout = ({ folder_number, items_number }) => {
  const getRandomItemNumber = Math.floor(Math.random() * 10);
  const getRandomFolderNumber = Math.floor(Math.random() * 10);
  return (
    <div className="grid_layout_component flex column gap2rem">
      {folder_number > 0 && (
        <div>
          <h3 className="grid_layout_folder_header">Folders</h3>
          <section className="grid_layout">
            {products
              .slice(
                getRandomFolderNumber,
                getRandomFolderNumber + folder_number
              )
              .map((each, _) => (
                <GridFolder item={each} key={_} image={each.images[0]} />
              ))}
          </section>
        </div>
      )}
      {items_number > 0 && (
        <div>
          <h3 className="grid_layout_folder_header">Items</h3>
          <section className="grid_layout">
            {products
              .slice(getRandomItemNumber, getRandomItemNumber + items_number)
              .map((each, _) => (
                <GridItem key={_} item={each} image={each.images[0]} />
              ))}
          </section>
        </div>
      )}
    </div>
  );
};
export default GridLayout;
