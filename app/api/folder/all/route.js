import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
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

    const [folders, folderProducts] = await Promise.all([
      folderSchema
        .find({
          organization: orgObjectId,
          parentFolders: { $size: 0 },
        })
        .select("folderName products subfolders createdAt updatedAt")
        .lean(),
      folderSchema.aggregate([
        { $match: { organization: orgObjectId } },
        { $unwind: "$products" },
        { $group: { _id: null, allProductIds: { $addToSet: "$products" } } },
        { $project: { _id: 0, allProductIds: 1 } },
      ]),
    ]);

    const allProductIds = folderProducts.length
      ? folderProducts[0].allProductIds
      : [];

    const unassignedProducts = await productSchema
      .find({
        _id: { $nin: allProductIds },
        organization: orgObjectId,
      })
      .select("productName sellingPrice images stockLevel createdAt updatedAt")
      .lean();

    return NextResponse.json({
      folders,
      products: unassignedProducts,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
