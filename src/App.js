import { Navigation } from "./routes/Navigation";
import { FavoritesState } from "./context/Favorites/FavoritesContext";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks";

const themes = {
  light: {
    colors: {
      primary: "#000",
      text: "#000",
      bgPrimary: "#c6dadf",
      navPrimary: "#191e28",
      buttonPrimary: "#090d19",
    },
  },
  dark: {
    colors: {
      primary: "#fff",
      text: "#fff",
      bgPrimary: "#131b32",
      navPrimary: "#191e28",
      buttonPrimary: "#090d19",
    },
  },
};

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <FavoritesState>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
      </FavoritesState>
    </ThemeProvider>
  );
}

export default App;
