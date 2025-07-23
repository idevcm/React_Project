import React from "react";
import './PokemonCard.css';

function PokemonCard(props) {
  const { pokemon, selectPokemon } = props;

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

  return (
    pokemon.id ? (
      <li className="pokemon-card" onClick={() => selectPokemon(pokemon)}>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img className="pokemon-img" src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <h3 className="pokemon-id"><strong>ID: </strong> {pokemon.id}</h3>
        <h3 className="text"><strong>PS: </strong> {pokemon.stats?.[0]?.base_stat ?? 'N/D'}</h3>
        <h3 className="pokemon-height"><strong>Altura: </strong> {pokemon.height}</h3>
        <h3 className="pokemon-weight"><strong>Peso: </strong> {pokemon.weight}</h3>
        <h3 className="pokemon-base-experience"><strong>Experiencia Base: </strong> {pokemon.base_experience}</h3>
        
        <h3 className="pokemon-types"><strong>Tipos: </strong>
           {pokemon.types?.map(t => typeTranslations[t.type.name] || t.type.name).join(', ')}
        </h3>
      </li>
    ) : (
      <li className="pokemon-card">
        <h2>Cargando...</h2>
      </li>
    )
  );
}

export default PokemonCard;
