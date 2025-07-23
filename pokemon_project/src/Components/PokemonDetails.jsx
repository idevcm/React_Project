import './PokemonDetails.css';

function PokemonDetails(props) {
  const { pokemon } = props;

  return (
    <section className="selected-pokemon">
      <div className="pokemon-container">
        <h2 className="text">{pokemon.name}</h2>
        <img className="pokemon-img" src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <h3 className="text"><strong>PS: </strong> {pokemon.stats?.[0]?.base_stat ?? 'N/D'}</h3>
        <h3 className="text"><strong>Altura: </strong> {pokemon.height}</h3>
        <h3 className="text"><strong>Peso: </strong> {pokemon.weight}</h3>
        <h3 className="text"><strong>Tipos: </strong>
           {pokemon.types?.map(t => t.type.name).join(', ')}
        </h3>
        
        <h3 className="text"><strong>Experiencia Base: </strong> {
        pokemon.base_experience}
        </h3>
        
      </div>
    </section>
  );
}

export default PokemonDetails;