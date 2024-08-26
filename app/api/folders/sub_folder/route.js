import { folders, products } from "@/utils/prods_data";
const { NextResponse } = require("next/server");

export const dynamic = "force-dynamic";

export const GET = async (request) => {
  try {
    const folderId = request.nextUrl.searchParams.get("id");

    if (!folderId) {
      return NextResponse.json({ message: "Folder ID is required" });
    }

    let folder = folders.find((folder) => folder.id === folderId);
    let subFolders = [];
    let items = [];
    if (!folder) return null;

    if (folder.subFolder?.length > 0) {
      subFolders = folders.filter((fol) => folder.subFolder.includes(fol.id));
    }

    if (folder.products?.length > 0) {
      items = products.filter((fol) => folder.products.includes(fol.id));
    }
    return NextResponse.json({
      message: "Success",
      folders: JSON.stringify(subFolders),
      items: JSON.stringify(items),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error: error.message });
  }
};
