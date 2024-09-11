import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import folderSchema from "@/models/folderSchema";
import Organization from "@/models/organizationSchema"; // Import the Organization model
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  // Connect to MongoDB
  await connectMongoDb();

  try {
    // Verify the access token is valid
    const body = await req.json();
    const { folderName, organizationId, userId } = body;
    const verify = await verifyTokenAndAuthz(req, userId);
    const header = req.headers?.get("authorization");
    console.log(header);
    console.log(body);

    // Check if the user is valid
    const check = checkIfUserIsValid(verify, userId);
    if (check) {
      return NextResponse.json(
        { message: check.message },
        { status: check.status }
      );
    }

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
          error:
            "User is not authorized to create folders in this organization",
        },
        { status: 403 }
      );
    }

    // Check if a folder with the same name exists in the organization
    const findExistingFolder = await folderSchema.findOne({
      organization: organizationId,
      folderName: folderName,
      parentFolders: { $size: 0 }, // Ensure it's a parent folder
    });

    if (findExistingFolder) {
      return NextResponse.json(
        { error: "Folder name already exists" },
        { status: 400 }
      );
    }
    // Create and save a new folder if it does not exist
    const newFolder = new folderSchema({
      organization: organizationId,
      folderName: folderName,
    });
    await newFolder.save();
    const updateOrganization = await Organization.findByIdAndUpdate(
      organizationId,
      { $inc: { no_of_folders: 1 } },
      { new: true }
    );
    return NextResponse.json(
      {
        message: "Folder Created",
        data: updateOrganization,
        _id: newFolder._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
