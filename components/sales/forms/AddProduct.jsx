import React from "react";
import "./addProduct.css";
import RightSide from "./sides/RightSide";
import LeftSide from "./sides/LeftSide";

const arr = [
  {
    header: "General Information",
  },
  {
    header: "Category",
  },
  {
    header: "Price",
  },
];

const AddProduct = () => {
  return (
    <div className="flex justify_between gap1rem align_start">
      <section className="add_product_left">
        <LeftSide />
      </section>
      <section className="add_product_right">
        <RightSide />
      </section>
    </div>
  );
};

export default AddProduct;
