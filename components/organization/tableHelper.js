import { Table, Tag } from "antd";

export const handleTeamColumnResize =
  (index, columns, setColumns) =>
  (e, { size }) => {
    const nextColumns = [...columns];
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };
    setColumns(nextColumns);
  };

export const rowSelection = (
  selectedRowKeys,
  setSelectedRowKeys,
  onSelectChange
) => {
  return {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
};
export const teamTableData = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane in na ans aanjafdqgeqsqd4reswefw no. ${i}`,
  active:
    i % 2 === 0
      ? "active"
      : i % 3 === 0
      ? "inactive"
      : i % 5 === 0
      ? "removed"
      : "OOS",
}));

export const teamTableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
    ellipsis: true,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
    ellipsis: true,
  },
  {
    title: "Active",
    dataIndex: "active",
    width: 150,
    render: (_, { active }, i) => {
      let color = "geekblue";
      if (active === "active") {
        color = "green";
      }
      if (active === "removed") {
        color = "volcano";
      }
      return (
        <>
          <Tag color={color} key={active}>
            {active?.toUpperCase()}
          </Tag>
        </>
      );
    },
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 200,
    ellipsis: true,
  },
  {
    title: "Add",
    dataIndex: "add",
    // width: 100,
  },
];
