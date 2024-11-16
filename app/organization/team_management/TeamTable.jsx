"use client";
import React, { useContext } from "react";
import { Table, Modal, Form, Select, Button } from "antd";
import { adminUsers, columns, team_table_style } from "./team_roles";
import { TeamRolesContext } from "@/contexts/TeamRolesPop";
import { IoClose } from "react-icons/io5";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const TeamTable = () => {
  const { styles } = team_table_style();
  const {
    isModalVisible,
    currentUser,
    handleOk,
    handleCancel,
    setCurrentUser,
  } = useContext(TeamRolesContext);

  return (
    <div style={{}}>
      <Table
        columns={columns}
        dataSource={adminUsers}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        // scroll={true}
        pagination={{ pageSize: 10 }}
        scroll={{
          y: "50vh",
          x: "max-content",
        }}
        className={styles.customTable}
      />
      <Modal
        title="Edit Role"
        open={isModalVisible}
        onCancel={handleCancel}
        closeIcon={<IoClose color="var(--light_text)" />}
        footer={null}
      >
        <Form initialValues={{ role: currentUser?.role }} onFinish={handleOk}>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select
              defaultValue={currentUser?.role}
              onChange={(value) =>
                setCurrentUser({ ...currentUser, role: value })
              }
            >
              <Select.Option value="Super Admin">Super Admin</Select.Option>
              <Select.Option value="Admin">Admin</Select.Option>
              <Select.Option value="Moderator">Moderator</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              className="bg-[--green_color] border-none text-[#fff]"
              type="default"
              htmlType="submit"
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default TeamTable;
