import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";

export const PATCH = async (req, res) => {
  try {
    const {
      organizationId,
      userId,
      targetUserIdsToRemove,
      usersToAdd,
      ...otherFields
    } = await req.json();

    // Verify the access token and user authorization
    const verify = await verifyTokenAndAuthz(req, userId);

    // Check if the user is valid
    const check = checkIfUserIsValid(verify, userId);
    if (check) {
      return NextResponse.json(
        { message: check.message },
        { status: check.status }
      );
    }

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
          message: "User is not authorized to modify this organization",
        },
        { status: 403 }
      );
    }

    let updateOps = { ...otherFields };

    // Add users to the organization if usersToAdd is provided
    if (usersToAdd && usersToAdd.length > 0) {
      updateOps.$addToSet = {
        users: { $each: usersToAdd },
      };
    }

    // Remove users from the organization if targetUserIdsToRemove is provided
    if (targetUserIdsToRemove && targetUserIdsToRemove.length > 0) {
      updateOps.$pull = {
        users: { user: { $in: targetUserIdsToRemove } },
      };
    }

    // Perform the update
    const updatedOrganization = await Organization.findByIdAndUpdate(
      organizationId,
      updateOps,
      { new: true }
    );

    if (!updatedOrganization) {
      return NextResponse.json(
        { message: "Organization not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Organization updated successfully",
      data: updatedOrganization,
    });
  } catch (error) {
    console.error("Error updating organization:", error);
    return NextResponse.json(
      { message: "Error updating organization", error },
      { status: 500 }
    );
  }
};
