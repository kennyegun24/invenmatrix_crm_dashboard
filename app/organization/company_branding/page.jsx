"use client";
import React, { useState } from "react";
import { ColorPicker, Button, Input } from "antd";
import image from "@/public/bundle2.png";
import Image from "next/image";
// import { Input } from "@mui/material";
// import { Button } from "@mui/material";

const Page = () => {
  const [color, setColor] = useState("#1677ff");
  return (
    <div className="flex column gap3rem w-[60%] small_scroll margin_auto overflow-auto h-[85vh]">
      <section className="sticky top-0 flex column gap05rem">
        <h2 className="text-[24px] font-[700]">Company Branding</h2>
        <p>Manage your entire comopany / enterprise branding theme.</p>
        <hr />
      </section>
      <section className="flex justify_between w-full">
        <div className="flex column gap05rem flex-1">
          <h3>Brand Logo</h3>
          <p>Manage your company Logo</p>
        </div>
        <div className="flex-[3]">
          <div className="flex gap-[10%] align_start justify_center">
            <Image style={image_sty} src={image} />
            <Button type="default" className="antd_btn">
              Change Logo
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify_between w-full">
        <div className="flex column gap05rem flex-1">
          <h3>Brand Theme</h3>
          <p>Manage your company theme.</p>
        </div>
        <div className="flex-[3]">
          <div className="flex gap-[10%] align_start justify_center">
            <ColorPicker showText value={color} onChange={setColor} />
            <Button type="default" className="antd_btn">
              Change Theme
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify_between w-full">
        <div className="flex column gap05rem flex-1">
          <h3>Company Domain</h3>
          <p>Manage your company domain.</p>
        </div>
        <div className="flex-[3]">
          <div className="flex gap-[10%] align_start justify_center">
            <Input
              className="w-[32%] bg-transparent"
              addonBefore="https://"
              addonAfter=".com"
            />
            <Button type="default" className="antd_btn">
              Save
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

const image_sty = {
  height: "100px",
  width: "100px",
  objectFit: "contain",
};
