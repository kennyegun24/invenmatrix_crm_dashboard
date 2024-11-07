// import Product from "@/models/product";
import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import orderSchema from "@/models/orderSchema";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
  const body = await req.json();
  const {
    organizationId,
    totalPrice,
    totalPriceSold,
    barcode,
    products,
    userId,
  } = body;
  console.log(req.body);
  // Validation
  if (
    !organizationId ||
    !totalPrice ||
    !totalPriceSold ||
    !Array.isArray(products)
  ) {
    return NextResponse.json(
      {
        error: "Missing required fields or invalid input.",
      },
      { status: 404 }
    );
  }

  try {
    const verify = await verifyTokenAndAuthz(req, userId);
    await connectMongoDb();
    const check = checkIfUserIsValid(verify, userId);
    if (check) {
      return NextResponse.json(
        { message: check.message },
        { status: check.status }
      );
    }

    const organization = await Organization.findOne({
      _id: organizationId,
      users: {
        $elemMatch: {
          user: userId,
          role: { $in: ["admin", "invited_admin"] },
        },
      },
    });

    if (!organization) {
      return NextResponse.json(
        {
          error:
            "User is not authorized to create folders in this organization",
        },
        { status: 403 }
      );
    }
    const profitMargin = ((totalPriceSold - totalPrice) / totalPrice) * 100;

    // Create a new order instance using the Product schema
    const newOrder = new orderSchema({
      organization,
      totalPrice,
      totalPriceSold,
      profitMargin,
      barcode,
      products,
    });

    // Save the new order to the database
    await newOrder.save();

    // Send success response
    return NextResponse.json(
      {
        message: "Order created successfully",
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
