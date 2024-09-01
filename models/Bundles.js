const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const bundles = new Schema(
  {
    variants: {
      type: SchemaTypes.Mixed,
    },
    organization: {
      type: SchemaTypes.ObjectId,
      ref: "Organizations",
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    profitMargin: { type: Number, required: true, default: 0 },
    stockLevel: { type: Number, required: true, default: 1 },
    barcode: { type: String, required: false },
  },
  { timestamps: true }
);

const bundleSchema =
  mongoose.models.Bundle || mongoose.model("Bundle", bundles);

export default bundleSchema;
