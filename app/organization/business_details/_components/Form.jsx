"use client";
import React from "react";
import { Form, Button, Input } from "antd";
import Image from "next/image";
import image from "@/public/bundle2.png";
const inps = [
  {
    label: "Business Name",
    name: "business_name",
    placeholder: "",
  },
  {
    label: "Email Address",
    name: "business_email",
    placeholder: "",
  },
  {
    label: "Phone Number",
    name: "business_phone",
    placeholder: "",
  },
  {
    label: "Country",
    name: "country",
    placeholder: "",
  },
  {
    label: "State",
    name: "state",
    placeholder: "",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "",
  },
];
const BusinessDForm = () => {
  return (
    <Form className="business_details_form p-2 gap2rem flex column width100">
      <section className="flex justify_between width100 align_center">
        <div className="flex gap05rem align_center">
          <Image className="rounded-full" src={image} />
          <div className="flex column">
            <h3 className="text-[18px] font-[600]">John Doe</h3>
            <p>johndoe.xyz</p>
          </div>
        </div>
        <Button size="large" type="default" className="antd_btn">
          Edit
        </Button>
      </section>

      <section className="flex align_center flex-wrap justify_between gap05rem">
        {inps.map((item, _) => (
          <Form.Item key={_} className="w-[48%] gap05rem flex column">
            <label htmlFor="">{item.label}</label>
            <Input
              placeholder={item.label}
              name={item.name}
              className="border-[--light_border] p-4 bg-[--opposite_text]"
            />
          </Form.Item>
        ))}
      </section>
    </Form>
  );
};

export default BusinessDForm;
