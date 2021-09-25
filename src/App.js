import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {

  const logWhenClicked = () => {
    console.log("Hakuna matata");
  };
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Pokedex" />
      <BestPokemon
        abilities={["Anticipation", "Adaptability", "Run-Away"]}
        name="Squirtle"
        color="yellow"
      />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
};

export default App;
