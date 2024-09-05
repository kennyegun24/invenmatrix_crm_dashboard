import userSchema from "@/models/userSchema";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const verification_code = await req?.nextUrl?.searchParams?.get(
    "verification_id"
  );
  if (!verification_code) {
    console.log("first");
    return NextResponse.json(
      {
        error:
          "Verification code not present in request or something went wrong",
      },
      { status: 401 }
    );
  }
  try {
    const getUser = await userSchema.findOne({
      email_confirm_code: verification_code,
    });
    if (!getUser) {
      return NextResponse.json(
        { error: "You sent an invalid verification code" },
        { status: 401 }
      );
    }

    const expireTime = await getUser.email_confirm_expire;
    if (Date.now() > expireTime) {
      return NextResponse.json(
        { error: "Verification link expired. Request another" },
        { status: 401 }
      );
    }
    await userSchema.findOneAndUpdate(
      {
        email_confirm_code: verification_code,
      },
      {
        email_confirm_code: null,
        email_confirm: new Date(),
        email_confirm_expire: null,
      }
    );

    return NextResponse.json({ message: "Email verified" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
