"use client";
import { Input, Space, DatePicker, Button } from "antd";
import React from "react";

const ApiKeysForm = () => {
  return (
    <div style={{ width: "100%" }}>
      <Space
        size={"large"}
        style={{ width: "100%" }}
        direction="vertical"
        className="flex column gap3rem"
        // className="gap1rem"
      >
        <div className="flex column gap1rem">
          <h4 className="font-[700]">Website</h4>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              // addonBefore="https://"
              placeholder="Input search text"
              allowClear
              style={{
                color: "var(--light_text)",
                background: "transparent",
                padding: ".75rem",
                width: "100%",
              }}
            />
          </Space.Compact>
        </div>
        <div className="flex column gap1rem">
          <h4 className="font-[700]">Date Generated</h4>
          <Space.Compact style={{ width: "100%" }}>
            <DatePicker
              needConfirm
              style={{
                color: "var(--light_text)",
                background: "transparent",
                padding: ".5rem",
                width: "100%",
              }}
            />
          </Space.Compact>
        </div>
        <div className="flex column gap1rem">
          <h4 className="font-[700]">Nickname</h4>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              // addonBefore="https://"
              placeholder="Input search text"
              allowClear
              style={{
                color: "var(--light_text)",
                background: "transparent",
                padding: ".5rem",
                width: "100%",
              }}
            />
          </Space.Compact>
        </div>
        <div className="flex column gap1rem">
          <h4 className="font-[700]">Api Key</h4>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              // addonBefore="https://"
              placeholder="Input search text"
              allowClear
              style={{
                color: "var(--light_text)",
                background: "transparent",
                padding: ".5rem",
                width: "100%",
              }}
            />
          </Space.Compact>
        </div>
        <Button
          style={{ background: "var(--green_color)", padding: "1.5rem" }}
          className="width100 padding1rem"
        >
          Add new API key
        </Button>
      </Space>
    </div>
  );
};

export default ApiKeysForm;
