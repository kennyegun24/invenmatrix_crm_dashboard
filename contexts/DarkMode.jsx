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
            // colorText: "var(--primary_text_color)",
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
              subMenuItemBg: mode === "dark" ? "#0c2033" : "#f4f4f4",
            },
            Button: {
              defaultColor: mode === "dark" ? "#102a43" : "#fff",
              defaultBg: mode === "dark" ? "#fff" : "#102a43",
              colorPrimaryBg: "var(--opposite_main_bg)",
              defaultBorderColor: mode === "dark" ? "#f4f4f4" : "#111",
              defaultHoverBg: mode === "dark" ? "#102a43" : "#fff",
              defaultHoverColor: mode === "dark" ? "#fff" : "#102a43",
              contentFontSizeSM: 12,
              colorText: "var(--primary_text_color)",
            },
            Popover: {
              colorBgElevated: "var(--sub_bg)",
              colorText: "var(--primary_text_color)",
              colorTextHeading: "var(--light_text",
              fontSize: 16,
              fontWeightStrong: 700,
              titleMinWidth: 250,
            },
            Modal: {
              colorBgElevated: "var(--sub_bg)",
              colorText: "var(--light_text)",
              titleColor: "var(--light_text)",
            },
            DatePicker: {
              colorBgElevated: "var(--sub_bg)",
              colorBgContainer: "var(--main_bg)",
              colorBorder: "var(--light_border)",
              colorTextPlaceholder: "var(--text_color)",
              colorText: "var(--primary_text_color)",
            },
            Tooltip: {
              fontSize: 12,
              colorText: "var(--primary_text_color)",
            },
            Input: {
              colorTextPlaceholder: "var(--text_color)",
              colorText: "var(--primary_text_color)",
              colorBgContainer: "var(--main_bg)",
              addonBg: "var(--sub_bg)",
            },
            Table: {
              colorBgContainer: "var(--main_bg)",
              headerColor: "var(--text_color)",
              rowHoverBg: "var(--sub_bg)",
              rowSelectedBg: "var(--sub_bg)",
              borderColor: "var(--light_border)",
              // colorBgElevated: "var(--main_bg)",
              headerBg: "var(--sub_bg)",
              headerSortActiveBg: "var(--sub_bg)",
              fixedHeaderSortActiveBg: "var(--sub_bg)",
              headerSortHoverBg: "var(--sub_bg)",
              headerFilterHoverBg: "var(--sub_bg)",
              selectionColumnWidth: 75,
              bodySortBg: "var(--sub_bg)",
              // colorText: "#fff",
              controlHeight: 20,
              controlHeightLG: 20,
              controlHeightSM: 20,
              controlHeightXS: 20,
              cardHeight: 20,
            },
            Select: {
              colorBgElevated: "var(--sub_bg)",
              colorText: "var(--text_color)",
              colorBgContainer: "var(--main_bg)",
              fontSize: 16,
              optionFontSize: 14,
              optionSelectedColor: "var(--selectTextActiveColor)",
              colorBorder: "var(--light_border)",
              controlItemBgActive: "var(--selectTextActiveBg)",
              optionActiveBg: "var(--selectTextHoverBg)",
            },
            Radio: {
              fontSize: 12,
            },
            Form: {
              colorText: "var(--light_text)",
              colorTextHeading: "var(--light_text)",
              // colorTextBase: "var(--light_text)",
              // colorTextTertiary: "var(--light_text)",
              // colorTextSecondary: "var(--light_text)",
              // colorTextQuaternary: "var(--light_text)",
              // colorTextLabel: "var(--light_text)",
              // colorTextPlaceholder: "var(--light_text)",
              // colorTextDescription: "var(--light_text)",
            },
            Card: {
              fontSize: 14,
              lineHeight: 1.2,
              colorText: "var(--light_text)",
              colorTextDescription: "var(--light_text)",
              colorTextHeading: "var(--text_color)",
              colorBgContainer: "var(--sub_bg)",
              headerFontSize: 18,
              colorBorderSecondary: "var(--secondary_border)",
              padding: "12px",
              paddingLG: 12,
            },
            Avatar: {
              containerSize: 42,
              groupSpace: 2,
            },
            Tabs: {
              itemColor: "var(--text_color)",
              fontWeightStrong: 700,
              fontSize: 16,
              itemActiveColor: "var(--green_color)",
              itemSelectedColor: "var(--green_color)",
              inkBarColor: "var(--green_color)",
            },
          },
        }}
      >
        <div className="">{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
// export default wrapper.useWrappedStore(ThemeProvider);
