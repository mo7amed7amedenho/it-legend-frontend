"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextType {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ThemeContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme يجب أن يكون داخل <ThemeProvider>");
  }
  return context;
}
