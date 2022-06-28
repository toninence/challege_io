import { fireEvent, prettyDOM, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "./Card";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const character = {
  id: 1,
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  species: "Human",
  status: "Alive",
  url: "url",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
};
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

describe("<Card />", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Router>
        <ThemeProvider theme={themes.dark}>
          <Card character={character} checkFavorite={() => {}} />
        </ThemeProvider>
      </Router>
    );
  });
  test("renders Card component correctly", () => {
    const component = render(
      <Router>
        <ThemeProvider theme={themes.dark}>
          <Card character={character} checkFavorite={() => {}} />
        </ThemeProvider>
      </Router>
    );
    expect(component.container).toHaveTextContent(character.name);
    expect(component.container).toMatchSnapshot();
  });
});
