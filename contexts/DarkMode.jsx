"use client";
import { createContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";

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
              colorBgElevated: mode === "dark" ? "#000" : "#fff",
              itemHoverBg: "#22ad01",
              itemActiveBg: "#22ad01",
              itemSelectedBg: mode === "dark" ? "#22ad01" : "#53f42b",
              itemSelectedColor: mode === "dark" ? "#fff" : "#000",
              itemHoverColor: "#fff",
              itemTextColor: mode === "dark" ? "#fff" : "#102A43",
              // popupBg: mode === "dark" ? "red" : "red",
              subMenuItemBg: mode === "dark" ? "#0c2033" : "#f4f4f4",
            },
          },
        }}
      >
        <div>{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
// export default wrapper.useWrappedStore(ThemeProvider);
