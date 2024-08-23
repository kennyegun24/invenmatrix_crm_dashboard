const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const folder = new Schema(
  {
    organization: {
      type: SchemaTypes.ObjectId,
      ref: "Organization",
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

const folderSchema = mongoose.models.Folder || mongoose.model("Folder", folder);

export default folderSchema;
