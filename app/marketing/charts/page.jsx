"use client";
import React, { useState } from "react";
import Papa from "papaparse";
const Page = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (data) => {
        setData(data);
      },
    });
  };
  console.log(data);
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default Page;
