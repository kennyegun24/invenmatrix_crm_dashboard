//   const orgId = req.nextUrl.searchParams.get("organizationId");
//     // Fetch all root folders (folders without parent folders)
//     const rootFolders = await folderSchema
//       .find({
//         organization: orgId,
//         parentFolders: { $size: 0 }, // No parent folder, indicating root
//       })
//       .select("folderName subfolders")
//       .populate({
//         path: "subfolders",
//         select: "folderName subfolders", // Selecting subfolder name and nested subfolders
//         populate: {
//           path: "subfolders", // Recursively populate subfolders
//           select: "folderName subfolders",
//           populate: {
//             path: "subfolders", // Continue recursion for deeper levels
//             select: "folderName subfolders",
//             populate: {
//               path: "subfolders", // Continue recursion for deeper levels
//               select: "folderName subfolders",
//               populate: {
//                 path: "subfolders", // Continue recursion for deeper levels
//                 select: "folderName subfolders",
//                 populate: {
//                   path: "subfolders", // Continue recursion for deeper levels
//                   select: "folderName subfolders",
//                   populate: {
//                     path: "subfolders", // Continue recursion for deeper levels
//                     select: "folderName subfolders",
//                     populate: {
//                       path: "subfolders", // Continue recursion for deeper levels
//                       select: "folderName subfolders",
//                       populate: {
//                         path: "subfolders", // Continue recursion for deeper levels
//                         select: "folderName subfolders",
//                         populate: {
//                           path: "subfolders", // Continue recursion for deeper levels
//                           select: "folderName subfolders",
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       })
//       .lean();

import connectMongoDb from "@/libs/mongodb";
import folderSchema from "@/models/folderSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const structureFolders = (
  folders,
  parentFolderId = "",
  visited = new Set()
) => {
  // If the current parentFolderId has already been visited, return an empty array to avoid infinite loops
  if (visited.has(parentFolderId)) {
    return [];
  }

  // Add the current parentFolderId to the visited set
  visited.add(parentFolderId);

  const newFolders = folders
    .filter((folder) => {
      // For root folders, the parentFolders array is empty.
      if (parentFolderId === "") {
        return folder.parentFolders.length === 0;
      }
      // For subfolders, check if the parentFolderId is in the parentFolders array.
      return folder.parentFolders
        .map((e) => e.toString())
        .includes(parentFolderId);
    })
    .map((e) => {
      return {
        folderName: e.folderName,
        _id: e._id,
        subfolders: structureFolders(folders, e._id.toString(), visited), // Pass the visited set to track circular references
      };
    });

  // Remove the current folder from the visited set once processing is done
  visited.delete(parentFolderId);

  return newFolders;
};

export const GET = async (req, res) => {
  const orgId = req.nextUrl.searchParams.get("organizationId");
  const objectOrg = new mongoose.Types.ObjectId(orgId);
  try {
    await connectMongoDb();
    const rootFolders = await folderSchema.aggregate([
      {
        $match: {
          organization: objectOrg,
          // parentFolders: { $size: 0 }, // Fetch only root folders
        },
      },
      // {
      //   $graphLookup: {
      //     from: "folders",
      //     startWith: "$_id", // Start the recursive lookup from root folder ID
      //     connectFromField: "_id", // Connect using the folder ID
      //     connectToField: "parentFolders", // Match subfolders by parentFolder field
      //     as: "subfolders",
      //     depthField: "depth",
      //   },
      // },
      // {
      //   $addFields: {
      //     subfolders: {
      //       $map: {
      //         input: "$subfolders",
      //         as: "subfolder",
      //         in: {
      //           _id: "$$subfolder._id",
      //           folderName: "$$subfolder.folderName",
      //           subfolders: "$$subfolder.subfolders",
      //           parentFolders: "$$subfolder.parentFolders",
      //         },
      //       },
      //     },
      //   },
      // },
    ]);
    const structuredFolders = structureFolders(rootFolders);
    return NextResponse.json({ data: structuredFolders });
  } catch (error) {
    console.error("Error fetching folders with subfolders:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
