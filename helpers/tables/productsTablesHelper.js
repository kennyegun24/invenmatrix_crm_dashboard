import { Avatar, Box } from "@mui/material";

export const generateAllProductsColumns = (products) => {
  const prods = Object.keys(products[0]);

  // Columns that should be visible by default
  const visibleColumns = [
    "id",
    "images",
    "sellingPrice",
    "profitMargin",
    "stockLevel",
    "productCategory",
    "productName",
    "barcode",
  ];

  const columns = prods.map((key) => {
    let headerName = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    if (key === "images") {
      return {
        renderCell: (params) => (
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
        ),
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
      hide: !visibleColumns.includes(key), // Hide columns that are not in visibleColumns
    };
  });

  const initialState = {
    columns: {
      columnVisibilityModel: {},
    },
  };

  prods.forEach((col) => {
    initialState.columns.columnVisibilityModel[col] =
      visibleColumns.includes(col);
  });

  return { columns, initialState };
};
