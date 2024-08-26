import {
  getColumns,
  getRowData,
  mergeColumnsAndRows,
} from "./tables/generalTableHelper";

export const handleExportJSON = (apiRef, getRowsToExport) => {
  const rowIds = getRowsToExport({ apiRef });
  const rowData = getRowData({ apiRef, rowIds });
  const visibleColumns = apiRef.current.getVisibleColumns();
  const mergedData = mergeColumnsAndRows(rowData, visibleColumns);

  downloadJson(mergedData);
};

export const downloadJson = (arr) => {
  const json = JSON.stringify(arr, null, 2).replace(/"([^"]+)":/g, "$1:");
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
