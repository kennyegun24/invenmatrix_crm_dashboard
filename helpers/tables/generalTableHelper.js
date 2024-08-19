import {
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  gridExpandedSortedRowIdsSelector,
  gridRowsLookupSelector,
  gridColumnDefinitionsSelector,
} from "@mui/x-data-grid";

export const getRowsFromCurrentPage = ({ apiRef }) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

export const getUnfilteredRows = ({ apiRef }) =>
  gridSortedRowIdsSelector(apiRef);

export const getFilteredRows = ({ apiRef }) =>
  gridExpandedSortedRowIdsSelector(apiRef);

export const getRowData = ({ apiRef, rowIds }) => {
  const allRows = gridRowsLookupSelector(apiRef);
  return rowIds.map((id) => allRows[id]);
};

export const getColumns = ({ apiRef }) => {
  return gridColumnDefinitionsSelector(apiRef);
};

export const mergeColumnsAndRows = (rows, columns) => {
  return rows.map((row) => {
    const mergedRow = {};
    columns.forEach((column) => {
      const fieldName = column.field;
      if (fieldName !== "images") {
        mergedRow[fieldName] = row[fieldName];
      }
    });
    return mergedRow;
  });
};
