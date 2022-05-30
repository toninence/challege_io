import axios from "axios";
import React, { useEffect, useState } from "react";
import CharactersContainer from "../components/CharactersContainer";
export const Catalog = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState("");

  const url = "https://rickandmortyapi.com/api/character/";
  const getCharacters = async (url) => {
    const result = await axios.get(url);
    result?.data && setCharacters(() => result.data.results);
    result?.data?.info && setInfo(() => result.data.info);
  };
  const onPrev = () => {
    getCharacters(info.prev);
  };
  const onNext = () => {
    getCharacters(info.next);
  };
  useEffect(() => {
    getCharacters(url);
  }, []);

  return (
    <>
      <CharactersContainer
        characters={characters}
        onPrev={onPrev}
        onNext={onNext}
        prev={info.prev}
        next={info.next}
      />
    </>
  );
};
