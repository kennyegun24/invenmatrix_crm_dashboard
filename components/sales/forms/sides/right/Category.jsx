import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import FormSectionHeader from "../../FormSectionHeader";

const Category = () => {
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
    setCategories((prev) =>
      prev.map((cat, i) =>
        i === index ? { ...cat, value, isCustom: false } : cat
      )
    );
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

  return (
    <div className="flex column gap1rem border_all padding1rem category_container">
      <FormSectionHeader text={"Category"} />
      {categories.map((category, index) => (
        <div key={category.id} className="flex column gap03rem main_bg">
          <div className="flex gap05rem align_center">
            {category.isCustom ? (
              <input
                type="text"
                value={category.value}
                onChange={(e) => handleCustomChange(index, e.target.value)}
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
            <button onClick={() => handleCustomChange(index, "")}>
              {category.isCustom ? "Options" : "Custom"}
            </button>
            {index > 0 && (
              <IoTrashOutline
                size={18}
                className="pointer"
                onClick={() => removeCategoryField(category.id)}
              />
            )}
          </div>
        </div>
      ))}
      <button
        className="flex gap05rem align_center add_new_field"
        onClick={addCategoryField}
      >
        <FaPlus color="var(--sub_bg)" /> Add New Field
      </button>
    </div>
  );
};

export default Category;
