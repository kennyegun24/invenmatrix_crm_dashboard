import { folders } from "@/utils/prods_data";

const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    function buildFolderStructure(folders, parentId = "") {
      // Filter folders that match the current parentId
      const result = folders
        .filter((folder) => folder.parentFolder === parentId)
        .map((folder) => {
          return {
            folderName: folder.folderName,
            id: folder.id,
            subfolders: buildFolderStructure(folders, folder.id), // Recursively find subfolders
          };
        })
        .sort((a, b) => a.folderName.localeCompare(b.folderName));

      return result;
    }
    const rootFolderStructure = buildFolderStructure(folders);
    return NextResponse.json({
      message: "Success",
      // data: JSON.stringify(rootFolderStructure, null, 2),
      data: rootFolderStructure,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
};
