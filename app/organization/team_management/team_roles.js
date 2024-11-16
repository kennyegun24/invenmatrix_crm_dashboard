import { createStyles } from "antd-style";
import RoleOptions from "./RoleOptions";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: {
      target: "full-header",
    },
    fixed: "left",
    width: 150,
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 250,
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    width: 200,
  },
  {
    title: "Date Employed",
    dataIndex: "employedDate",
    width: 200,
  },
  {
    title: "Role",
    dataIndex: "role",
    width: 200,
    fixed: "right",
    filters: [
      {
        text: "Super Admin",
        value: "Super Admin",
      },
      {
        text: "Admin",
        value: "Admin",
      },
      {
        text: "Moderator",
        value: "Moderator",
      },
    ],
    render: (role, record) => <RoleOptions role={role} record={record} />,
    onFilter: (value, record) => record.role.indexOf(value) === 0,
  },
];

export const adminUsers = [
  {
    role: "Super Admin",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    mobile: "+1-555-123-4567",
    employedDate: "2021-03-15",
  },
  {
    role: "Admin",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    mobile: "+1-555-234-5678",
    employedDate: "2022-05-10",
  },
  {
    role: "Moderator",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    mobile: "+1-555-345-6789",
    employedDate: "2023-01-20",
  },
  {
    role: "Admin",
    name: "Diana Miller",
    email: "diana.miller@example.com",
    mobile: "+1-555-456-7890",
    employedDate: "2020-08-01",
  },
  {
    role: "Super Admin",
    name: "Edward King",
    email: "edward.king@example.com",
    mobile: "+1-555-567-8901",
    employedDate: "2019-11-05",
  },
  {
    role: "Admin",
    name: "Fiona Davis",
    email: "fiona.davis@example.com",
    mobile: "+1-555-678-9012",
    employedDate: "2023-04-14",
  },
  {
    role: "Moderator",
    name: "George White",
    email: "george.white@example.com",
    mobile: "+1-555-789-0123",
    employedDate: "2022-07-22",
  },
  {
    role: "Admin",
    name: "Hannah Lee",
    email: "hannah.lee@example.com",
    mobile: "+1-555-890-1234",
    employedDate: "2021-12-30",
  },
  {
    role: "Super Admin",
    name: "Ian Walker",
    email: "ian.walker@example.com",
    mobile: "+1-555-901-2345",
    employedDate: "2018-06-12",
  },
  {
    role: "Admin",
    name: "Jasmine Turner",
    email: "jasmine.turner@example.com",
    mobile: "+1-555-012-3456",
    employedDate: "2023-02-18",
  },
];

export const team_table_style = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: 5px;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});
