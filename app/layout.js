import { Inter } from "next/font/google";
import "./globals.css";
import HomeProvider from "@/contexts/Home";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/contexts/DarkMode";
import DragDropPovider from "@/contexts/DragDrop";
import ChatbotProvider from "@/contexts/ChatBot";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import RequestSpinnerProvider from "@/contexts/RequestSpinner";
import ReduxProvider from "@/contexts/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homepage",
  description: "CRM Dashboard",
};

export default async function RootLayout({ children }) {
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
