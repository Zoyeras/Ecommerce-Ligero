// src/App.tsx
import Home from "./paginas/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch('/api/logo');
        if (res.ok) {
          const data = await res.json();
          if (data.logoUrl) setLogoUrl(data.logoUrl);
        }
      } catch (err) {
        console.error('Failed to fetch logo:', err);
      }
    };
    fetchLogo();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, logoUrl, setLogoUrl }}>
        <BrowserRouter>
          <div className={darkMode ? "dark" : ""}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DarkModeContext.Provider>
  );
}

export default App;
