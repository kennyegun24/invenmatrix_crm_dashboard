import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import productSchema from "@/models/fileSchema";
import folderSchema from "@/models/folderSchema";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";

export const DELETE = async (req, res) => {
  const searchParams = req.nextUrl.searchParams; // Get the productId from the URL
  const productId = searchParams.get("productId");
  const { organizationId, userId } = await req.json();
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
            "User is not authorized to delete products in this organization",
        },
        { status: 403 }
      );
    }

    // Find and delete the product
    const product = await productSchema.findById(productId);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Delete the product
    await productSchema.findByIdAndDelete(productId);

    // Remove the product ID from all folders that it belongs to
    await folderSchema.updateMany(
      { products: productId },
      { $pull: { products: productId } }
    );

    // Optionally, decrement tkhe product count in the organization
    await Organization.findByIdAndUpdate(
      organizationId,
      { $inc: { no_of_items: -1 } }, // Decrement product count
      { new: true }
    );

    return NextResponse.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Error deleting product", error },
      { status: 500 }
    );
  }
};
