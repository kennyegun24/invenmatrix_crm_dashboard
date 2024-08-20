import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  const { userId, folderId, productId } = await body;
  try {
    await connectMongoDb();
    const findExistingUserFolder = await folderSchema.findOne({
      user: userId,
    });
    if (!findExistingUserFolder) {
      return NextResponse.json({
        message: "User does not even have a folder",
      });
    }
    const findUserExistingFolder = await folderSchema.findOne({
      user: userId,
      _id: folderId,
    });
    if (!findUserExistingFolder) {
      return NextResponse.json({
        message: "Parent folder not found amongst user other folders",
      });
    }
    if (findUserExistingFolder?.products?.includes(productId)) {
      return NextResponse.json({ message: "Product already in folder" });
    }
    await folderSchema.findByIdAndUpdate(folderId, {
      $push: { products: productId },
    });
    return NextResponse.json({ message: "Product Added" });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
