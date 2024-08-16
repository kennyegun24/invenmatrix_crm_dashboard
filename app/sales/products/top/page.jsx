"use client";
import React from "react";
import { products } from "@/utils/prods_data";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { handleDownloadPDF } from "@/helpers/downloadPDF";

const ExportPDF = () => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Stock Level</th>
            <th>Profit Margin</th>
            <th>Selling Price</th>
            <th>Shipping Cost</th>
            <th>Barcode</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.stockLevel}</td>
              <td>{`${product.profitMargin}%`}</td>
              <td>{`$${product.sellingPrice}`}</td>
              <td>{`$${product.shippingCost}`}</td>
              <td>{product.barcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleDownloadPDF(products)}>
        Download as PDF
      </button>
    </div>
  );
};

export default ExportPDF;
