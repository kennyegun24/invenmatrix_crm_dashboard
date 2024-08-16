import jsPDF from "jspdf";
import "jspdf-autotable";

export const handleDownloadPDF = (products) => {
  const doc = new jsPDF();

  // Add the big text at the top
  const businessName = "Blah Blah"; // Replace with your actual business name
  doc.setFontSize(14); // Set font size for the big text
  const titleText = `All ${businessName} Products`;
  doc.setFontSize(22); // Set font size for the big text
  // Calculate the center position
  const pageWidth = doc.internal.pageSize.getWidth();
  const textWidth = doc.getTextWidth(titleText);
  const textX = (pageWidth - textWidth) / 2;
  doc.text(titleText, textX, 20); // Centered text
  doc.setFontSize("8px");

  const tableColumn = [
    "Product Name",
    "Product Category",
    "Stock Level",
    "Profit Margin",
    "Selling Price",
    "Shipping Cost",
    "Barcode",
  ];

  const tableRows = products?.map((product) => [
    product.productName,
    product.productCategory,
    product.stockLevel,
    `${product.profitMargin}%`,
    `$${product.sellingPrice}`,
    `$${product.shippingCost}`,
    product.barcode,
  ]);

  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 40, // Start table below the title text
  });

  doc.save("products.pdf");
};
