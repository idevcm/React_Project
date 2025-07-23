import PokemonCard from "./PokemonCard"
import React, { useEffect, useState } from "react";
import './PokemonList.css';


function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(10);
  }, []);

  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  }

  const getPokemons = async (quantity) => {
    const pkmArr = [];
    
    for (let i = 1; i <= quantity; i++) {
      const fetchedPokemon = await fetchPokemon(i);
      pkmArr.push(fetchedPokemon);
    }

    setPokemons(pkmArr);
  }

  const pokemonCards = pokemons.map((pokemon) => {
  return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
});


  return (
    <ul className="pokemon-list">
        {pokemonCards}
    </ul>
  )
}

export default PokemonList