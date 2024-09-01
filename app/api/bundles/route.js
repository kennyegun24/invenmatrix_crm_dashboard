// const { default: bundleSchema } = require("@/models/Bundles");
import bundleSchema from "@/models/Bundles";
// const { NextResponse } = require("next/server");
import { NextResponse } from "next/server";

export const POST = async (res) => {
  try {
    const body = await res.json();
    const { organizationId, userId, details } = body;
    const store = await new bundleSchema({
      organization: organizationId,
      ...details,
    });
    const saveBundle = await store.save();
    return NextResponse.json({ data: saveBundle });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
