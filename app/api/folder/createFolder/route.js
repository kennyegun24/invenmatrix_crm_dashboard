import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  const { folderName, userId } = await body;
  await connectMongoDb();
  try {
    const findExistingUserFolder = await folderSchema.findOne({ user: userId });
    if (findExistingUserFolder) {
      const checkFolder = await folderSchema.findOne({
        folderName: folderName,
        user: userId,
      });
      if (checkFolder) {
        return NextResponse.json({ message: "Folder name already exist" });
      } else {
        const newFolder = await new folderSchema({
          user: userId,
          folderName: folderName,
        });
        await newFolder.save();
        return NextResponse.json({ message: "Folder Created" });
      }
    } else {
      const newFolder = await new folderSchema({
        user: userId,
        folderName: folderName,
      });
      await newFolder.save();
      return NextResponse.json({ message: "Folder Created" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
