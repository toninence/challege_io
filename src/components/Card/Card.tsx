import { useContext } from "react";
import Favorites from "../Favorites";
import StatusIcon from "../StatusIcon";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../../context/Favorites/FavoritesContext";
import { CharacterProps } from '../../interfaces/interfaces';
// import { FavoritesContext } from "../../context/Favorites/FavoritesContext";
const {
  Button,
  CardComponent,
  CardContainer,
  Image,
  ImageContainer,
  Location,
  Name,
  Origin,
  Species,
  Status,
  TextContainer,
} = require("./styles");

interface CardProps {
  character: {
    name: string,
    image: string,
    species: string,
    status: string,
    url: string,
    origin: {name:string},
    location: {name:string, url:string},
    id: number
  };
  toggleFavorites: (payload:CharacterProps)=>void;
  checkFavorite: (character:CharacterProps) => Boolean;
};

export const Card = ({character, toggleFavorites, checkFavorite}:CardProps) => {
  // const { character, toggleFavorites, checkFavorite } = props;
  const { name, image, species, status, url, origin, location, id } = character;
  const { state } = useContext(FavoritesContext);
  let locationNumber = location.url.split("/");
  let lNumber = locationNumber[locationNumber.length - 1];

  const isFavorite = checkFavorite(character);

  return (
    <CardContainer className="carta-box">
      <CardComponent className="carta">
        <ImageContainer className="cara">
          <Image src={image} alt={`image of ${name}`} />
        </ImageContainer>
        <TextContainer className="cara detras">
          <Name>{name}</Name>
          <Status>
            <StatusIcon status={status} />
            {status} - {species}
          </Status>
          <div>
            <span>From: </span>
            <Origin> {origin.name}</Origin>
          </div>
          <div>
            <span>Last known location: </span>
            <NavLink className="navlink" to={`/location/${lNumber}`}>
              <Location>{location.name}</Location>
            </NavLink>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Favorites
              isFavorite={isFavorite}
              toggleFavorites={toggleFavorites}
              character={character}
            />
            <NavLink to={`/character/${id}`}>{/* <PlusButton /> */}</NavLink>
          </div>
        </TextContainer>
      </CardComponent>
    </CardContainer>
  );
};
