const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const orders = new Schema(
  {
    organization: {
      type: SchemaTypes.ObjectId,
      ref: "Organizations",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPriceSold: {
      type: Number,
      required: true,
      default: 0,
    },
    profitMargin: { type: Number, required: true, default: 0 },
    barcode: { type: String, required: false, default: 0 },
    products: { type: [Schema.ObjectId] },
  },
  { timestamps: true, strict: false }
);

// const productSchema =
//   mongoose.models.Product || mongoose.model("Product", products);
const orderSchema = mongoose.models.Order || mongoose.model("Order", orders);

export default orderSchema;
