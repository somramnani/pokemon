import React from "react";

const PokemonDetails = ({ pokemeonDetails }) => {
  return (
    <>
      <div>
        <h1>{pokemeonDetails.name}</h1>
        <p>HP: {pokemeonDetails.stats[0].base_stat} </p>
        <p>Attack: {pokemeonDetails.stats[1].base_stat} </p>
        <p>Defence: {pokemeonDetails.stats[2].base_stat} </p>
        <p>Speed: {pokemeonDetails.stats[4].base_stat} </p>
        <p>Type: </p>
        <p> Weight:{pokemeonDetails.weight} </p>
      </div>
    </>
  );
};

export default PokemonDetails;
