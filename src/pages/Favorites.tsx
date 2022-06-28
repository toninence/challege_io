import React, { useContext } from "react";
import { Card } from "../components/Card/Card";
import { FavoritesContext } from "../context/Favorites/FavoritesContext";
import CharactersContainer from "../components/CharactersContainer";
import { CharacterProps } from '../interfaces/interfaces';
const { CardsContainer } = require("../components/CharactersContainer/styles");


export const Favorites = () => {
  const { state, toggleFavorites } = useContext(FavoritesContext);

  const checkFavorite = (ch:CharacterProps) => {
    let favorite = false;
    state.favorites.map((fv) => {
      if (fv.id === ch.id) {
        favorite = true;
      }
    });
    // console.log(ch.id + " Favorite " + favorite)
    return favorite;
  };
  return (
    <>
      <CharactersContainer
        title="Favoritos"
        characters={state.favorites}
        onPrev={() => {}}
        onNext={() => {}}
        prev={""}
        next={""}
      />
    </>
  );
};
