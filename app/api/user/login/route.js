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
        const { password, ...others } = findUser._doc;
        const access_token = jwt.sign(
          {
            id: findUser._id,
            is_admin: findUser.is_admin,
          },
          process.env.JWT_KEY,
          { expiresIn: "3d" }
        );
        return NextResponse.json({ ...others, access_token });
      } else {
        return NextResponse.json("Wrong creadentials");
      }
    } else {
      return NextResponse.json("Account does not exist");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
