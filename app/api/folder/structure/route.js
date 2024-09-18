import folderSchema from "@/models/folderSchema";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const orgId = req.nextUrl.searchParams.get("organizationId");
  try {
    // Fetch all root folders (folders without parent folders)
    const rootFolders = await folderSchema
      .find({
        organization: orgId,
        parentFolders: { $size: 0 }, // No parent folder, indicating root
      })
      .select("folderName subfolders")
      .populate({
        path: "subfolders",
        select: "folderName subfolders", // Selecting subfolder name and nested subfolders
        populate: {
          path: "subfolders", // Recursively populate subfolders
          select: "folderName subfolders",
        },
      })
      .lean();

    return NextResponse.json({ data: rootFolders });
  } catch (error) {
    console.error("Error fetching folders with subfolders:", error);
    // throw error;
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
