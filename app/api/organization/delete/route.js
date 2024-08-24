import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import Organization from "@/models/organizationSchema";
import Folder from "@/models/folderSchema";
import Product from "@/models/fileSchema";
import { NextResponse } from "next/server";

export const DELETE = async (req, res) => {
  const { organizationId, userId } = await req.json();

  // Verify user authorization
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
          message: "User is not authorized to delete this organization",
        },
        { status: 403 }
      );
    }

    // Find and delete all products associated with the organization
    await Product.deleteMany({ organization: organizationId });

    // Delete all folders in the organization
    await Folder.deleteMany({ organization: organizationId });

    // Delete the organization itself
    await Organization.findByIdAndDelete(organizationId);

    return NextResponse.json({
      message: "Organization and all associated data deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting organization and associated data:", error);
    return NextResponse.json(
      { message: "Error deleting organization and associated data", error },
      { status: 500 }
    );
  }
};
