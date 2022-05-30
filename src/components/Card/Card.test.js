import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { FavoritesState } from "../../context/Favorites/FavoritesContext";
import { BrowserRouter as Router } from "react-router-dom";

const character = {
  name: "Gaston",
  image:
    "https://cdn-e360.s3-sa-east-1.amazonaws.com/adios-robert-downey-jr-marvel-anuncio-al-nuevo-iron-man-large-UQ4lZe7Bcu.jpg",
  species: "Genius totalus",
  status: "Alive",
  url: "lalala/lololo/15",
  origin: "las toninas beach",
  location: {
    name: "Maimeeeee",
    url: "maiame/me/lo/confirmo/7",
  },
  id: 5,
};
const toggleFavorites = () => {};
const checkFavorite = () => {};

describe("Card", () => {
  test("renders Card component", () => {
    render(
      <Router>
        <FavoritesState>
          <Card
            character={character}
            toggleFavorites={toggleFavorites}
            checkFavorite={checkFavorite}
          />
        </FavoritesState>
      </Router>
    );
    screen.debug();
  });
});
