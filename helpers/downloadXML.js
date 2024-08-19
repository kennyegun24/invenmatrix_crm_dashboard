import {
  getColumns,
  getRowData,
  mergeColumnsAndRows,
} from "./tables/generalTableHelper";

import X2JS from "x2js";
import vkbeautify from "vkbeautify";

export const handleExportXML = (apiRef, getRowsToExport) => {
  const rowIds = getRowsToExport({ apiRef });
  const rowData = getRowData({ apiRef, rowIds });
  const columns = getColumns({ apiRef });
  const mergedData = mergeColumnsAndRows(rowData, columns);
  // console.log(JSON.stringify(mergedData));
  var x2js = new X2JS();
  var doc = x2js.js2xml(mergedData);
  const xml = vkbeautify.xml(doc);
  const str_data = "data:text/xml,charset=utf-8" + encodeURIComponent(xml);
  const a = document.createElement("a");
  a.href = str_data;
  a.download = "data.xml";
  document.body.appendChild(a);
  a.click();
  a.remove();
  // console.log(xml);
};
