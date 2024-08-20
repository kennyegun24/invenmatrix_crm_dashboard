import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  const { folderName, userId, folderId } = await body;
  await connectMongoDb();
  try {
    const findExistingUserFolder = await folderSchema.findOne({ user: userId });
    if (!findExistingUserFolder) {
      return NextResponse.json({ message: "User does not even have a folder" });
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
    const existingSubfolder = await folderSchema.findOne({
      _id: { $in: findUserExistingFolder.subfolders },
      folderName: folderName,
    });
    if (existingSubfolder) {
      return NextResponse.json({
        message: "Folder name already exists in this parent folder",
      });
    }
    const newFolder = new folderSchema({
      user: userId,
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
