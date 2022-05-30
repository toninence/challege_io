import React, { useContext } from "react";
import { Card } from "../components/Card/Card";
import { CardsContainer } from "../components/CharactersContainer/styles";
import { FavoritesContext } from "../context/Favorites/FavoritesContext";
import CharactersContainer from "../components/CharactersContainer";
export const Favorites = () => {
  const { state, toggleFavorites } = useContext(FavoritesContext);

  const checkFavorite = (ch) => {
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
