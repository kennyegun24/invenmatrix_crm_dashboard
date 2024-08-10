import {
  DataGrid,
  GridToolbarContainer,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  useGridApiContext,
  gridExpandedSortedRowIdsSelector,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa6";

const getRowsFromCurrentPage = ({ apiRef }) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const getUnfilteredRows = ({ apiRef }) => gridSortedRowIdsSelector(apiRef);

const getFilteredRows = ({ apiRef }) =>
  gridExpandedSortedRowIdsSelector(apiRef);

const Toolbar = () => {
  const apiRef = useGridApiContext();
  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);
  const buttonBaseProps = {
    color: "primary",
    size: "small",
    startIcon: <FaDownload />,
  };
  return (
    <GridToolbarContainer>
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
    </GridToolbarContainer>
  );
};

export default Toolbar;
