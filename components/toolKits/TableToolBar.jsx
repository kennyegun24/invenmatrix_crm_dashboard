import { GridToolbarContainer, useGridApiContext } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Popover } from "antd";
import { FaDownload } from "react-icons/fa6";
import { handleExportPDF } from "@/helpers/downloadPDF";
import { handleExportJSON } from "@/helpers/downloadJSON";
import {
  getColumns,
  getFilteredRows,
  getRowsFromCurrentPage,
  getUnfilteredRows,
} from "@/helpers/tables/generalTableHelper";
import { useState } from "react";
import { handleExportXML } from "@/helpers/downloadXML";

const buttonBaseProps = {
  color: "primary",
  type: "default",
  size: "small",
  startIcon: <FaDownload />,
};

const PoppedTableBtn = () => {
  const apiRef = useGridApiContext();
  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);
  return (
    <div className="flex column gap05rem padding1rem align_start">
      <Button
        {...buttonBaseProps}
        onClick={() =>
          handleExport({ getRowsToExport: getRowsFromCurrentPage })
        }
      >
        Export Visible Rows (CSV)
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getFilteredRows })}
      >
        Export Filtered Data(CSV)
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getUnfilteredRows })}
      >
        Export All Unfiltered Data (CSV)
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() =>
          handleExportPDF(apiRef, getFilteredRows, getColumns({ apiRef }))
        }
      >
        Export as PDF Document
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExportJSON(apiRef, getFilteredRows)}
      >
        Export as JSON
      </Button>
      <Button
        {...buttonBaseProps}
        onClick={() => handleExportXML(apiRef, getFilteredRows)}
      >
        Export as XML
      </Button>
    </div>
  );
};

const Toolbar = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = async (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <GridToolbarContainer {...props}>
      <Popover
        placement="leftBottom"
        content={PoppedTableBtn}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        {/* {children} */}
        <Button {...buttonBaseProps}>Download</Button>
        {/* <PoppedTableBtn /> */}
      </Popover>
    </GridToolbarContainer>
  );
};

export default Toolbar;
