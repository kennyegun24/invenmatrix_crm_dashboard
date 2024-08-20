const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const products = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    sellingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    profitMargin: { type: Number, required: true, default: 0 },
    stockLevel: { type: Number, required: true, default: 1 },
    productCategory: {
      type: [String],
      required: true,
      default: [],
    },
    productName: { type: String, required: true, default: 0 },
    shippingCost: { type: Number, required: false, default: 0 },
    shippingTime: { type: String, required: false, default: 0 },
    productDescription: { type: String, required: true, default: 0 },
    barcode: { type: String, required: false, default: 0 },
    supplierContact: { type: String, required: false, default: 0 },
    variants: [
      {
        variantName: {
          type: String,
          required: true,
        },
        additionalPrice: {
          type: Number,
          required: true,
          default: 0,
        },
        variantType: {
          type: String,
          default: "text",
        },
        stock: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const productSchema =
  mongoose.models.Products || mongoose.model("Products", products);

export default productSchema;
