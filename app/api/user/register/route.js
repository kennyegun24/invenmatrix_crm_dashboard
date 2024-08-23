import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import userSchema from "@/models/userSchema";
import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";

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
      return NextResponse.json({ message: "Email already exist" });
    } else {
      const newUser = new userSchema({
        first_name: first_name,
        last_name: last_name,
        password: CryptoJS.AES.encrypt(
          user_password,
          process.env.CRYPTO_JS_SEC
        ).toString(),
        email: email,
        user_name: user_name,
      });
      const saveUser = await newUser.save();
      const { password, ...others } = saveUser._doc;
      const access_token = jwt.sign(
        {
          id: saveUser._id,
          // user_name: saveUser.user_name,
        },
        process.env.JWT_KEY,
        { expiresIn: "3d" }
      );
      return NextResponse.json({ ...others, access_token });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
