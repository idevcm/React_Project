import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './Components/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Pokemon Project</h2>

      <PokemonList> </PokemonList>
    </>
  )
}

export default App
