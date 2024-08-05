"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    let mod = mode === "dark" ? "light" : "dark";
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.querySelector(":root").setAttribute("color-scheme", mode);
  }, [mode]);

  useEffect(() => {
    const theme = localStorage.getItem("innovate_web_theme")
      ? localStorage.getItem("innovate_web_theme")
      : "dark";
    setMode(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={``}>{children}</div>
    </ThemeContext.Provider>
  );
};
// export default wrapper.useWrappedStore(ThemeProvider);
