import { useState } from "react";

const pokemonNames = [
  "Dragonair",
  "Mew",
  "Dragonite",
  "Steelix",
  "Gengar",
  "Solrock",
  "Pichu",
  "Regirock",
  "Regice",
  "Registeel",
  "Rhydon",
];
const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemontNameInput] = useState("");

  // PSEUDOCODE SOLUTION
  // catchPokemon adds a random pokemon to the state
  const catchPokemon = () => {
    // pick a random number between 0 and the number of pokemon names we have
    let randomPosition = Math.floor(Math.random() * pokemonNames.length);
    //let randomPosition = Math.floor(Math.random() * pokemonNames.length)
    // get the pokemon name at that position in the pokemonNames array
    const randomPokemon = pokemonNames[randomPosition];
    //const randomPokemon = pokemonNames[randomPosition]
    // add that pokemon name to the caught array in the state
    const newCaught = caught.concat(pokemonNameInput);

    setPokemontNameInput("");

    setCaught(newCaught);
  };

  function handleInputChange(event) {
    setPokemontNameInput(event.target.value);
  }
  return (
    <span>
      Caught {caught.length} Pokémon on {props.date}
      <ul>
        {caught.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch a Pokemon</button>
    </span>
  );
};
export default CaughtPokemon;
