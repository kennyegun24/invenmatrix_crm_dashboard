import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import {
  handleTeamColumnResize,
  rowSelection,
  teamTableColumns,
  teamTableData,
} from "./tableHelper";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  const handleResize = (e, { size }) => {
    if (size.width < 100) {
      size.width = 100; // Set the minimum width to 100px
    }
    onResize(e, { size });
  };

  return (
    <Resizable
      width={width}
      height={0}
      onResize={handleResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const OrganizationTeamTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const [columns, setColumns] = useState(teamTableColumns);

  const hasSelected = selectedRowKeys.length > 0;
  const components = {
    header: {
      cell: ResizableTitle,
    },
  };
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" disabled={!hasSelected}>
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table
        bordered
        // components={components}
        rowSelection={rowSelection(
          selectedRowKeys,
          setSelectedRowKeys,
          onSelectChange
        )}
        // columns={columns}
        dataSource={teamTableData}
        scroll={{
          x: 1500,
          y: 400,
        }}
        columns={columns.map((col, index) => ({
          ...col,
          onHeaderCell: (column) => ({
            width: column.width,
            onResize: handleTeamColumnResize(index, columns, setColumns),
          }),
        }))}
      />
    </Flex>
  );
};
export default OrganizationTeamTable;
