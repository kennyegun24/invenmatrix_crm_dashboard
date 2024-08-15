import React, { useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { FieldTitle } from "@/components/GlobalComponents";
import { FaChevronDown } from "react-icons/fa";

const OptionalFields = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <section
      className={`flex column gap1rem add_product_left_component border_all padding1rem optional_feeds ${
        showFull && "show_full"
      }`}
    >
      <FormSectionHeader
        text={"Optional Information"}
        setShowFull={setShowFull}
        showFull={showFull}
      />

      <div className="flex gap1rem main_bg wrap" style={widthFull}>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Manufacturer Name"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Brand"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"SKU"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Manufacturer's SKU"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Warranty Information"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Dimensions & weight"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Tags"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
        <div className="flex column gap03rem main_bg" style={widthHalf}>
          <FieldTitle
            title={"Discounts & Promotion"}
            helper={"What is the name of this product...?... REQUIRED FIELD."}
            displayBin={true}
          />
          <input type="text" name="" id="" />
        </div>
      </div>
    </section>
  );
};

export default OptionalFields;

const widthFull = {
  width: "100%",
  gap: "4%",
};

const widthHalf = {
  width: "48%",
  marginTop: "1rem",
};
