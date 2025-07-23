import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";
import './PokemonList.css';
import PokemonDetails from "./PokemonDetails";

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(1, 300); // Default range from 1 to 300
  }, []);

  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  };

  const getPokemons = async (from, to) => {
    const pkmArr = [];
    for (let i = from; i <= to; i++) {
      const fetchedPokemon = await fetchPokemon(i);
      pkmArr.push(fetchedPokemon);
    }
    setPokemons(pkmArr);
  };

  const pokemonCards = pokemons.map((pokemon) => (
    <PokemonCard 
      key={pokemon.id} 
      pokemon={pokemon} 
      selectedPokemon={props.selectedPokemon} 
    />
  ));

  return (
    <div>
      <GetForm getPokemons={getPokemons}/>
      <ul className="pokemon-list">
        {pokemonCards}
      </ul>
    </div>
  );
}

export default PokemonList;
