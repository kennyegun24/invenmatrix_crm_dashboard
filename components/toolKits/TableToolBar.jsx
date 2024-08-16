import { GridToolbarContainer, useGridApiContext } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa6";
import { handleExportPDF } from "@/helpers/downloadPDF";
import { handleExportJSON } from "@/helpers/downloadJSON";
import {
  getFilteredRows,
  getRowsFromCurrentPage,
  getUnfilteredRows,
} from "@/helpers/tables/generalTableHelper";

const Toolbar = (props) => {
  const apiRef = useGridApiContext();
  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);
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
      <Button
        {...buttonBaseProps}
        onClick={() => handleExportPDF(apiRef, getFilteredRows)}
      >
        PDF
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExportJSON(apiRef, getFilteredRows)}
      >
        JSON
      </Button>
    </GridToolbarContainer>
  );
};

export default Toolbar;
