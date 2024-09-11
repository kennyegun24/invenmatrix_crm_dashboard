import connectMongoDb from "@/libs/mongodb";
import productSchema from "@/models/fileSchema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const {
  Types: { ObjectId },
} = mongoose;

export const GET = async (req) => {
  const orgId = req.nextUrl.searchParams.get("organizationId");

  if (!orgId) {
    return NextResponse.json(
      { error: "Organization ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDb();
    const orgObjectId = new ObjectId(orgId);
    const products = await productSchema
      .find({
        organization: orgObjectId,
      })
      .lean();
    // const mergedProducts = products.map((product) => ({
    //   ...product,
    //   ...product.customFields,
    //   customFields: undefined,
    // }));
    return NextResponse.json({
      products,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
