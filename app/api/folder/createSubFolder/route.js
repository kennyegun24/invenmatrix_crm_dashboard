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
  const { folderName, folderId, userId } = await body;
  // check to see if user id is thesame as the id stored in the access token
  const check = checkIfUserIsValid(verify, userId);
  if (check)
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  await connectMongoDb();
  try {
    // check if user have a parent folder with the id
    const findUserExistingFolder = await folderSchema.findOne({
      user: verify?.id,
      _id: folderId,
    });
    // if user does not have, dont save
    if (!findUserExistingFolder) {
      return NextResponse.json({
        message: "Parent folder not found amongst user other folders",
      });
    }
    // if user have it, check if folder name already exist in parent folder
    const existingSubfolder = await folderSchema.findOne({
      _id: { $in: findUserExistingFolder.subfolders },
      folderName: folderName,
    });
    // if it does, dont save
    if (existingSubfolder) {
      return NextResponse.json({
        message: "Folder name already exists in this parent folder",
      });
    }
    // if it does not, save
    const newFolder = new folderSchema({
      user: verify?.id,
      folderName: folderName,
      parentFolders: [folderId],
    });
    await newFolder.save();
    await folderSchema.findByIdAndUpdate(folderId, {
      $push: { subfolders: newFolder._id },
    });
    return NextResponse.json({ message: "Folder Created" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
