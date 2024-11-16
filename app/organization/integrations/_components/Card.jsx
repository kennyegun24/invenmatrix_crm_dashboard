import React from "react";
import { Avatar, Card } from "antd";
import { Switch } from "@mui/material";
import "./style.css";

const IntegrationCards = ({ e }) => {
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      className="overflow-hidden shadow_ border-none"
      cover={
        <img
          alt="example"
          src={e.image}
          className="bg-[#fff] w-[100%] h-[200px] object-contain"
        />
      }
      actions={[
        <div
          style={{
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={1}
        >
          <Switch checked={e.status} key="ellipsis" />
        </div>,
      ]}
      key={e.id}
    >
      <section className="relative flex flex-col gap05rem overflow-hidden">
        <div className="flex gap05rem align_center">
          <img
            alt=""
            src={e.image}
            className="object-contain h-[32px] w-[32px] rounded-full bg-[#fff]"
          />
          <h3 className="text-[18px] font-[700] truncate">{e.title}</h3>
        </div>
        <div className="relative">
          <p className="text-[--light_text] text-[14px] hide_text_length">
            {e.body}
          </p>
        </div>
      </section>
    </Card>
  );
};

const integrationCardMap = ({ mapped_data }) => {
  return (
    <div className="organization_map_data overflow-auto">
      {mapped_data.map((e, _) => (
        <div key={_} className="w-[96%] m-auto">
          <IntegrationCards e={e} />
        </div>
      ))}
    </div>
  );
};

export default integrationCardMap;
