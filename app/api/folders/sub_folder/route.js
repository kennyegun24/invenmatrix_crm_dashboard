import { folders, products } from "@/utils/prods_data";

const { NextResponse } = require("next/server");

export const GET = async (request) => {
  try {
    const folderId = request.nextUrl.searchParams.get("id");

    const getFolderContents = (folderId) => {
      const folder = folders.find((folder) => folder.id === folderId);
      if (!folder) return null;

      const { products: folderProducts, subFolder } = folder;

      const subfolders = folders
        .filter((sub) => subFolder.includes(sub.id))
        .map((sub) => getFolderContents(sub.id));

      const subfolderProductIds = subfolders.flatMap((sub) =>
        sub.products.map((prod) => prod.id)
      );
      const uniqueProductIds = folderProducts.filter(
        (productId) => !subfolderProductIds.includes(productId)
      );

      const productDetails = getProductDetailsByIds(uniqueProductIds);

      return { ...folder, products: productDetails, subfolders };
    };

    const getProductDetailsByIds = (productIds) => {
      return products.filter((product) => productIds.includes(product.id));
    };

    if (!folderId) {
      return NextResponse.json({ message: "Folder ID is required" });
    }

    const folderContents = getFolderContents(folderId);

    return NextResponse.json({
      message: "Success",
      data: folderContents,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
};
