import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoveSelector from "./PokemonMoveSelector";
import PokemonCity from "./PokemonCity";

const App = () => {
  const logWhenClicked = () => {
    console.log("Hakuna matata");
  };
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon
        abilities={["Anticipation", "Adaptability", "Run-Away"]}
        name="Squirtle"
        color="yellow"
      />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMoveSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
