import jsPDF from "jspdf";
import "jspdf-autotable";
import dayjs from "dayjs";
import { getRowData } from "./tables/generalTableHelper";

export const handleExportPDF = (apiRef, getRowsToExport) => {
  const visibleColumns = apiRef.current.getVisibleColumns();
  const rowIds = getRowsToExport({ apiRef });
  const rowData = getRowData({ apiRef, rowIds });
  handleDownloadPDF(visibleColumns, rowData);
};

export const handleDownloadPDF = (getColumns, filteredData) => {
  const doc = new jsPDF();
  const businessName = "Your Business Name";
  const dateGenerated = dayjs().format("MMMM D, YYYY");
  const subheading = "Product Summary";
  console.log(getColumns);
  const cols = getColumns
    ?.map((e) => e.headerName)
    ?.filter((e) => e !== "Images");
  const getColsField = getColumns
    ?.map((e) => e.field)
    ?.filter((e) => e !== "images");
  const tableFields = filteredData.map((row) =>
    getColsField.map((col) => row[col])
  );
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
    head: [cols],
    body: tableFields,
    startY: 50,
    headStyles: {
      fontSize: 8, // Font size for header cells
      width: 100,
    },
    styles: {
      fontSize: 8, // Font size for body cells
    },
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
