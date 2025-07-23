import React, { useEffect, useState } from "react";
import './PokemonCard.css';

function PokemonCard(props) {
  const { pokemon, selectPokemon } = props;


  return (
    pokemon.id ? (
    <li className="pokemon-card" onClick={() => selectPokemon(pokemon)}>

        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img className="pokemon-img" src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <h3 className="pokemon-id">ID: {pokemon.id}</h3>
        <h3 className="text">HP: {pokemon.stats?.[0]?.base_stat ?? 'N/A'}</h3>
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