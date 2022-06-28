import { Card } from "../components/Card/Card";
import { useParams } from "react-router-dom";
import CharactersContainer from "../components/CharactersContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CharacterProps } from "../interfaces/interfaces";

export const Location = () => {
  const { idLocation } = useParams();
  const [charactersByLocation, setCharactersByLocation] = useState<CharacterProps[]>();
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((results) => {
        setCity(results.data.name)
        return results?.data?.residents
          .map((res: any) => {
            res = res.split("/");
            res = res[res.length - 1];
            return res;
          })
          .join();
      })
      .then((res) => {
        // console.log(res);
        res &&
          axios
            .get(`https://rickandmortyapi.com/api/character/${res}`)
            .then((res) => {
              setCharactersByLocation(res.data);
            });
      });
  }, []);

  return (
    <div>
      {charactersByLocation && charactersByLocation.length >= 1 && (
        <CharactersContainer title={city} characters={charactersByLocation} onNext={function (): void {
          throw new Error("Function not implemented.");
        } } onPrev={function (): void {
          throw new Error("Function not implemented.");
        } } prev={""} next={""} />
      )}
    </div>
  );
};
