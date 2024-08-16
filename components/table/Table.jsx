import { products } from "@/utils/prods_data";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import "./style.css";
import { ThemeContext } from "@/contexts/DarkMode";
import Toolbar from "@/components/toolKits/TableToolBar";

const Table = ({ columns = [], products = [] }) => {
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
      // slots={{ toolbar: Toolbar }}
      slots={{ toolbar: (props) => <Toolbar {...props} products={products} /> }}
    />
  );
};

export default Table;
