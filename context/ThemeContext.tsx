import { createContext, useState, useContext, ReactNode } from "react";

// 1️⃣ تحديد نوع البيانات داخل الـ Context
interface ThemeContextType {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

// 2️⃣ إنشاء `ThemeContext` مع تحديد النوع الصحيح
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3️⃣ إنشاء مزوّد (Provider) لتغليف التطبيق به
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ThemeContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4️⃣ دالة `useTheme` لاستخدام `context` بسهولة في أي Component
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme يجب أن يكون داخل <ThemeProvider>");
  }
  return context;
}
