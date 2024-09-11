import Image from "next/image";
import React from "react";
import empty from "@/public/empty.png";
const Empty = () => {
  return (
    <div
      style={{ height: "88vh" }}
      className="flex align_center justify_center column gap05rem"
    >
      <Image
        src={empty}
        style={{
          height: "120px",
          width: "120px",
          filter: "grayscale(2)",
          // objectFit: "cover",
        }}
      />
      <p>No data found</p>
    </div>
  );
};

export default Empty;
