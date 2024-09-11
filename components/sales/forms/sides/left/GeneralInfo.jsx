import React, { useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { DatePicker } from "antd";
import { FieldTitle } from "@/components/GlobalComponents";
import { Switch } from "antd";

const GeneralInfo = ({ setData }) => {
  const onChange = (date, dateString) => {
    setData((prev) => ({ ...prev, datePurchased: dateString }));
  };
  const [showFull, setShowFull] = useState(true);
  const enable = (e) => {
    setData((prev) => ({ ...prev, enableNotification: e }));
  };
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
          required={true}
          title={"Product Name"}
          helper={"What is the name of this product...?... REQUIRED FIELD."}
          displayBin={false}
        />
        <input type="text" name="productName" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          required={true}
          title={"Description"}
          helper={"Describe the product... REQUIRED FIELD."}
          displayBin={false}
        />
        <textarea rows={4} name="productDescription" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Supplier Email"}
          helper={"The person that supplied you this product email..."}
          displayBin={true}
        />
        <input type="email" name="supplierContact" id="" />
      </div>
      <div className="flex column gap03rem main_bg">
        <FieldTitle
          title={"Supplier Information"}
          helper={
            "Could be supplier location, email address, phone number... could be al..."
          }
          displayBin={true}
        />
        <textarea rows={4} name="supplierInformation" id="" />
      </div>
      <div className="flex gap1rem sub_inputs main_bg">
        <div className="flex column gap03rem">
          <FieldTitle
            displayBin={false}
            helper={"What day did you buy this item..?"}
            title={"Date Purchased"}
          />
          <DatePicker onChange={onChange} name="datePurchased" />
        </div>
        <div className="flex column gap03rem">
          <FieldTitle
            required={true}
            title={"Location"}
            helper={
              "The physical or virtual location of the product (e.g., warehouse, online store)... REQUIRED FIELD.."
            }
            displayBin={false}
          />
          <input type="text" name="location" />
        </div>
      </div>
      <div className="flex gap1rem sub_inputs">
        <div className="flex gap1rem main_bg">
          <div className="flex column gap03rem">
            <FieldTitle
              required={true}
              title={"Status"}
              helper={
                "Is the product currently available or not?... REQUIRED FIELD."
              }
              displayBin={false}
            />
            <select type="text" name="active">
              <option value="In-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
              <option value="discontinued">Discontinued</option>
            </select>
          </div>
        </div>
        <div className="flex width_fit align_center gap05rem">
          <FieldTitle
            title={"Enable Alerts"}
            helper={
              "Do you want to get email alerts when your product is getting out of stock...?"
            }
            displayBin={false}
          />
          <Switch onChange={enable} defaultChecked className="width_fit" />
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
