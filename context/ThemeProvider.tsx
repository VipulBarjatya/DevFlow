"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface IThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
};
