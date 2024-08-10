import { products } from "@/utils/prods_data";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import "./style.css";
import { ThemeContext } from "@/contexts/DarkMode";
import Toolbar from "@/components/toolKits/TableToolBar";
import { Avatar, Box } from "@mui/material";

const generateColumn = () => {
  const prods = Object.keys(products[0]);
  const excludedColumns = [
    "shippingTime",
    "productDescription",
    "variants",
    "supplierContact",
  ];

  const columns = prods
    .filter((fil) => !excludedColumns.includes(fil))
    .map((key) => {
      let headerName = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

      if (key === "images") {
        return {
          renderCell: (params) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Avatar src={params?.row?.images[0]} />
              </Box>
            );
          },
          field: key,
          headerName: headerName,
          width: 150,
          editable: true,
          headerClassName: "super-app-theme--header super-app-image",
          headerAlign: "center",
        };
      }
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

const Table = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <DataGrid
      columns={columns}
      rows={products}
      sx={{
        ".super-app-theme--header": {
          "*": {
            color: "#000",
          },
        },
        ".super-app-image": {
          alignItems: "center",
          justifyContent: "center",
        },
        "& .MuiDataGrid-toolbarContainer": {
          backgroundColor: mode === "dark" ? "#fff" : "#102a43",
          color: mode === "dark" ? "#000" : "#000",
          borderBottom: "1px solid #ccc",
          justifyContent: "flex-end",
          padding: "12px",

          "*": {
            color: mode === "dark" ? "#000" : "#fff",
          },
          "& .MuiButton-root": {
            color: mode === "dark" ? "#000" : "#fff",
            "&:hover": {
              backgroundColor: "#e7f3ff",
              color: "#000",
            },
          },
        },
      }}
      slots={{ toolbar: Toolbar }}
    />
  );
};

export default Table;
