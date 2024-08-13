import { folders, products } from "@/utils/prods_data";

const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const rootFolders = folders.filter((folder) => folder.parentFolder === "");

    const productsWithoutFolder = products.filter((product) => {
      return !folders.some((folder) => folder.products.includes(product.id));
    });

    return NextResponse.json({
      message: "Success",
      folders: JSON.stringify(rootFolders),
      items: JSON.stringify(productsWithoutFolder),
    });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
};
