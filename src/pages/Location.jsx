import { Card } from "../components/Card/Card";
import { useParams } from "react-router-dom";
import CharactersContainer from "../components/CharactersContainer";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";

export const Location = () => {
  const { idLocation } = useParams();
  const [charactersByLocation, setCharactersByLocation] = useState();
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((results) => {
        setCity(results.data.name)
        return results?.data?.residents
          .map((res) => {
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
      {charactersByLocation?.length >= 1 && (
        <CharactersContainer title={city} characters={charactersByLocation} />
      )}
    </div>
  );
};
