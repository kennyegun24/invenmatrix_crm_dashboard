export const filters = [
  {
    label: "Sort by date of creation",
    name: "createdAt",
    options: [
      {
        label: "Created (dsc)",
        value: "dsc",
      },
      {
        label: "Created (asc)",
        value: "asc",
      },
    ],
  },
  {
    label: "Sort by date of update",
    name: "updatedAt",
    options: [
      {
        label: "Updated (dsc)",
        value: "dsc",
      },
      {
        label: "Updated (asc)",
        value: "asc",
      },
    ],
  },
  {
    label: "Sort alphabetically",
    name: "name",
    options: [
      {
        label: "Alphabetical Asc A - Z",
        value: "asc",
      },
      {
        label: "Alphabetical Dsc Z - A",
        value: "dsc",
      },
    ],
  },
  {
    label: "Products Count",
    name: "productCount",
    options: [
      {
        label: "Ascending",
        value: "asc",
      },
      {
        label: "Descending",
        value: "dsc",
      },
    ],
  },
];

// export const filterProducts = (array, filterOptions) => {
//   let arr = [...array];

//   arr.sort((a, b) => {
//     for (const key in filterOptions) {
//       if (filterOptions[key] === null || filterOptions[key] === undefined)
//         continue;

//       let result = 0;

//       if (key === "createdAt" || key === "updatedAt") {
//         result = new Date(a[key]) - new Date(b[key]);
//       }
//       if (typeof a[key] === "string") {
//         result = a[key].localeCompare(b[key]);
//       } else {
//         result = a[key] - b[key];
//       }

//       if (filterOptions[key] === "asc") {
//         if (result !== 0) {
//           console.log(result);

//           return result;
//         }
//       } else if (filterOptions[key] === "dsc") {
//         if (result !== 0) {
//           console.log(-result);
//           return -result;
//         }
//       }
//     }
//     return 0;
//   });
//   return arr;
// };

// before the christian era
// christian era
