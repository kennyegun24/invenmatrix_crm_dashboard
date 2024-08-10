import {
  GridToolbarContainer,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  useGridApiContext,
  gridExpandedSortedRowIdsSelector,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa6";
import jsPDF from "jspdf";

const getRowsFromCurrentPage = ({ apiRef }) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const getUnfilteredRows = ({ apiRef }) => gridSortedRowIdsSelector(apiRef);

const getFilteredRows = ({ apiRef }) =>
  gridExpandedSortedRowIdsSelector(apiRef);

const Toolbar = (props) => {
  const apiRef = useGridApiContext();
  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);
  const getRowData = (rowIds) => {
    return rowIds.map((id) => apiRef.current.getRow(id));
  };
  const exportToPDF = () => {
    // const rowIds = getFilteredRows({ apiRef });
    // const tableRows = getRowData(rowIds);

    // const tableColumn = columns.map((col) => col.headerName);
    // const tableData = tableRows.map((row) =>
    //   columns.map((col) => row[col.field])
    // );

    // const doc = new jsPDF();

    // // Add title
    // doc.setFontSize(18);
    // doc.text("Executive Summary", 14, 22);

    // // Add date
    // const date = new Date();
    // doc.setFontSize(11);
    // doc.text(`Report generated on: ${date.toLocaleDateString()}`, 14, 30);

    // // Add table
    // doc.autoTable({
    //   head: [tableColumn],
    //   body: tableData,
    //   startY: 40,
    // });

    // doc.save("executive-summary.pdf");
    console.log(props);
  };

  const buttonBaseProps = {
    color: "primary",
    size: "small",
    startIcon: <FaDownload />,
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
      {/* <Button {...buttonBaseProps} onClick={exportToPDF}>
        Export as PDF
      </Button> */}
    </GridToolbarContainer>
  );
};

export default Toolbar;
