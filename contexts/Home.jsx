"use client";

import NavBar from "@/components/nav/NavBar";

const { createContext } = require("react");

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  // const routesToIgnore=
  return (
    <HomeContext.Provider>
      {/* <NavBar /> */}
      <div className="layout">{children}</div>
    </HomeContext.Provider>
  );
};

export default HomeProvider;
