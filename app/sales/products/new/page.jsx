"use client";
import { Container, SalesContainer } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import AddProductForm from "@/components/sales/forms/AddProduct";
import React from "react";
import "./style.css";

const page = () => {
  return (
    <SalesContainer>
      <GridMainHeader
        first_btn_text={"Cancel"}
        second_btn_text={"Add New Column"}
        text={"Add New Product"}
        component={
          <button size="small" className="btn_theme pointer" type="primary">
            Add Product
          </button>
        }
      />
      <div className="add_products_main_div">
        <div className="add_product_form_div">
          <AddProductForm />
        </div>
      </div>
    </SalesContainer>
  );
};

export default page;
