const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const folder = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    folderName: {
      type: String,
      required: true,
    },
    products: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Product",
      },
    ],
    subfolders: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Folder",
      },
    ],
    parentFolders: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Folder",
        default: null,
      },
    ],
  },
  { timestamps: true }
);

const folderSchema =
  mongoose.models.Folders || mongoose.model("Folders", folder);

export default folderSchema;
