const { default: folderSchema } = require("@/models/folderSchema");

// Check if the new parent folder is part of the folder's path (i.e., an ancestor)
const isAncestor = await folderSchema.findOne({
  _id: folderId,
  path: { $in: [newParentFolderId] },
});

if (isAncestor) {
  await session.abortTransaction();
  return NextResponse.json(
    { message: "Cannot move folder into one of its ancestor folders" },
    { status: 400 }
  );
}

// Check if the folder is part of the new parent folder's path (i.e., a descendant)
const isDescendant = await folderSchema.findOne({
  _id: newParentFolderId,
  path: { $in: [folderId] },
});

if (isDescendant) {
  await session.abortTransaction();
  return NextResponse.json(
    { message: "Cannot move folder into one of its descendant folders" },
    { status: 400 }
  );
}
const newParentFolder = await folderSchema.findById(newParentFolderId);
// If passed checks, proceed with the move
// Update the folder's path to include the new parent folder's path + the new parent folder ID
await folderSchema.updateOne(
  { _id: folderId },
  {
    $set: {
      path: [...newParentFolder.path, newParentFolderId],
    },
  },
  { session }
);

// After updating the folder's path, also update the paths of its subfolders to propagate the change
export const updateSubfoldersPaths = async (folderId, newPath) => {
  try {
    const subfolders = await folderSchema.find({ parentFolders: folderId });

    for (const subfolder of subfolders) {
      const newSubfolderPath = [...newPath, subfolder._id];
      await folderSchema.updateOne(
        { _id: subfolder._id },
        { $set: { path: newSubfolderPath } },
        { session }
      );

      // Recursively update the paths of sub-subfolders
      await updateSubfoldersPaths(subfolder._id, newSubfolderPath);
    }
  } catch (error) {
    throw new Error("Error updating subfolder paths");
  }
};

// Call the function to update paths for all subfolders
await updateSubfoldersPaths(folderId, [
  ...newParentFolder.path,
  newParentFolderId,
]);
