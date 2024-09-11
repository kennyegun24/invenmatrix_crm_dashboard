import connectMongoDb from "@/libs/mongodb";
import Organization from "@/models/organizationSchema";
import userSchema from "@/models/userSchema";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const user_id = req.nextUrl.searchParams.get("user_id");
  try {
    await connectMongoDb();
    const user = await userSchema.findById(user_id).populate({
      path: "organizations.organization",
      model: Organization,
      select: "name",
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const organizationNames = user.organizations.map((org) => ({
      name: org.organization.name,
      role: org.role,
      _id: org.organization._id,
    }));

    return NextResponse.json(organizationNames);
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
