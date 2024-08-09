"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";
import { Button } from "@mui/material";
import { products } from "@/utils/prods_data";

const generateColumn = () => {
  const prods = Object.keys(products[0]);

  const columns = prods.map((key) => {
    let headerName = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    return {
      field: key,
      headerName: headerName,
      width: 150,
      editable: true,
      headerClassName: "super-app-theme--header",
    };
  });

  return columns;
};
const columns = generateColumn();

export default function Products() {
  return (
    <div className="dashboard_table_component">
      <Box className="flex column gap1rem dashboard_table">
        <div className="flex align_center justify_between">
          <h3>Products</h3>
          <Button variant="outlined">View all</Button>
        </div>
        <DataGrid
          rows={products.slice(0, 5)}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{
            ".super-app-theme--header": {
              "*": {
                color: "#000",
              },
            },
          }}
          // pageSizeOptions={[5]}
          disableColumnResize
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
