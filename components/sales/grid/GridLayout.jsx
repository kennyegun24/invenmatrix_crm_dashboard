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
import wristwatch3 from "@/public/wristwatch3.jpeg";
import shoe2 from "@/public/shoe2.jpeg";
import shoe3 from "@/public/shoe3.jpeg";
import GridItem from "@/components/grid/GridItem";
const GridLayout = () => (
  <div className="grid_layout_component flex column gap2rem">
    <div>
      <h3 className="grid_layout_folder_header">Folders</h3>
      <section className="grid_layout">
        <GridFolder image={image} />
        <GridFolder image={einstein} />
        <GridFolder image={rand} />
        <GridFolder image={wristwatch1} />
        <GridFolder image={shoe1} />
        <GridFolder image={shoe2} />
        <GridFolder image={wristwatch2} />
        <GridFolder image={shoe3} />
        <GridFolder image={wristwatch} />
      </section>
    </div>
    <div>
      <h3 className="grid_layout_folder_header">Single Items</h3>
      <section className="grid_layout">
        <GridItem image={wristwatch3} />
        <GridItem image={shoe1} />
        <GridItem image={wristwatch2} />
      </section>
    </div>
  </div>
);

export default GridLayout;
