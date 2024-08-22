import connectMongoDb from "@/libs/mongodb";
import productSchema from "@/models/fileSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  const { organizationId, products } = await body;
  try {
    await connectMongoDb();
    const newProduct = await new productSchema({
      organization: organizationId,
      ...products,
    });
    await newProduct.save();
    return NextResponse.json({ message: "CREATED" });
  } catch (error) {
    return NextResponse.json({ message: "ERROR CREATING PRODUCT", error });
  }
};
