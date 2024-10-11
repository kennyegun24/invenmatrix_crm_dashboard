import connectMongoDb from "@/libs/mongodb";
import bundleSchema from "@/models/Bundles";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const {
  Types: { ObjectId },
} = mongoose;

export const GET = async (req, res) => {
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
    const bundles = await bundleSchema
      .find({
        organization: orgObjectId,
      })
      // .populate({
      //   path: "products.productsId",
      //   select: "sellingPrice productName",
      // })
      .lean();
    return NextResponse.json({ bundles }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
