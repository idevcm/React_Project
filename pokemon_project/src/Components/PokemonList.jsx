import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";
import PokemonDetails from "./PokemonDetails";
import './PokemonList.css';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Mapeo de tipos en inglés a español
  const typeTranslations = {
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    electric: "Eléctrico",
    grass: "Planta",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dragon: "Dragón",
    dark: "Siniestro",
    steel: "Acero",
    fairy: "Hada",
  };

  useEffect(() => {
    getPokemons(1, 20); // Rango por defecto
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

  // Agrupar por tipo
  const groupedByType = {};
  pokemons.forEach((pokemon) => {
    pokemon.types.forEach((typeInfo) => {
      const type = typeInfo.type.name;
      if (!groupedByType[type]) {
        groupedByType[type] = [];
      }
      groupedByType[type].push(pokemon);
    });
  });

  return (
    <div>
      <GetForm getPokemons={getPokemons} />

      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}

      {Object.entries(groupedByType).map(([type, pokemonList]) => (
        <section key={type} className={`type-group ${type}`}>
          <h2 className="type-title">{typeTranslations[type] || type.toUpperCase()}</h2>
          <ul className="pokemon-list">
            {pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                selectPokemon={setSelectedPokemon}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default PokemonList;
