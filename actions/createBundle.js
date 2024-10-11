"use server";
import { auth } from "@/auth";
import { createAxios } from "@/axios";

const BACKEND_API_ROUTE = process.env.BACKEND_API_ROUTE;
export const createBundleAction = async (details) => {
  const session = await auth();
  try {
    const token = await session?.user?.access_token;
    const id = session?.user?.id;
    const organizationId = session?.user?.organization?.value;
    const req = await createAxios(token).post(`${BACKEND_API_ROUTE}/bundles`, {
      organizationId,
      details,
    });
    const data = await req.data;
    return { success: "Success" };
  } catch (error) {
    return { error: "Something went wrong", status: 500 };
  }
};

/**
 * discountedSellingPrice
 * stockLevel
 * barcode
 * products
 */
