export const generateCustomersColumns = (products) => {
  const prods = Object.keys(products[0]);
  const visibleColumns = [
    "id",
    "name",
    "houseAddress",
    "amountOrders",
    "emailAddress",
    "phoneNumber",
  ];
  const columns = prods
    // .filter((fil) => !excludedColumns.includes(fil))
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
        hide: !visibleColumns.includes(key),
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
