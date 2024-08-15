import React from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { IoTrashOutline } from "react-icons/io5";
import { DatePicker } from "antd";
import { FieldTitle } from "@/components/GlobalComponents";

const GeneralInfo = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <section className="flex column gap1rem add_product_left_component border_all padding1rem">
      <FormSectionHeader text={"General Information"} />

      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Product Name"}
          helper={"What is the name of this product...?"}
        />
        <input type="text" name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle title={"Description"} helper={"Describe the product"} />
        <textarea rows={4} name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Supplier Name"}
          helper={"The person that supplied you this product name"}
        />
        <input type="email" name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Supplier Information"}
          helper={
            "Could be supplier location, email address, phone number... could be all"
          }
        />
        <textarea rows={4} name="" id="" />
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <p className="flex align_center justify_between">
            Date Purchased
            <IoTrashOutline size={18} className="pointer" />
          </p>
          <DatePicker onChange={onChange} />
        </div>
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Location"}
            helper={
              "The physical or virtual location of the product (e.g., warehouse, online store)."
            }
          />
          <input type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Status"}
            helper={"Is the product currently available or not?"}
          />
          <select type="text">
            <option value="Active">In Stock</option>
            <option value="Active">Out of Stock</option>
            <option value="Active">Discontinued</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
