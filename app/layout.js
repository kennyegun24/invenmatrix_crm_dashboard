// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeProvider from "@/contexts/Home";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/contexts/DarkMode";
import DragDropPovider from "@/contexts/DragDrop";
import ChatbotProvider from "@/contexts/ChatBot";
import SessionWrapper from "@/contexts/Session";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import RequestSpinnerProvider from "@/contexts/RequestSpinner";
import ReduxProvider from "@/contexts/ReduxProvider";
// import {Appr}
// import { DataGrid } from "@mui/x-data-grid";
// import Barcode from "react-barcode";
// import { useState } from "react";
// import { BarcodeScanner } from "@thewirv/react-barcode-scanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homepage",
  description: "CRM Dashboard",
};

export default async function RootLayout({ children }) {
  // const [data, setData] = useState("Not Found");
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={[inter.className]}>
          <ReduxProvider>
            <AntdRegistry>
              <ThemeProvider>
                <HomeProvider>
                  <RequestSpinnerProvider>
                    <DragDropPovider>
                      <ChatbotProvider>{children}</ChatbotProvider>
                    </DragDropPovider>
                  </RequestSpinnerProvider>
                </HomeProvider>
              </ThemeProvider>
            </AntdRegistry>
          </ReduxProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
