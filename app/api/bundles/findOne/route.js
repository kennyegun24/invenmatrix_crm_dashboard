// import Bundle from "./models/bundleSchema"; // Assuming your schema is in this path

const { default: bundleSchema } = require("@/models/bundleSchema");

export const GET = async (req, res) => {
  const { body } = await req.json();
  const { bundleId } = body;
  try {
    const bundle = await bundleSchema.findById(bundleId).populate({
      path: "products.productId", // Populate the productId field
      select: "productName sellingPrice stockLevel", // Select specific fields if needed
    });
    return bundle;
  } catch (err) {
    console.error("Error fetching bundle details:", err);
    throw err;
  }
};
