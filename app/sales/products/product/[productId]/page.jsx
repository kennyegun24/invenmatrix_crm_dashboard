"use client";
import BarcodeComponent from "@/components/BARCODE";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { useState } from "react";
import "./page.css";
import Image from "next/image";
import { products } from "@/utils/prods_data";
import { TextField } from "@mui/material";
import { Input, Button } from "antd";
import EditDrawer from "@/components/sales/product/EditProduct";
import AddToOrdered from "@/components/sales/AddToOrdered";
import GridMainHeader from "@/components/grid/GridMainHeader";
import { formStyles } from "@/components/styles";

const CustomButton = ({ click, text }) => {
  const buttonStyle = {
    width: "fit-content",
  };
  return (
    <Button
      type="default"
      style={buttonStyle}
      className="antd_btn"
      size="small"
      onClick={click}
    >
      {text}
    </Button>
  );
};

const Page = ({ params }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const { productId } = params;
  const product = products.find((e) => e.id === productId);
  const { images } = product;

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
      <GridMainHeader
        text={"Product name"}
        first_click={showModal}
        first_btn_text={"Add to Ordered"}
        second_btn_text={"New Bundle"}
      />
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
                    sx={formStyles}
                  />

                  <TextField
                    value={"Category"}
                    id="outlined-basic"
                    label="Category"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />
                </div>
                <div className="flex gap05rem">
                  <TextField
                    value={"Selling Price"}
                    id="outlined-basic"
                    label="Selling Price"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />

                  <TextField
                    value={"Stock Level"}
                    id="outlined-basic"
                    label="Stock Level"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />
                </div>
                <div className="flex gap05rem">
                  <TextField
                    value={"Shipping Cost"}
                    id="outlined-basic"
                    label="Shipping Cost"
                    variant="outlined"
                    disabled
                    sx={{ ...formStyles, width: "24%" }}
                  />
                  <TextField
                    value={"Shipping Time"}
                    id="outlined-basic"
                    label="Shipping Time"
                    variant="outlined"
                    disabled
                    sx={{ ...formStyles, width: "24%" }}
                  />
                  <TextField
                    value={"Supplier Contact"}
                    id="outlined-basic"
                    label="Supplier Contact"
                    variant="outlined"
                    disabled
                    sx={{ ...formStyles, width: "24%" }}
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
                <ol className="flex gap05rem wrap column">
                  <h3 style={{ fontSize: 16 }}>Product variants:</h3>
                  {variants.map((variant, index) => (
                    <li
                      key={index}
                      style={{ marginLeft: "2rem", fontSize: 14 }}
                    >
                      {Object.keys(variant).map((key) => (
                        <div key={key}>
                          <strong>{key}:</strong> {variant[key]}
                        </div>
                      ))}
                    </li>
                  ))}
                </ol>
              </div>

              <CustomButton click={showDrawer} text={"Edit details"} />
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
      <EditDrawer open={open} setOpen={setOpen} />
      <AddToOrdered
        item={product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </SalesContainer>
  );
};

export default Page;
