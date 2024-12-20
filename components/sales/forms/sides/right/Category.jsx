import React, { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import FormSectionHeader from "../../FormSectionHeader";
import { FaQuestionCircle } from "react-icons/fa";
import { Tooltip } from "antd";
import { capitalizeFirstLetters } from "@/helpers/sanitizeText";
import { toast } from "react-toastify";

const Category = ({ setData }) => {
  const [categories, setCategories] = useState([
    { id: 1, isCustom: false, value: "Medicine and Health" },
  ]);

  const categoryOptions = [
    "Fashion",
    "Gadgets",
    "Electronics",
    "Home Appliances",
    "Automotive",
    "Beauty and Personal Care",
    "Sports and Outdoor",
    "Books and Stationery",
    "Toys and Games",
    "Office Supplies",
    "Furniture",
    "Jewelry and Accessories",
    "Pet Supplies",
    "Baby Products",
    "Tools and Hardware",
    "Music Instruments",
  ];

  const handleCategoryChange = (index, value) => {
    setCategories((prev) => {
      const isDuplicate = prev.some((cat) => cat.value === value);

      if (isDuplicate) {
        toast.error("Category already exist", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return prev;
      }

      return prev.map((cat, i) => (i === index ? { ...cat, value } : cat));
    });
  };

  const handleCustomChange = (index, value) => {
    setCategories((prev) =>
      prev.map((cat, i) =>
        i === index ? { ...cat, value, isCustom: !cat.isCustom } : cat
      )
    );
  };

  const addCategoryField = () => {
    setCategories((prev) => [
      ...prev,
      { id: Date.now(), isCustom: false, value: categoryOptions[0] },
    ]);
  };

  const removeCategoryField = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      productCategory: categories.map((e) => e.value),
    }));
  }, [categories]);

  return (
    <div
      className={`flex column gap1rem category_container border_all padding1rem optional_feeds ${
        showFull && "show_full"
      }`}
    >
      <FormSectionHeader
        text={"Category"}
        component={
          <Tooltip
            title="Select one or multiple categories that your product belongs to"
            color={"var(--main_bg)"}
          >
            <FaQuestionCircle size={13} />
          </Tooltip>
        }
        setShowFull={setShowFull}
        showFull={showFull}
      />
      {categories.map((category, index) => (
        <div key={category.id} className="flex column gap03rem main_bg">
          <div className="flex gap05rem align_center">
            {category.isCustom ? (
              <input
                type="text"
                value={capitalizeFirstLetters(category.value)}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
              />
            ) : (
              <select
                value={category.value}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={(e) => [
                e.preventDefault(),
                handleCustomChange(index, ""),
              ]}
            >
              {category.isCustom ? "Options" : "Custom"}
            </button>
            {index > 0 && (
              <IoTrashOutline
                size={18}
                className="pointer"
                onClick={(e) => [
                  e.preventDefault(),
                  removeCategoryField(category.id),
                ]}
              />
            )}
          </div>
        </div>
      ))}
      <button
        className="flex gap05rem align_center add_new_field"
        onClick={(e) => [e.preventDefault(), addCategoryField()]}
      >
        <FaPlus color="var(--sub_bg)" /> Add New Field
      </button>
    </div>
  );
};

export default Category;
