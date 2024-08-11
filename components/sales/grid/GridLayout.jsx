import React from "react";
import "./style.css";
import GridFolder from "@/components/grid/GridFolder";
import image from "@/public/login.png";
import einstein from "@/public/einstein.jpg";
import rand from "@/public/rand.jpg";
import wristwatch from "@/public/wristwatch.jpeg";
import shoe1 from "@/public/shoe1.jpeg";
import wristwatch1 from "@/public/wristwatch1.jpeg";
import wristwatch2 from "@/public/wristwatch2.jpeg";
import shoe2 from "@/public/shoe2.jpeg";
import shoe3 from "@/public/shoe3.jpeg";
const GridLayout = () => (
  <div className="grid_layout_component">
    <GridFolder image={image} />
    <GridFolder image={einstein} />
    <GridFolder image={rand} />
    <GridFolder image={wristwatch1} />
    <GridFolder image={shoe1} />
    <GridFolder image={shoe2} />
    <GridFolder image={wristwatch2} />
    <GridFolder image={shoe3} />
    <GridFolder image={wristwatch} />
  </div>
);

export default GridLayout;
