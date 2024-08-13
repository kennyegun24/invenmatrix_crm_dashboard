import { Popover } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./gridmenu.css";

const GridMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const toggleNav = (key) => {
    setActiveNav(activeNav === key ? null : key);
  };
  const [folders, setFolders] = useState([]);

  const handleOpenChange = async (newOpen) => {
    setOpen(newOpen);
    if (newOpen && folders.length === 0) {
      const fetchData = await fetch("/api/folders/structure");
      const data = await fetchData.json();
      setFolders(JSON.parse(data?.data));
    }
  };

  const renderSubfolders = (subfolders) => {
    return (
      <div className="flex column gap05rem grid_menu_sub_folder">
        {subfolders.map((subfolder, index) => (
          <div key={index} className="flex column gap05rem">
            <p>{subfolder.folderName}</p>
            {subfolder.subfolders?.length > 0 &&
              renderSubfolders(subfolder.subfolders)}
          </div>
        ))}
      </div>
    );
  };

  const content = () => {
    return (
      <section className="flex column gap1rem grid_menu_component">
        {folders?.map((folder, index) => (
          <div
            key={index}
            className={`flex column gap05rem grid_menu_item pointer ${
              activeNav === folder.id ? "active" : "non_active"
            }`}
          >
            <div
              onClick={() => toggleNav(folder.id)}
              className="flex justify_between align_center"
            >
              <h4 className="text_start gap05rem align_center flex">
                {folder.folderName}
              </h4>
              {folder?.subfolders.length > 0 && (
                <IoIosArrowDown
                  className={
                    folder.id === activeNav
                      ? "dropdown_icon transform"
                      : "dropdown_icon"
                  }
                />
              )}
            </div>
            {folder.subfolders?.length > 0 &&
              renderSubfolders(folder.subfolders)}
          </div>
        ))}
      </section>
    );
  };

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {children}
    </Popover>
  );
};

export default GridMenu;
