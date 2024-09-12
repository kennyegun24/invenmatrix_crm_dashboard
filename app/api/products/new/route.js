import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import productSchema from "@/models/fileSchema";
import folderSchema from "@/models/folderSchema";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  const { organizationId, products, userId, folderId } = body;
  const verify = await verifyTokenAndAuthz(req, userId);

  // Check if the user is valid
  const check = checkIfUserIsValid(verify, userId);
  if (check) {
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  }

  try {
    await connectMongoDb();

    // Check if the user is an admin in the specified organization
    const organization = await Organization.findOne({
      _id: organizationId,
      users: {
        $elemMatch: {
          user: userId,
          role: { $in: ["admin", "invited_admin"] },
        },
      },
    });

    if (!organization) {
      return NextResponse.json(
        {
          message:
            "User is not authorized to add products to this organization",
        },
        { status: 403 }
      );
    }

    // Create and save the new product
    const newProduct = new productSchema({
      organization: organizationId,
      ...products,
    });
    await newProduct.save();

    if (folderId) {
      await folderSchema.findByIdAndUpdate(
        folderId,
        {
          $push: { products: newProduct?._id },
        },
        { new: true }
      );
    }

    // Optionally, increment the product count in the organization
    await Organization.findByIdAndUpdate(
      organizationId,
      { $inc: { no_of_items: 1 } }, // Increment product count
      { new: true }
    );

    return NextResponse.json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    // console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Error creating product", error },
      { status: 500 }
    );
  }
};
