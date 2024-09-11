"use client";
import React from "react";
import "./addProduct.css";
import RightSide from "./sides/RightSide";
import LeftSide from "./sides/LeftSide";
import { capitalizeFirstLetters } from "@/helpers/sanitizeText";

const AddProduct = ({ userData, setUserData, createProduct }) => {
  return (
    <form
      onSubmit={createProduct}
      onChange={(e) => {
        const fieldName = e?.target?.name;
        const fieldValue = e?.target?.value;

        if (fieldName) {
          setUserData((prev) => ({
            ...prev,
            [fieldName]: capitalizeFirstLetters(fieldValue),
          }));
        }
      }}
    >
      <div className="flex justify_between align_start width100 gap1rem">
        <section className="add_product_left">
          <LeftSide userData={userData} setData={setUserData} />
        </section>
        <section className="add_product_right">
          <RightSide setData={setUserData} />{" "}
        </section>
      </div>
    </form>
  );
};

export default AddProduct;
