"use client";
import BarcodeComponent from "@/components/BARCODE";
import { SalesContainer } from "@/components/GlobalComponents";
import React, { useState } from "react";
import "./page.css";
import Image from "next/image";
import { TextField } from "@mui/material";
import { Input, Button } from "antd";
import EditDrawer from "@/components/sales/product/EditProduct";
import AddToOrdered from "@/components/sales/AddToOrdered";
import GridMainHeader from "@/components/grid/GridMainHeader";
import { formStyles } from "@/components/styles";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { getUserSession } from "@/libs/getUserSession";

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
  const fetcher = async () => {
    const { user } = await getUserSession();
    const fetchData = await fetch(
      `http://localhost:3000/api/products/findOne?organizationId=${user?.organization?.value}&productId=${productId}`
      // {
      //   method: "GET",
      //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGEyYTNlMzI5YjRhNGEwMjJmOTJkZiIsImlhdCI6MTcyNTYwMjg3NiwiZXhwIjoxNzI1ODYyMDc2fQ.MR5hRWvlHTwyNFH4JPTL44vP46N8herK32cM8n6wGNA`,
      // }
    );
    const data = await fetchData.json();
    return data?.product;
  };
  const { data, error, isLoading } = useSWR("get_product", fetcher, {
    refreshInterval: null,
    errorRetryInterval: 5000,
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return (
    <SalesContainer>
      <GridMainHeader
        text={data?.productName}
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
                    value={data?.productName}
                    id="outlined-basic"
                    placeholder="Product Name"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />

                  <TextField
                    value={data?.productCategory?.join(", ")}
                    id="outlined-basic"
                    // placeholder="Category"
                    placeholder="Category"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />
                </div>
                <div className="flex gap05rem">
                  <TextField
                    value={data?.sellingPrice}
                    id="outlined-basic"
                    placeholder="Selling Price"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />

                  <TextField
                    value={data?.stockLevel}
                    id="outlined-basic"
                    placeholder="Stock Level"
                    variant="outlined"
                    disabled
                    sx={formStyles}
                  />
                </div>
                <div className="flex gap05rem">
                  <TextField
                    value={data?.shippingCost}
                    id="outlined-basic"
                    placeholder="Shipping Cost"
                    variant="outlined"
                    disabled
                    sx={{ ...formStyles, width: "24%" }}
                  />
                  <TextField
                    value={data?.shippingTime}
                    id="outlined-basic"
                    placeholder="Shipping Time"
                    variant="outlined"
                    disabled
                    sx={{ ...formStyles, width: "24%" }}
                  />
                  <TextField
                    value={data?.supplierContact}
                    id="outlined-basic"
                    placeholder="Supplier Contact"
                    variant="outlined"
                    disabled
                    sx={{ ...formStyles, width: "24%" }}
                  />
                </div>
              </section>
              <div className="flex column gap25rem">
                <BarcodeComponent text={data?.barcode} />
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
                  value={data?.productDescription}
                  disabled
                />
                <ol className="flex gap05rem wrap column">
                  <h3 style={{ fontSize: 16 }}>Product variants:</h3>
                  {data?.variants.map((variant, index) => (
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
                <Image
                  width={100}
                  height={100}
                  src={data?.images[currentImageIndex]}
                />
              </div>
              <div className="product_details_images flex gap05rem align_center">
                {data?.images?.map((image, _) => (
                  <Image
                    width={50}
                    height={50}
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
        item={data}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </SalesContainer>
  );
};

export default Page;
