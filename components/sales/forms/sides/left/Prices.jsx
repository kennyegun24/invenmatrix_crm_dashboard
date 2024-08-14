import React from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { IoTrashOutline } from "react-icons/io5";

const Prices = () => {
  return (
    <section className="flex column gap1rem add_product_left_component border_all padding1rem">
      <FormSectionHeader text={"Price"} />

      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Cost Price
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Selling Price
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Shipping Cost
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Shipping Time
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Stock Level
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Profit Margin
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <input type="text" />
        </div>
      </div>
    </section>
  );
};

export default Prices;
