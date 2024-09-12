"use client";
import { SalesContainer } from "@/components/GlobalComponents";
import GridMainHeader from "@/components/grid/GridMainHeader";
import AddProductForm from "@/components/sales/forms/AddProduct";
import React, { useContext, useState } from "react";
import "./style.css";
import { useSearchParams } from "next/navigation";
import { Button } from "antd";
import { calculateProfitMargin } from "@/components/sales/forms/sides/left/pricesHelper";
import { restructureProductData } from "@/helpers/restructureProductsFormat";
import { uploadImages } from "@/helpers/uploadImageToCloudinary";
import { DragDropContext } from "@/contexts/DragDrop";
import Resizer from "react-image-file-resizer";
import { createAxios } from "@/axios";
import { toastError, toastSuccess } from "@/libs/toast";
import { getUserSession } from "@/libs/getUserSession";

const Page = () => {
  const folderId = useSearchParams().get("folderId");
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
    images: [],
  });
  const { selectedImages } = useContext(DragDropContext);
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const { user } = await getUserSession();
      const access_token = await user?.access_token;
      const userId = user?.id;
      const imagesUrl = await uploadImages(selectedImages, Resizer);
      const req = await createAxios(access_token).post("/products/new", {
        folderId: folderId?.trim()?.length > 21 ? folderId : null,
        organizationId: user?.organization?.value,
        userId: userId,
        products: restructureProductData({
          ...userData,
          images: imagesUrl,
          profitMargin: calculateProfitMargin(
            Number(userData?.shippingCost),
            Number(userData?.costPrice),
            Number(userData?.sellingPrice)
          ),
        }),
      });
      const data = await req.data;
      toastSuccess("Product successfully uploaded");
    } catch (error) {
      toastError("Product not uploaded");
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

export default Page;
