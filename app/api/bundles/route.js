import bundleSchema from "@/models/bundles";
import productSchema from "@/models/fileSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const {
  Types: { ObjectId },
} = mongoose;

export const POST = async (res) => {
  try {
    const body = await res.json();
    const { organizationId, userId, details } = body;
    console.log(details, "route");
    // const orgId = new ObjectId(organizationId);
    console.log(mongoose.Types.ObjectId.isValid(organizationId));
    const orgId = ObjectId.isValid(organizationId)
      ? new ObjectId(organizationId)
      : null;

    if (!orgId) {
      return NextResponse.json(
        { error: "Invalid organization ID" },
        { status: 400 }
      );
    }
    console.log(orgId, "orgid");
    const productsId = details.products;
    if (productsId?.length > 0) {
      const bundle = new bundleSchema({
        ...details,
        organization: orgId,
      });
      await bundle.save();
      return NextResponse.json({ data: "saveBundle" }, { status: 200 });
    }
    return NextResponse.json(
      { error: "Products Not Present" },
      { status: 403 }
    );

    // const saveBundle = await store.save();
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

// const products = await Promise.all(
//   productsId?.map(async (element) => {
//     const id = new ObjectId(element);
//     const productPrice = await productSchema.findById(id);
//     return productPrice?.sellingPrice;
//   })
// );
