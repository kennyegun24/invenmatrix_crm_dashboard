// /*
//   CHECK IF USER IS VALID
//   CHECK IF USER HAS RIGHTS TO MODIFY ORG
//   FIND EXISTING FOLDER
//   REMOVE FOLDER ID FROM OLD PARENT FOLDER'S SUBFOLDERS (IF OLD FOLDER EXISTS)
//   REMOVE OLD PARENT FOLDER ID FROM ITS LIST OF PARENT FOLDERS (IF OLD FOLDER EXISTS)
//   PASS IN THE FOLDER ID INTO THE NEW PARENT FOLDER SUBFOLDERS
//   MODIFY THE LIST OF PARENT FOLDERS BY PUSHING THE FOLDER ID INTO IT
//   PREVENT ADDING FOLDER TO ANY FOLDER THAT IT IS A SUBFOLDER OF OR ANY FOLDER THAT HAS IT AS A SUBFOLDER
// */
// import connectMongoDb from "@/libs/mongodb";
// import {
//   checkIfUserIsValid,
//   verifyTokenAndAuthz,
// } from "@/middlewares/verifyToken";
// import folderSchema from "@/models/folderSchema";
// import Organization from "@/models/organizationSchema";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export const POST = async (req, res) => {
//   const body = await req.json();
//   const {
//     folderId,
//     folderName,
//     oldParentFolderId,
//     newParentFolderId,
//     userId,
//     organizationId,
//   } = body;
//   const verify = await verifyTokenAndAuthz(req, userId);

//   // Check if the user ID is valid
//   const check = checkIfUserIsValid(verify, userId);
//   if (check) {
//     return NextResponse.json(
//       { message: check.message },
//       { status: check.status }
//     );
//   }

//   // Connect to mongodb
//   await connectMongoDb();

//   // Initialize session for mongodb transact
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     // Check if the user is an admin in the specified organization
//     const organization = await Organization.findOne({
//       _id: organizationId,
//       users: {
//         $elemMatch: { user: userId, role: { $in: ["admin", "invited_admin"] } },
//       },
//     });

//     if (!organization) {
//       await session.abortTransaction();
//       return NextResponse.json(
//         {
//           message:
//             "User is not authorized to create folders in this organization",
//         },
//         { status: 403 }
//       );
//     }

//     // Check if a subfolder with the same name already exists in the new parent folder
//     const existingSubfolder = await folderSchema.findOne({
//       _id: newParentFolderId,
//       folderName: folderName,
//     });

//     if (existingSubfolder) {
//       await session.abortTransaction();
//       return NextResponse.json(
//         { message: "Folder name already exists in the new parent folder" },
//         { status: 400 }
//       );
//     }

//     // Get the folder that is being moved
//     const folder = await folderSchema.findById(folderId).lean();
//     if (!folder) {
//       await session.abortTransaction();
//       return NextResponse.json(
//         { message: "Folder not found" },
//         { status: 404 }
//       );
//     }

//     // Check if the new parent folder is a subfolder of the folder being moved
//     const isSubfolder = await folderSchema.findOne({
//       _id: folderId, // Check from the folder being moved
//       subfolders: { $in: [newParentFolderId] }, // Check if newParentFolderId is in its subfolders
//     });

//     if (isSubfolder) {
//       await session.abortTransaction();
//       return NextResponse.json(
//         { message: "Cannot move folder into one of its subfolders" },
//         { status: 400 }
//       );
//     }

//     // Check if the new parent folder already has the folderId as one of its subfolders
//     const parentHasFolderAsSubfolder = await folderSchema.findOne({
//       _id: newParentFolderId,
//       subfolders: { $in: [folderId] },
//     });

//     if (parentHasFolderAsSubfolder) {
//       await session.abortTransaction();
//       return NextResponse.json(
//         {
//           message:
//             "Cannot move folder into a folder that already has it as a subfolder",
//         },
//         { status: 400 }
//       );
//     }

//     const bulkOperations = [
//       {
//         // Add folderId to the new parent folder's subfolders and update the folder's parentFolders
//         updateOne: {
//           filter: { _id: newParentFolderId },
//           update: {
//             $addToSet: { subfolders: folderId }, // Add folderId to subfolders
//           },
//           upsert: false,
//           multi: false,
//         },
//       },
//       {
//         // Update the folder to add the newParentFolderId in its parentFolders and remove oldParentFolderId
//         updateOne: {
//           filter: { _id: folderId },
//           update: {
//             $pull: { parentFolders: oldParentFolderId }, // Remove oldParentFolderId from parentFolders
//           },
//           upsert: false,
//           multi: false,
//         },
//       },
//       {
//         updateOne: {
//           filter: { _id: folderId },
//           update: {
//             $addToSet: { parentFolders: newParentFolderId }, // Add newParentFolderId to parentFolders
//           },
//           upsert: false,
//           multi: false,
//         },
//       },
//     ];

