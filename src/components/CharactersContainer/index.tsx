import { Card } from "../Card/Card";
import { FavoritesContext } from "../../context/Favorites/FavoritesContext";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading"
import Pagination from "../Pagination";
import { CharacterProps } from '../../interfaces/interfaces';
const { CardsContainer, Div, Title } = require("./styles");

interface props {
  characters: CharacterProps[];
  onNext: ()=>void;
  onPrev: ()=>void;
  prev:string; 
  next:string;
  title?:string;

}

const Index = (props:props) => {
  const { characters, onNext, onPrev, prev, next, title="" } = props;
  const { state, toggleFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = (ch:CharacterProps) => {
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
