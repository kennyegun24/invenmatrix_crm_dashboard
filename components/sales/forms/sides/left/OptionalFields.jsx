import React, { useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { FieldTitle } from "@/components/GlobalComponents";
import { addNewColumn, deleteItem } from "./optionFieldsHelper";
import { convertToCamelCase } from "@/helpers/sanitizeText";

const OptionalFields = ({ setData, userData }) => {
  const [showFull, setShowFull] = useState(false);
  const [options, setOptions] = useState([
    {
      title: "Manufacturer's Name",
      name: "",
      id: "1",
    },
    {
      title: "Brand",
      name: "",
      id: "2",
    },
    {
      title: "SKU",
      name: "",
      id: "3",
    },
    {
      title: "Manufacturer's SKU",
      name: "",
      id: "4",
    },
    {
      title: "Warranty Information",
      name: "",
      id: "5",
    },
    {
      title: "Dimensions & Weight",
      name: "",
      id: "6",
    },
    {
      title: "Tags",
      name: "",
      id: "7",
    },
    {
      title: "Discounts & Promotion",
      name: "",
      id: "8",
    },
  ]);
  const [newColumn, setNewColumn] = useState("");

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
        {options.map((opt, _) => (
          <div
            key={_}
            className="flex column gap03rem main_bg"
            style={widthHalf}
          >
            <FieldTitle
              title={opt.title}
              helper={"What is the name of this product...?... REQUIRED FIELD."}
              displayBin={true}
              click={() =>
                deleteItem({
                  id: opt.id,
                  setOptions,
                  options,
                  setData,
                  userData,
                  fieldName: convertToCamelCase(opt.title),
                })
              }
            />
            <input type="text" name={convertToCamelCase(opt.title)} id="" />
          </div>
        ))}
      </div>
      <div className="flex gap05rem main_bg sub_inputs align_center">
        <input
          onChange={(e) => setNewColumn(e.target.value)}
          type="text"
          placeholder="Add new field"
        />
        <button
          onClick={(e) =>
            newColumn.trim().length >= 2
              ? [e.preventDefault(), addNewColumn(setOptions, newColumn)]
              : [e.preventDefault(), alert("Not Working")]
          }
          style={widthQuarter}
        >
          Add field
        </button>
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

const widthQuarter = {
  width: "25%",
  borderRadius: "0.4rem",
  border: "1px solid var(--light_border)",
  padding: "0.5rem 1rem",
  fontSize: 14,
};
