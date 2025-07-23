import React, { useEffect, useState } from "react";

function PokemonCard() {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then((response) => response.json())
        .then((data) => setPokemon(data))

    }, [])

  return (
    pokemon.id ? (
    <li className="pokemon-card">

        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img className="pokemon-image" src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <h3 className="pokemon-id">ID: {pokemon.id}</h3>
        <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
        <h3 className="pokemon-height">Height: {pokemon.height}</h3>
        <h3 className="pokemon-weight">Weight: {pokemon.weight}</h3>
        <h3 className="pokemon-base-experience">Base Experience: {pokemon.base_experience}</h3>
        <h3 className="pokemon-abilities">Abilities: {pokemon.abilities?.map(ability => ability.ability.name).join(', ')}</h3>
        <h3 className="pokemon-types">Types: {pokemon.types?.map(type => type.type.name).join(', ')}</h3>
    </li>
  ) : (

    <li className="pokemon-card">
        <h2>Loading...</h2>
    </li>
  ));

 
}


export default PokemonCard