import { Popover } from "antd";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./gridmenu.css";
const folders = [
  {
    name: "Folder 1",
    type: "folder",
    key: "folder1",
    subfolders: [],
  },
  {
    name: "Folder 2",
    type: "folder",
    key: "folder2",
    subfolders: [
      {
        name: "Subfolder 1",
        type: "folder",
        subfolders: [],
      },
      {
        name: "Subfolder 2",
        type: "folder",
        subfolders: [],
      },
    ],
  },
  {
    name: "Folder 3",
    type: "folder",
    key: "folder3",
    subfolders: [],
  },
  {
    name: "Folder 4",
    type: "folder",
    key: "folder4",
    subfolders: [
      {
        name: "Subfolder 1",
        type: "folder",
        subfolders: [],
      },
    ],
  },
];
const GridMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const toggleNav = (key) => {
    setActiveNav(activeNav === key ? null : key);
  };
  const content = () => {
    return (
      <section className="flex column gap15rem grid_menu_component">
        {folders.map((folder, _) => (
          <div
            key={_}
            className={`flex column gap05rem grid_menu_item ${
              activeNav === folder.key ? "active" : "non_active"
            }`}
          >
            <div
              onClick={() => toggleNav(folder.key)}
              className="flex justify_between align_center"
            >
              <h4 className="text_start gap05rem align_center flex">
                {folder.name}
              </h4>
              {folder?.subfolders.length > 0 && (
                <IoIosArrowDown
                  className={
                    folder.key === activeNav
                      ? "dropdown_icon transform"
                      : "dropdown_icon"
                  }
                />
              )}
            </div>
            {folder.subfolders && (
              <div className="flex column gap05rem">
                {folder.subfolders.map((each, _) => (
                  <div key={_}>
                    <p>{each.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    );
  };

  return (
    <Popover
      content={content}
      title="Navigation"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {children}
    </Popover>
  );
};

export default GridMenu;