//     // Only push the operation to remove folderId from old parent folder's subfolders if oldParentFolderId is not null
//     if (oldParentFolderId) {
//       bulkOperations.unshift({
//         // Remove folderId from old parent folder's subfolders
//         updateOne: {
//           filter: { _id: oldParentFolderId },
//           update: { $pull: { subfolders: folderId } },
//         },
//       });
//     }

//     // Execute the bulk operation
//     await folderSchema.bulkWrite(bulkOperations, { session });

//     // Commit the transaction
//     await session.commitTransaction();
//     session.endSession();

//     return NextResponse.json(
//       { message: "Folder moved to new folder" },
//       { status: 201 }
//     );
//   } catch (error) {
//     await session.abortTransaction(); // Roll back transaction in case of error
//     session.endSession();
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// };

import connectMongoDb from "@/libs/mongodb";
import {
  checkIfUserIsValid,
  verifyTokenAndAuthz,
} from "@/middlewares/verifyToken";
import folderSchema from "@/models/folderSchema";
import Organization from "@/models/organizationSchema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST = async (req, res) => {
  const body = await req.json();
  const {
    folderId,
    folderName,
    oldParentFolderId,
    newParentFolderId,
    userId,
    organizationId,
  } = body;

  // Verify token and check user permissions
  const verify = await verifyTokenAndAuthz(req, userId);
  const check = checkIfUserIsValid(verify, userId);
  if (check) {
    return NextResponse.json(
      { message: check.message },
      { status: check.status }
    );
  }

  // Connect to mongodb
  await connectMongoDb();

  // Start MongoDB session
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Check user role in the organization
    const organization = await Organization.findOne({
      _id: organizationId,
      users: {
        $elemMatch: { user: userId, role: { $in: ["admin", "invited_admin"] } },
      },
    });
    if (!organization) {
      await session.abortTransaction();
      return NextResponse.json({ message: "Not authorized" }, { status: 403 });
    }
    // Check if a subfolder with the same name exists or if the folder is an ancestor or descendant
    const conflictingFolder = await folderSchema.findOne({
      $or: [
        { _id: newParentFolderId, subfolders: { $in: [folderId] } }, // Check if folder is already in new parent folder
        { _id: folderId, path: { $in: [newParentFolderId] } }, // Check if new parent is an ancestor
        { _id: newParentFolderId, path: { $in: [folderId] } }, // Check if new parent is a descendant
        { _id: newParentFolderId, folderName }, // Check for duplicate folder name in new parent
      ],
    });

    if (conflictingFolder) {
      await session.abortTransaction();
      return NextResponse.json(
        { message: "Invalid folder move: conflict detected" },
        { status: 400 }
      );
    }

    // Fetch the new parent folder path
    const newParentFolder = await folderSchema
      .findById(newParentFolderId)
      .select("path");

    // Update the folder's path and move it to the new parent folder
    const updatedPath = [...newParentFolder.path, newParentFolderId];
    await folderSchema.updateOne(
      { _id: folderId },
      { $set: { path: updatedPath } },
      { session }
    );

    // Batch operation to update parent references and subfolder lists
    const bulkOperations = [
      {
        // Add folderId to the new parent folder's subfolders
        updateOne: {
          filter: { _id: newParentFolderId },
          update: { $addToSet: { subfolders: folderId } },
        },
      },
      {
        // Update the folder to remove the old parent and add the new parent
        updateOne: {
          filter: { _id: folderId },
          update: {
            $addToSet: { parentFolders: newParentFolderId },
          },
        },
      },
      {
        // Update the folder to remove the old parent and add the new parent
        updateOne: {
          filter: { _id: folderId },
          update: {
            $pull: { parentFolders: oldParentFolderId },
          },
        },
      },
    ];

    if (oldParentFolderId) {
      // Remove folderId from the old parent folder's subfolders if oldParentFolderId exists
      bulkOperations.unshift({
        updateOne: {
          filter: { _id: oldParentFolderId },
          update: { $pull: { subfolders: folderId } },
        },
      });
    }

    // Execute bulk operations
    await folderSchema.bulkWrite(bulkOperations, { session });

    // Update subfolder paths recursively using bulkWrite
    const subfolders = await folderSchema
      .find({ parentFolders: folderId })
      .select("_id path");
    const subfolderUpdates = subfolders.map((subfolder) => ({
      updateOne: {
        filter: { _id: subfolder._id },
        update: { $set: { path: [...updatedPath, subfolder._id] } },
      },
    }));

    if (subfolderUpdates.length > 0) {
      await folderSchema.bulkWrite(subfolderUpdates, { session });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return NextResponse.json(
      { message: "Folder moved successfully" },
      { status: 201 }
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error);
    return NextResponse.json(
      { message: "Error moving folder", error: error.message },
      { status: 500 }
    );
  }
};
