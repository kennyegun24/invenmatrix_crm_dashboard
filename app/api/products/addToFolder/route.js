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
  const { userId, folderId, productId, organizationId } = body;
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
            "User is not authorized to move products in this organization",
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

    // Check if the product is already in the folder
    if (findUserExistingFolder.products.includes(productId)) {
      return NextResponse.json(
        {
          message: "Product is already in the folder",
        },
        { status: 400 }
      );
    }

    // Add the product to the folder
    await folderSchema.findByIdAndUpdate(folderId, {
      $push: { products: productId },
    });

    return NextResponse.json(
      { message: "Product added to folder" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
