import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import Organization from "@/models/organizationSchema";
import userSchema from "@/models/userSchema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const { userId, organizationName } = body;
  const verify = await verifyTokenAndAuthz(req, userId);
  // Check if the user is valid
  const check = checkIfUserIsValid(verify, userId);
  if (check) {
    return NextResponse.json(
      { error: check.message },
      { status: check.status }
    );
  }

  try {
    const user = await userSchema.findById(userId);

    if (user.subscription_plan === "free") {
      const existingOrganization = await Organization.findOne({
        admin: userId,
      });

      if (existingOrganization) {
        return NextResponse.json(
          { error: "Free users can only create one organization." },
          { status: 403 }
        );
      }
    }

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
    user.organizations.push({
      organization: createOrganization._id,
      role: "admin",
    });

    await createOrganization.save();
    await user.save();
    return NextResponse.json(
      {
        message: "Organization created",
        data: createOrganization,
        _id: createOrganization?._id,
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
