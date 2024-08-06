// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeProvider from "@/contexts/Home";
// import { DataGrid } from "@mui/x-data-grid";
// import Barcode from "react-barcode";
// import { useState } from "react";
// import { BarcodeScanner } from "@thewirv/react-barcode-scanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homepage",
  description: "CRM Dashboard",
};

export default function RootLayout({ children }) {
  // const [data, setData] = useState("Not Found");
  return (
    <html lang="en">
      <body className={[inter.className]}>
        <HomeProvider>{children}</HomeProvider>
        {/* <Barcode value="kenny elias" /> */}
        {/* <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        /> */}
        {/* <BarcodeScanner
          onSuccess={(text) => setData(text)}
          onError={(error) => {
            if (error) {
              console.error(error.message);
            }
          }}
          onLoad={() => console.log("Video feed has loaded!")}
          containerStyle={{ width: "100%" }}
        />
        <p>{data}</p> */}
      </body>
    </html>
  );
}
