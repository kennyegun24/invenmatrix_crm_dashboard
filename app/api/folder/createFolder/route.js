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
  const { folderName, userId } = await body;
  // check to see if user id is thesame as the id stored in the access token
  const check = checkIfUserIsValid(verify, userId);
  if (check)
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  await connectMongoDb();
  try {
    // check to see if user has the folder name existing already... and to check only parent folders
    const findExistingUserFolder = await folderSchema.findOne({
      user: userId,
      folderName: folderName,
      parentFolders: { $size: false },
    });
    // if a folder with thesame name exists, don't save
    if (findExistingUserFolder) {
      return NextResponse.json({ message: "Folder name already exists" });
    } else {
      // if a folder with thesame name does not exist, save
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
