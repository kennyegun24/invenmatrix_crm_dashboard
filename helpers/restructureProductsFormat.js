const predefinedFields = [
  "organization",
  "images",
  "sellingPrice",
  "profitMargin",
  "stockLevel",
  "productCategory",
  "productName",
  "shippingCost",
  "shippingTime",
  "productDescription",
  "barcode",
  "supplierContact",
  "variants",
];

export const restructureProductData = (productData) => {
  const customFields = {};
  const validData = {};

  Object.keys(productData).forEach((key) => {
    if (predefinedFields.includes(key)) {
      validData[key] = productData[key]; // Keep predefined fields as they are
    } else {
      customFields[key] = productData[key]; // Move non-predefined fields to customFields
    }
  });

  return {
    ...validData,
    customFields: customFields, // Add custom fields to the final object
  };
};
