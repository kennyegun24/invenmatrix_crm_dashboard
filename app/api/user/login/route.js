import connectMongoDb from "@/libs/mongodb";
import userSchema from "@/models/userSchema";
import CryptoJS from "crypto-js";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req, res) => {
  const body = await req.json();
  const { password: userPassword, email } = await body;
  try {
    await connectMongoDb();
    const findUser = await userSchema.findOne({ email: email });
    if (findUser) {
      const decryptPassword = CryptoJS.AES.decrypt(
        findUser.password,
        process.env.CRYPTO_JS_SEC
      );
      const password = decryptPassword.toString(CryptoJS.enc.Utf8);
      if (password === userPassword) {
        if (!findUser?.email_confirm) {
          return NextResponse.json(
            {
              error:
                "Email not yet verified... Verification code sent to your mail!",
            },
            {
              status: 401,
            }
          );
        }
        const { password, ...others } = findUser._doc;
        const expiresIn = 3 * 24 * 60 * 60;
        const access_token = jwt.sign(
          {
            id: findUser._id,
            // is_admin: findUser.is_admin,
          },
          process.env.JWT_KEY,
          { expiresIn: "3d" }
        );
        return NextResponse.json(
          {
            ...others,
            access_token,
            expiresIn: Math.floor(Date.now() / 1000) + 60,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: "Wrong credentials" },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Account does not exist" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
};
