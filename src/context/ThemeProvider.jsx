import { createContext, useContext, useState } from "react";

// Valeur par defaut au theme pour eviter les erreurs
const ThemeContext = createContext({ theme: "light" });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  // pour la gestion du isDark dans app.js
  // creer ses 2 consts
  const isDark = theme === "dark";
  const isLight = theme === "light";

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const values = {
    theme,
    isDark,
    isLight,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
