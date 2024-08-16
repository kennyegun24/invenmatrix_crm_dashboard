const { Avatar, Box } = require("@mui/material");

export const generateAllProductsColumns = (products) => {
  const prods = Object.keys(products[0]);
  const excludedColumns = [
    "shippingTime",
    "productDescription",
    "variants",
    "supplierContact",
    "reviews",
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
