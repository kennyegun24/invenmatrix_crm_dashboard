const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const bundles = new Schema(
  {
    variants: {
      type: SchemaTypes.Mixed,
    },
    organization: {
      type: SchemaTypes.ObjectId,
      ref: "Organization",
      required: true,
    },
    discountedSellingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    stockLevel: { type: Number, required: true, default: 1 },
    barcode: { type: String, required: false },
    products: [
      {
        productsId: {
          type: SchemaTypes.ObjectId,
          required: true,
          ref: "Product",
        },
        discountedPrice: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const bundleSchema =
  mongoose.models.Bundle || mongoose.model("Bundle", bundles);

export default bundleSchema;
