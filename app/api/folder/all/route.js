import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import productSchema from "@/models/fileSchema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const {
  Types: { ObjectId },
} = mongoose;

export const GET = async (req) => {
  const query = req.nextUrl.searchParams;
  const orgId = query.get("organizationId");
  const createdAt = query.get("createdAt");
  const updatedAt = query.get("updatedAt");
  const _name = query.get("name");
  const productCount = query.get("productCount");
  const folderCount = query.get("folderCount");
  if (!orgId) {
    return NextResponse.json(
      { error: "Organization ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDb();
    const orgObjectId = new ObjectId(orgId);
    let sortedData = {};
    let sortedFolderData = {};
    let sortedProductData = {};
    if (createdAt) {
      sortedData.createdAt = createdAt === "asc" ? 1 : -1;
    }
    if (updatedAt) {
      sortedData.updatedAt = updatedAt === "asc" ? 1 : -1;
    }
    if (_name) {
      sortedFolderData.folderName = _name === "asc" ? 1 : -1;
      sortedProductData.productName = _name === "asc" ? 1 : -1;
    }
    if (productCount) {
      sortedData.productCount = productCount === "asc" ? 1 : -1;
    }
    if (folderCount) {
      sortedData.folderCount = folderCount === "asc" ? 1 : -1;
    }

    const [folders, folderProducts] = await Promise.all([
      folderSchema
        .find({
          organization: orgObjectId,
          parentFolders: { $size: 0 },
        })
        .select("folderName products subfolders createdAt updatedAt")
        .sort({ ...sortedData, ...sortedFolderData })
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
      .sort({ ...sortedData, ...sortedProductData })
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
