"use client";

import NavBar from "@/components/nav/NavBar";
import TopNav from "@/components/nav/TopNav";
import { usePathname } from "next/navigation";

const { createContext, useState } = require("react");

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const routesToIgnore = ["/login", "/register", "/forget_password"];
  const pathname = usePathname();
  const showNavBar = !routesToIgnore.some((route) =>
    pathname.startsWith(route)
  );
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <HomeContext.Provider value={{ toggle, collapsed }}>
      <div className="flex layout">
        {showNavBar && <NavBar />}
        <div className="layout">
          {showNavBar && <TopNav />}
          <div className="layout_content">{children}</div>
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default HomeProvider;
