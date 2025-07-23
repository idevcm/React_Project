import React, { useState } from "react";
import './GetForm.css';

function GetForm(props) {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);

  const handleFromInput = (e) => {
    setFrom(e.target.value);
  };

  const handleToInput = (e) => {
    setTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPokemons(from, to);
  };

  return (

    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>

      <h3>Agrupa los Pokemons</h3>

      <fieldset>
        <label htmlFor="from-pokemon">Desde: </label>
        <input
          type="number"
          id="from-pokemon"
          min={1}
          value={from}
          onChange={handleFromInput}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="to-pokemon">A: </label>
        <input
          type="number"
          id="to-pokemon"
          min={1}
          value={to}
          onChange={handleToInput}
        />
      </fieldset>

      <button type="submit">Obtener Lista de Pokemons!</button>
    </form>
  );
}

export default GetForm;
