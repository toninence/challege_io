import { Card } from "../Card/Card";
import { CardsContainer, Div, Title } from "./styles";
import { FavoritesContext } from "../../context/Favorites/FavoritesContext";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading"
import Pagination from "../Pagination";

const Index = (props) => {
  const { characters, onNext, onPrev, prev, next, title="" } = props;
  const { state, toggleFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = (ch) => {
    let favorite = false;
    state.favorites.map((fv) => {
      if (fv.id === ch.id) {
        favorite = true;
      }
    });
    return favorite;
  };

  return (
    <Div>
      <Title>{title}</Title>
      <Pagination onPrev={onPrev} onNext={onNext} prev={prev} next={next} />
      <CardsContainer>
        {characters.length ?
          characters.map((ch) => {
            return (
              <Card
                key={ch.id}
                character={ch}
                toggleFavorites={toggleFavorites}
                checkFavorite={checkFavorite}
              />
            );
          })
        :
        <Loading />}
      </CardsContainer>
    </Div>
  );
};

export default Index;
