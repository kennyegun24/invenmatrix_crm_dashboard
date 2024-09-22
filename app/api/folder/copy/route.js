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
  const { folderId, folderName, newParentFolderId, userId, organizationId } =
    body;

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
    ];

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
      { message: "Folder copied successfully" },
      { status: 201 }
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return NextResponse.json(
      { message: "Error moving folder", error: error.message },
      { status: 500 }
    );
  }
};
