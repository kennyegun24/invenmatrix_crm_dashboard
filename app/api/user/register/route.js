import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import userSchema from "@/models/userSchema";
import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";
import crypto from "crypto";
import { sendConfirmationMailCode } from "@/libs/sendUserConfirmationEmail";

export const POST = async (req, res) => {
  const body = await req.json();
  const {
    first_name,
    last_name,
    email,
    password: user_password,
    user_name,
  } = await body;
  try {
    connectMongoDb();
    const findUser = await userSchema.findOne({ email: email });
    if (findUser) {
      return NextResponse.json(
        { error: "Email already exist" },
        { status: 401 }
      );
    }
    const findUserName = await userSchema.findOne({ user_name: user_name });
    if (findUserName) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 401 }
      );
    }
    const email_confirm_code = crypto.randomBytes(15).toString("hex");
    const newUser = new userSchema({
      first_name: first_name,
      last_name: last_name,
      password: CryptoJS.AES.encrypt(
        user_password,
        process.env.CRYPTO_JS_SEC
      ).toString(),
      email: email,
      user_name: user_name,
      email_confirm_code: email_confirm_code,
      email_confirm_expire: Date.now() + 30 * 60 * 1000,
    });
    const saveUser = await newUser.save();
    const { password, ...others } = saveUser._doc;
    // const access_token = jwt.sign(
    //   {
    //     id: saveUser._id,
    //   },
    //   process.env.JWT_KEY,
    //   { expiresIn: "3d" }
    // );
    await sendConfirmationMailCode({
      user_email: email,
      subject: "Invenmatrix email verification",
      code: email_confirm_code,
    });
    return NextResponse.json(
      // { ...others, access_token, message: "Confirmation Mail sent" },
      { message: "Confirmation Mail sent" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
