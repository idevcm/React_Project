import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './Components/PokemonList'
import PokemonDetails from './Components/PokemonDetails'

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState();


  return (
    <>
      {selectedPokemon && (
        <div className="pokemon-details">
          <h2>{selectedPokemon.name}</h2>
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
        </div>
      )}

      <h2>Lista de Pokemons</h2>

      <PokemonList selectedPokemon={setSelectedPokemon}> </PokemonList>
    </>
  )
}

export default App
