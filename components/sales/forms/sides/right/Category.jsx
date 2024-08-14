import React from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { IoTrashOutline } from "react-icons/io5";

const Category = () => {
  return (
    <div className="flex column gap1rem border_all padding1rem category_container">
      <FormSectionHeader text={"Category"} />
      <div className="flex column gap03rem main_bg">
        <p className="flex align_center justify_between">
          Status
          <IoTrashOutline size={18} className="pointer" />
        </p>
        <select type="text">
          <option value="Active">Active</option>
          <option value="Active">In-active</option>
        </select>
      </div>
      <div className="flex column gap03rem main_bg">
        <p className="flex align_center justify_between">
          Variants (size)
          <IoTrashOutline size={18} className="pointer" />
        </p>
        <select type="text">
          <option value="Active">S</option>
          <option value="Active">M</option>
          <option value="Active">L</option>
          <option value="Active">XL</option>
          <option value="Active">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
