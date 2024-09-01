import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import Organization from "@/models/organizationSchema";
import Folder from "@/models/folderSchema";
import Product from "@/models/fileSchema";
import { NextResponse } from "next/server";
import { checkUserRoleInOrganization } from "@/libs/cache/userRoleInOrg";

export const DELETE = async (req) => {
  try {
    // Parse request body for necessary parameters
    const { organizationId, userId } = await req.json();

    // Verify the access token and user authorization
    const verify = await verifyTokenAndAuthz(req, userId);
    const check = checkIfUserIsValid(verify, userId);

    if (check) {
      return NextResponse.json(
        { message: check.message },
        { status: check.status }
      );
    }

    // Connect to MongoDB
    await connectMongoDb();

    // const organization = await Organization.findOneAndDelete({
    //   _id: organizationId,
    //   users: {
    //     $elemMatch: {
    //       user: userId,
    //       role: { $in: ["admin", "invited_admin"] },
    //     },
    //   },
    // });
    // Check if the user is authorized (admin or invited_admin) in a single query
    const organization = await checkUserRoleInOrganization(
      organizationId,
      userId
    );

    if (!organization) {
      return NextResponse.json(
        { message: "User is not authorized to delete this organization" },
        { status: 403 }
      );
    }

    // Delete all associated folders and products using bulk operations
    const [deletedProducts, deletedFolders] = await Promise.all([
      Product.deleteMany({ organization: organizationId }),
      Folder.deleteMany({ organization: organizationId }),
    ]);

    return NextResponse.json(
      {
        message: "Organization and all associated data deleted successfully",
        deletedProducts: deletedProducts.deletedCount,
        deletedFolders: deletedFolders.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting organization and associated data:", error);
    return NextResponse.json(
      { message: "Error deleting organization and associated data", error },
      { status: 500 }
    );
  }
};
