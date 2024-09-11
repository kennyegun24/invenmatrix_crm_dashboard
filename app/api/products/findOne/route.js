import productSchema from "@/models/fileSchema";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const productId = await req?.nextUrl?.searchParams?.get("productId");
  // console.log(productId);
  try {
    const product = await productSchema.findById(productId);
    console.log(product);
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
