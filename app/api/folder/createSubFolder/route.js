import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import folderSchema from "@/models/folderSchema";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  // Verify the access token is valid
  const body = await req.json();
  const { folderName, folderId, userId, organizationId } = body;
  const verify = await verifyTokenAndAuthz(req, userId);

  // Check if the user ID is valid
  const check = checkIfUserIsValid(verify, userId);
  if (check) {
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  }

  // Connect to MongoDB
  await connectMongoDb();

  try {
    // Check if the user is an admin in the specified organization
    const organization = await Organization.findOne({
      _id: organizationId,
      users: {
        $elemMatch: { user: userId, role: { $in: ["admin", "invited_admin"] } },
      },
    });

    if (!organization) {
      return NextResponse.json(
        {
          message:
            "User is not authorized to create folders in this organization",
        },
        { status: 403 }
      );
    }

    // Check if the parent folder exists in the organization
    const findUserExistingFolder = await folderSchema.findOne({
      organization: organizationId,
      _id: folderId,
    });

    if (!findUserExistingFolder) {
      return NextResponse.json(
        {
          message: "Parent folder not found",
        },
        { status: 404 }
      );
    }

    // Check if a subfolder with the same name already exists in the parent folder
    const existingSubfolder = await folderSchema.findOne({
      _id: { $in: findUserExistingFolder.subfolders },
      folderName: folderName,
    });

    if (existingSubfolder) {
      return NextResponse.json(
        {
          message: "Folder name already exists in this parent folder",
        },
        { status: 400 }
      );
    }

    // Create and save the new subfolder
    const newFolder = new folderSchema({
      organization: organizationId,
      folderName: folderName,
      parentFolders: [folderId],
    });
    await newFolder.save();

    // Update the parent folder to include the new subfolder
    await folderSchema.findByIdAndUpdate(folderId, {
      $push: { subfolders: newFolder._id },
    });

    return NextResponse.json({ message: "Subfolder Created" }, { status: 201 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
