import './PokemonDetails.css';

function PokemonDetails(props) {
    const { pokemon } = props;

  return (
    <section className="selected-pokemon">
        <div className="pokemon-container">
            <h2 className="text">{pokemon.name}</h2>
            <img className="pokemon-img" src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
            <h3 className="text">Height: {pokemon.height}</h3>
            <h3 className="text">Weight: {pokemon.weight}</h3>
            <h3 className="text">Type: {pokemon.type}</h3>
        </div>
    </section>
  )
}

export default PokemonDetails