import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import productSchema from "@/models/fileSchema";

const {
  Types: { ObjectId },
} = mongoose;

export const GET = async (req) => {
  const folderId = req.nextUrl.searchParams.get("folderId");
  const orgId = req.nextUrl.searchParams.get("organizationId");

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

    const [subfolders, folderProducts] = await Promise.all([
      folderSchema
        .find({
          organization: orgObjectId,
          parentFolders: { $elemMatch: { $eq: folderObjectId } },
        })
        .select("folderName products subfolders createdAt updatedAt")
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
