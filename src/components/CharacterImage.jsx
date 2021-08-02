import React from "react";

import { useFetch } from "../hooks/useFetch";

import { Loader } from "./Loader";

export const CharacterImage = ({ query }) => {
  const { data, isLoading } = useFetch(
    `https://breakingbadapi.com/api/characters?name=${query}`
  );

  if (data === null || data.length === 0) {
    return <Loader message="Imagen no encontrada" />;
  }
  
  const { img, nickname } = !!data && data[0];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <img className="quote__img" src={img} alt={nickname} />
      )}
    </>
  );
};
