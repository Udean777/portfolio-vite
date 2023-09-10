import { createContext, useContext, useState } from "react";

interface DarkContextType {
  isDarkmode: boolean;
  toggleDarkmode: () => void;
}

const DarkContext = createContext<DarkContextType | undefined>(undefined);

export function useDarkMode(): DarkContextType {
  const context = useContext(DarkContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setIsDarkmode(!isDarkmode);
  };

  return (
    <DarkContext.Provider value={{ isDarkmode, toggleDarkmode }}>
      {children}
    </DarkContext.Provider>
  );
}
