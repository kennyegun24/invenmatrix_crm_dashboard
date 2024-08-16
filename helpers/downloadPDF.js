import jsPDF from "jspdf";
import "jspdf-autotable";
import dayjs from "dayjs";

export const handleDownloadPDF = (filteredData) => {
  const doc = new jsPDF();
  const businessName = "Your Business Name";
  const dateGenerated = dayjs().format("MMMM D, YYYY");
  const subheading = "Product Summary";

  doc.setFontSize(18);
  doc.text(
    `All ${businessName} Products`,
    doc.internal.pageSize.getWidth() / 2,
    20,
    { align: "center" }
  );

  doc.setFontSize(14);
  doc.text(subheading, doc.internal.pageSize.getWidth() / 2, 30, {
    align: "center",
  });

  doc.setFontSize(10);
  doc.text(
    `Date Generated: ${dateGenerated}`,
    doc.internal.pageSize.getWidth() - 20,
    40,
    { align: "right" }
  );

  doc.autoTable({
    head: [
      [
        "Product Name",
        "Category",
        "Stock Level",
        "Profit Margin",
        "Selling Price",
        "Shipping Cost",
        "Barcode",
      ],
    ],
    body: filteredData.map((item) => [
      item.productName,
      item.productCategory,
      item.stockLevel,
      item.profitMargin,
      item.sellingPrice,
      item.shippingCost,
      item.barcode,
    ]),
    startY: 50,
  });

  // const chartImgData = "data:image/png;base64, ...";
  // doc.addImage(
  //   chartImgData,
  //   "PNG",
  //   15,
  //   doc.autoTable.previous.finalY + 10,
  //   180,
  //   80
  // );

  doc.save("Products.pdf");
};
