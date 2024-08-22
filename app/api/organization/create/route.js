import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import Organization from "@/models/organizationSchema";
import userSchema from "@/models/userSchema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const verify = await verifyTokenAndAuthz(req);
  const body = await req.json();
  const { userId, organizationName } = body;

  // Check if the user is valid
  const check = checkIfUserIsValid(verify, userId);
  if (check) {
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  }

  try {
    const user = await userSchema.findById(userId);

    // Check if the user is a free user
    if (user.subscription_plan === "free") {
      // Check if the user has already created an organization
      const existingOrganization = await Organization.findOne({
        admin: userId,
      });

      if (existingOrganization) {
        return NextResponse.json(
          { message: "Free users can only create one organization." },
          { status: 403 }
        );
      }
    }

    // Create a new organization with the user as the admin
    const createOrganization = new Organization({
      name: organizationName,
      admin: userId,
      users: [
        {
          role: "admin",
          user: userId,
        },
      ],
    });
    await createOrganization.save();
    return NextResponse.json(
      { message: "Organization created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
