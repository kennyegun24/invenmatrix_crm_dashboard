"use client";
import { createContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
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
          token: {
            colorText: "var(--primary_text_color)",
          },
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
            Button: {
              defaultColor: mode === "dark" ? "#102a43" : "#fff",
              // defaultColor: mode === "dark" ? "#fff" : "#102a43",
              defaultBg: mode === "dark" ? "#fff" : "#102a43",
              colorPrimaryBg: "var(--opposite_main_bg)",
              // primaryColor: mode === "dark" ? "#fff" : "#102a43",
              defaultBorderColor: mode === "dark" ? "#f4f4f4" : "#111",
              defaultHoverBg: mode === "dark" ? "#102a43" : "#fff",
              defaultHoverColor: mode === "dark" ? "#fff" : "#102a43",
              contentFontSizeSM: 12,
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
