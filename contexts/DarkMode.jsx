"use client";
import { createContext, useEffect, useState } from "react";
import { Button, Layout, Menu, ConfigProvider } from "antd";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  console.log(mode);

  const toggle = () => {
    let mod = mode === "dark" ? "light" : "dark";
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("akash_crm", mod);
  };

  useEffect(() => {
    document.querySelector(":root").setAttribute("color-scheme", mode);
  }, [mode]);

  useEffect(() => {
    const theme = localStorage.getItem("akash_crm")
      ? localStorage.getItem("akash_crm")
      : "dark";
    setMode(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorBgContainer: mode === "dark" ? "#102A43" : "#fff",
              colorText: mode === "dark" ? "#fff" : "#102A43",
              colorTextLabel: mode === "dark" ? "#fff" : "#102A43",
              colorPrimaryText: mode === "dark" ? "#fff" : "#102A43",
            },
          },
        }}
      >
        <div className={``}>{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
// export default wrapper.useWrappedStore(ThemeProvider);
