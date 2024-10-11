"use client";

import NavBar from "@/components/nav/NavBar";
import TopNav from "@/components/nav/TopNav";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const routesToIgnore = [
    "/login",
    "/register",
    "/forget_password",
    "/verify_email",
  ];
  const TopNavRouteToIgnore = [
    "/login",
    "/register",
    "/forget_password",
    "/sales",
    "/customer",
    "/verify_email",
    "/organization",
  ];

  const pathname = usePathname();
  const showNavBar = !routesToIgnore.some((route) =>
    pathname.startsWith(route)
  );

  const showTopNavBar = !TopNavRouteToIgnore.some((route) =>
    pathname.startsWith(route)
  );

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <HomeContext.Provider value={{ toggle, collapsed }}>
      <ToastContainer position="bottom-right" />
      <Toaster richColors />
      <div className="flex layout">
        {showNavBar && <NavBar />}
        <div className="sub_layout">
          {showTopNavBar && <TopNav />}
          <div className="layout_content">{children}</div>
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default HomeProvider;
