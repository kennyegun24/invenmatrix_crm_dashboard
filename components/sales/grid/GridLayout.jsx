import React from "react";
import "./style.css";
import GridFolder from "@/components/grid/GridFolder";
import GridItem from "@/components/grid/GridItem";
import folder from "@/public/empty.png";

const GridLayout = ({ isLoading, error, data }) => {
  return (
    <div className="grid_layout_component flex column gap2rem">
      {data?.folders?.length > 0 && (
        <div>
          <h3 className="grid_layout_folder_header">Folders</h3>
          <section className="grid_layout">
            {data?.folders?.map((each, _) => (
              <GridFolder item={each} key={_} image={folder} />
            ))}
          </section>
        </div>
      )}
      {data?.items?.length > 0 && (
        <div>
          <h3 className="grid_layout_folder_header">Items</h3>
          <section className="grid_layout">
            {data?.items?.map((each, _) => (
              <GridItem key={_} item={each} image={each.images[0]} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
};
export default GridLayout;
