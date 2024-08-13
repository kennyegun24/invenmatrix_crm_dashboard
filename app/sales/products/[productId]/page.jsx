"use client";
import BarcodeComponent from "@/components/BARCODE";
import DashboardHeader from "@/components/DashboardHeader";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { useState } from "react";
import "./page.css";
import Image from "next/image";
import { products } from "@/utils/prods_data";
import { TextField } from "@mui/material";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditDrawer from "@/components/sales/product/EditProduct";

const Page = ({ params }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const { productId } = params;
  const product = products.find((e) => e.id === productId);
  const { images } = product;
  const style = {
    width: "35%",
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "var(--primary_text_color)",
      color: "var(--primary_text_color)",
      outlineColor: "red",
      borderColor: "#fff",
      opacity: 0.7,
      foneSize: "12px",
    },
    "& label.Mui-disabled": {
      color: "var(--primary_text_color)",
      opacity: 0.7,
    },
    "& border.Mui-disabled": {
      borderColor: "red",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-disabled fieldset": {
        borderColor: "#fff",
        opacity: 0.7,
      },
    },
    "& .MuiInputBase-input": {
      fontSize: "0.83rem",
    },
  };

  const variants = [
    {
      size: 12,
      color: "blue",
    },
    {
      size: 12,
      color: "green",
      material: "wood",
    },
  ];

  return (
    <SalesContainer>
      <DashboardHeader text={"Product name"} />
      <div className="padding1rem">
        <section className="product_details_container justify_between padding1rem">
          <section className="flex gap1rem product_details_top">
            <div className="product_details_top_div flex column gap2rem">
              <section className="flex column gap2rem">
                <div className="flex gap05rem">
                  <TextField
                    value={"Product Name"}
                    id="outlined-basic"
                    label="Product Name"
                    variant="outlined"
                    disabled
                    sx={style}
                  />

                  <TextField
                    value={"Category"}
                    id="outlined-basic"
                    label="Category"
                    variant="outlined"
                    disabled
                    sx={style}
                  />
                </div>
                <div className="flex gap05rem">
                  <TextField
                    value={"Selling Price"}
                    id="outlined-basic"
                    label="Selling Price"
                    variant="outlined"
                    disabled
                    sx={style}
                  />

                  <TextField
                    value={"Stock Level"}
                    id="outlined-basic"
                    label="Stock Level"
                    variant="outlined"
                    disabled
                    sx={style}
                  />
                </div>
                <div className="flex gap05rem">
                  <TextField
                    value={"Shipping Cost"}
                    id="outlined-basic"
                    label="Shipping Cost"
                    variant="outlined"
                    disabled
                    sx={{ ...style, width: "24%" }}
                  />
                  <TextField
                    value={"Shipping Time"}
                    id="outlined-basic"
                    label="Shipping Time"
                    variant="outlined"
                    disabled
                    sx={{ ...style, width: "24%" }}
                  />
                  <TextField
                    value={"Supplier Contact"}
                    id="outlined-basic"
                    label="Supplier Contact"
                    variant="outlined"
                    disabled
                    sx={{ ...style, width: "24%" }}
                  />
                </div>
              </section>
              <div className="flex column gap25rem">
                <BarcodeComponent text={product.barcode} />
                <Input.TextArea
                  rows={4}
                  maxLength={6}
                  style={{
                    background: "initial",
                    color: "inherit",
                    resize: "none",
                    "&::placeholder": {
                      color: "red",
                    },
                  }}
                  value={"This is value"}
                  disabled
                />
                <div className="flex gap05rem wrap">
                  Variants:
                  {variants.map((variant, index) => (
                    <div key={index} style={{}}>
                      {Object.keys(variant).map((key) => (
                        <div key={key}>
                          <strong>{key}:</strong> {variant[key]}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <Button
                type="primary"
                onClick={showDrawer}
                icon={<PlusOutlined />}
                style={{
                  width: "50%",
                  margin: "auto",
                  color: "var(--light_color",
                  background: "var(--sub_bg)",
                  borderColor: "var(--light_border)",
                }}
              >
                Edit details
              </Button>
            </div>
            <div className="product_details_image_div flex column justify_between">
              <div className="product_details_image flex justify_center">
                <Image src={images[currentImageIndex]} />
              </div>
              <div className="product_details_images flex gap05rem align_center">
                {images?.map((image, _) => (
                  <Image
                    src={image}
                    key={_}
                    className={`pointer ${
                      currentImageIndex === _ && "current_image"
                    }`}
                    onClick={() => setCurrentImageIndex(_)}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
      {open && <EditDrawer open={open} setOpen={setOpen} />}
    </SalesContainer>
  );
};

export default Page;
