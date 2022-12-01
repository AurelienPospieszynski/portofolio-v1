import clsx from "clsx";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

// On a cree ce nouveau composant afin que useTheme soit existant
// cad afin que le themeContext existe.
// AppWithTheme est bien un enfant de ThemeProvider et donc du themeContext
const AppWithTheme = ({ children }) => {
  // useTheme() permet d'appeler notre theme.
  const { isDark } = useTheme();

  // On indique ici app a l'id car dans la classe
  // css de theme.css on a le prefixe app a nos classe de darkmode
  return (
    <div
      id="app"
      className={clsx({
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
};
//NE PAS OUBLIER DE WRAPPER LA DIV AVEC LE COMPONANT QUI
// USE LE CONTEXT POUR LE DARKMODE
const MyApp = ({ Component, pageProps }) => (
  //Ajouter le theme provider pour ajouter le contexte, autrement les valeurs de isDark seront undefined.
  <ThemeProvider>
    <AppWithTheme>
      <div className="h-full px-4 m-auto max-w-7xl">
        <Component {...pageProps} />
      </div>
    </AppWithTheme>
  </ThemeProvider>
);

export default MyApp;
