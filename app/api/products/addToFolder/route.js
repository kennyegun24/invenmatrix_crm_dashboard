import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  // check to verify the access token is valid
  const verify = await verifyTokenAndAuthz(req);
  const body = await req.json();
  const { userId, folderId, productId } = await body;
  // check to see if user id is thesame as the id stored in the access token
  const check = checkIfUserIsValid(verify, userId);
  if (check)
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  try {
    await connectMongoDb();
    // check to see if the parent folder exists
    const findUserExistingFolder = await folderSchema.findOne({
      user: userId,
      _id: folderId,
    });
    // if it does not exist, dont save
    if (!findUserExistingFolder) {
      return NextResponse.json({
        message: "Parent folder not found amongst user other folders",
      });
    }
    // check to see if there is that poduct already exist in the folder...
    if (findUserExistingFolder?.products?.includes(productId)) {
      return NextResponse.json({ message: "Product already in folder" });
    }
    // if it does not exist in the folder, save
    await folderSchema.findByIdAndUpdate(folderId, {
      $push: { products: productId },
    });
    return NextResponse.json({ message: "Product Added" });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
