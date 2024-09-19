import React, { useEffect } from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import GridHeaderControls from "./GridHeaderControls";
import { MdOutlineMenuOpen } from "react-icons/md";
import GridMenu from "./GridMenu";
import { BreadcrumbDemo } from "../shadcn/BreadCombs";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getBreadcrumbs } from "@/redux/Breadcrumbs";

const GridDisplayHeader = ({ text, display, setSearchInput, breadcrumbs }) => {
  const pathname = usePathname();
  const ids = pathname.split("/").slice(4);
  const { folders } = useSelector((state) => state.folderStructure);
  const { foundFolders } = useSelector((state) => state.breadCrumbs);

  const dispatch = useDispatch();
  useEffect(() => {
    if (folders) {
      dispatch(getBreadcrumbs(ids));
    }
  }, [folders]);
  return (
    <div className="grid_display_header_component flex gap03rem column">
      <section className="sales_sub_header_container flex justify_between">
        <div className="flex align_center gap1rem">
          <section className="sales_search flex align_center">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="search"
              name=""
              id=""
            />
            <div className="sales_search_icon pointer flex align_center justify_center">
              <FaSearch />
            </div>
          </section>
          {/* <GridMenu>
            <p className="flex gap05rem align_center grid_menu_option pointer">
              Menu <MdOutlineMenuOpen />
            </p>
          </GridMenu> */}
        </div>

        <GridHeaderControls display={display} />
      </section>
      {breadcrumbs && (
        <section className="sales_sub_header_container flex align_center gap1rem">
          <BreadcrumbDemo structure={foundFolders} />
        </section>
      )}
      <section className="sales_sub_header_container flex align_center gap1rem">
        <p>5 Folders</p>
        <p>12 Items</p>
        <p>Total Quantities 24 Units</p>
        <p>Total Value: $13000</p>
      </section>
    </div>
  );
};

export default GridDisplayHeader;
