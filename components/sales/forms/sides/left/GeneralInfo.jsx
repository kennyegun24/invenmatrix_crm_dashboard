import React from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { IoTrashOutline } from "react-icons/io5";

const GeneralInfo = () => {
  return (
    <section className="flex column gap1rem add_product_left_component border_all padding1rem">
      <FormSectionHeader text={"General Information"} />

      <div className="flex column gap03rem main_bg">
        <p className="flex align_center justify_between">
          Product Name <IoTrashOutline size={18} className="pointer" />
        </p>
        <input type="text" name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <p className="flex align_center justify_between">
          Description <IoTrashOutline size={18} className="pointer" />
        </p>
        <textarea rows={4} name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <p className="flex align_center justify_between">
          Supplier <IoTrashOutline size={18} className="pointer" />
        </p>
        <input type="email" name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <p className="flex align_center justify_between">
          Supplier Information <IoTrashOutline size={18} className="pointer" />
        </p>
        <textarea rows={4} name="" id="" />
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Date Purchased
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Location
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Status
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <select type="text">
            <option value="Active">Active</option>
            <option value="Active">In-active</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
