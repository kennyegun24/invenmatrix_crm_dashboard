import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import productSchema from "@/models/fileSchema";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";

export const PATCH = async (req, res) => {
  const body = await req.json();
  const { organizationId, userId, updatedProduct } = body;
  const productId = req.nextUrl.searchParams.get("productId"); // Get the productId from the URL

  // Check if the user is valid and authorized
  const verify = await verifyTokenAndAuthz(req, userId);
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
            "User is not authorized to update products in this organization",
        },
        { status: 403 }
      );
    }

    // Find and update the product
    const updated = await productSchema.findByIdAndUpdate(
      productId,
      { $set: updatedProduct },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { message: "Product not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Product updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Error updating product", error },
      { status: 500 }
    );
  }
};
