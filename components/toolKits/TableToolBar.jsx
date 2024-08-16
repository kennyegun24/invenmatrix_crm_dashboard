import {
  GridToolbarContainer,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  useGridApiContext,
  gridExpandedSortedRowIdsSelector,
  gridRowsLookupSelector,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa6";
import { handleDownloadPDF } from "@/helpers/downloadPDF";

const getRowsFromCurrentPage = ({ apiRef }) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const getUnfilteredRows = ({ apiRef }) => gridSortedRowIdsSelector(apiRef);

const getFilteredRows = ({ apiRef }) =>
  gridExpandedSortedRowIdsSelector(apiRef);

const getRowData = ({ apiRef, rowIds }) => {
  const allRows = gridRowsLookupSelector(apiRef);
  return rowIds.map((id) => allRows[id]);
};

const Toolbar = (props) => {
  const apiRef = useGridApiContext();
  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);
  const buttonBaseProps = {
    color: "primary",
    size: "small",
    startIcon: <FaDownload />,
  };
  const handleExportPDF = (getRowsToExport) => {
    const rowIds = getRowsToExport({ apiRef });
    const rowData = getRowData({ apiRef, rowIds });
    handleDownloadPDF(rowData);
  };
  return (
    <GridToolbarContainer {...props}>
      <Button
        {...buttonBaseProps}
        onClick={() =>
          handleExport({ getRowsToExport: getRowsFromCurrentPage })
        }
      >
        Current page rows
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getFilteredRows })}
      >
        Filtered rows
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getUnfilteredRows })}
      >
        Unfiltered rows
      </Button>
      {/* <Button onClick={() => handleDownloadPDF(props?.products)}>PDF</Button> */}
      <Button onClick={() => handleExportPDF(getFilteredRows)}>PDF</Button>
    </GridToolbarContainer>
  );
};

export default Toolbar;
