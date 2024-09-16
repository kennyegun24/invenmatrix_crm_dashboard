export const filters = [
  {
    label: "Sort by date of creation",
    name: "createdAt",
    id: 1,
    options: [
      {
        label: "Created (dsc)",
        value: "dsc",
        id: 10,
      },
      {
        label: "Created (asc)",
        value: "asc",
        id: 20,
      },
    ],
  },
  {
    label: "Sort by date of update",
    name: "updatedAt",
    id: 2,
    options: [
      {
        label: "Updated (dsc)",
        value: "dsc",
        id: 30,
      },
      {
        label: "Updated (asc)",
        value: "asc",
        id: 40,
      },
    ],
  },
  {
    label: "Sort alphabetically",
    name: "name",
    id: 3,
    options: [
      {
        label: "Alphabetical Asc A - Z",
        value: "asc",
        id: 50,
      },
      {
        label: "Alphabetical Dsc Z - A",
        value: "dsc",
        id: 60,
      },
    ],
  },
  {
    label: "Products Count",
    name: "productCount",
    id: 4,
    options: [
      {
        label: "Ascending",
        value: "asc",
        id: 70,
      },
      {
        label: "Descending",
        value: "dsc",
        id: 80,
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
