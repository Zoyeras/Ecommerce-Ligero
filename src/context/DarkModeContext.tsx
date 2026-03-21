// src/context/DarkModeContext.tsx
import { createContext, useContext } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  logoUrl: string | null;
  setLogoUrl: (url: string | null) => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  logoUrl: null,
  setLogoUrl: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);