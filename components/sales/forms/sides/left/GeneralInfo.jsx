import React, { useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { IoTrashOutline } from "react-icons/io5";
import { DatePicker } from "antd";
import { FieldTitle } from "@/components/GlobalComponents";

const GeneralInfo = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [showFull, setShowFull] = useState(true);
  return (
    <section
      className={`flex column gap1rem add_product_left_component border_all padding1rem optional_feeds ${
        showFull && "show_full"
      }`}
    >
      <FormSectionHeader
        text={"General Information"}
        setShowFull={setShowFull}
        showFull={showFull}
      />

      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Product Name"}
          helper={"What is the name of this product...?... REQUIRED FIELD."}
          displayBin={false}
        />
        <input type="text" name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Description"}
          helper={"Describe the product... REQUIRED FIELD."}
          displayBin={false}
        />
        <textarea rows={4} name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Supplier Name"}
          helper={
            "The person that supplied you this product name... REQUIRED FIELD."
          }
          displayBin={true}
        />
        <input type="email" name="" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Supplier Information"}
          helper={
            "Could be supplier location, email address, phone number... could be al... REQUIRED FIELD.l"
          }
          displayBin={true}
        />
        <textarea rows={4} name="" id="" />
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            displayBin={false}
            helper={"What day did you buy this item..?"}
            title={"Date Purchased"}
          />
          <DatePicker onChange={onChange} />
        </div>
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Location"}
            helper={
              "The physical or virtual location of the product (e.g., warehouse, online store)... REQUIRED FIELD.."
            }
            displayBin={false}
          />
          <input type="text" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            title={"Status"}
            helper={
              "Is the product currently available or not?... REQUIRED FIELD."
            }
            displayBin={false}
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
