"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import AddProductForm from "@/components/sales/forms/AddProduct";
import React, { useState } from "react";
import "./style.css";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "antd";
import { calculateProfitMargin } from "@/components/sales/forms/sides/left/pricesHelper";
import { restructureProductData } from "@/helpers/restructureProductsFormat";

const page = () => {
  const folderId = useSearchParams().get("folderId");
  const session = useSession();
  const [userData, setUserData] = useState({
    images: [],
    sellingPrice: null,
    profitMargin: null,
    stockLevel: null,
    productCategory: [],
    productName: null,
    shippingCost: null,
    shippingTime: null,
    productDescription: null,
    barcode: null,
    supplierContact: null,
    variants: [],
    sellingPrice: null,
    images: [
      "https://res.cloudinary.com/drfqge33t/image/upload/v1713945603/lyhbrylko3msfdforqep.png",
      "https://res.cloudinary.com/drfqge33t/image/upload/v1713979643/qm2cygozopmur9ijrxet.png",
    ],
  });
  console.log(session);
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const access_token = await session?.data?.user?.access_token;
      const userId = await session?.data?.user?.id;
      console.log("start");
      const req = await fetch("http://localhost:3000/api/products/new", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({
          folderId: folderId?.trim()?.length > 21 ? folderId : null,
          organizationId: "66ddf0cad0d31ab0b903bc7d",
          userId: userId,
          products: restructureProductData({
            ...userData,
            profitMargin: calculateProfitMargin(
              Number(userData?.shippingCost),
              Number(userData?.costPrice),
              Number(userData?.sellingPrice)
            ),
          }),
        }),
      });
      console.log("end");
      const data = await req.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SalesContainer>
      <GridMainHeader
        text={"Add New Product"}
        component={
          <Button
            onClick={createProduct}
            size="small"
            className="antd_btn"
            type="default"
          >
            Add Product
          </Button>
        }
      />
      <div className="add_products_main_div">
        <div className="add_product_form_div width100">
          <AddProductForm
            setUserData={setUserData}
            userData={userData}
            createProduct={createProduct}
          />
        </div>
      </div>
    </SalesContainer>
  );
};

export default page;
