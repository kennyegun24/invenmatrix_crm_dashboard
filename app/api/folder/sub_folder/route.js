import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import productSchema from "@/models/fileSchema";

const {
  Types: { ObjectId },
} = mongoose;
export const dynamic = "force-dynamic";
export const GET = async (req) => {
  const query = req.nextUrl.searchParams;
  const folderId = query.get("folderId");
  const orgId = query.get("organizationId");
  const createdAt = query.get("createdAt");
  const updatedAt = query.get("updatedAt");
  const _name = query.get("name");
  const productCount = query.get("productCount");
  if (!folderId) {
    return NextResponse.json(
      { error: "Folder ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDb();
    const folderObjectId = new ObjectId(folderId);
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
      sortedProductData.stockLevel = productCount === "asc" ? 1 : -1;
    }

    const [subfolders, folderProducts] = await Promise.all([
      folderSchema
        .find({
          organization: orgObjectId,
          parentFolders: { $elemMatch: { $eq: folderObjectId } },
        })
        .select("folderName products subfolders createdAt updatedAt")
        .sort({ ...sortedData, ...sortedFolderData })
        .lean(),

      folderSchema.aggregate([
        {
          $match: {
            organization: orgObjectId,
            _id: folderObjectId,
          },
        },
        { $unwind: "$products" },
        {
          $group: {
            _id: null,
            allProductIds: { $addToSet: "$products" },
          },
        },
        { $project: { _id: 0, allProductIds: 1 } },
      ]),
    ]);

    const allProductIds = folderProducts.length
      ? folderProducts[0].allProductIds
      : [];

    const unassignedProducts = await productSchema
      .find({
        _id: { $in: allProductIds },
        organization: orgObjectId,
      })
      .select("productName sellingPrice images stockLevel createdAt updatedAt")
      .sort({ ...sortedData, ...sortedProductData })
      .lean();
    return NextResponse.json({
      folders: subfolders,
      products: unassignedProducts,
    });
  } catch (error) {
    console.error("Error fetching subfolders:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
