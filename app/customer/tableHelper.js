import { Avatar, Box } from "@mui/material";

export const generateCustomersColumns = (products) => {
  const prods = Object.keys(products[0]);
  // const excludedColumns = [
  //   "shippingTime",
  //   "productDescription",
  //   "variants",
  //   "supplierContact",
  //   "reviews",
  // ];
  const excludedColumns = [];
  const columns = prods
    .filter((fil) => !excludedColumns.includes(fil))
    .map((key) => {
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
