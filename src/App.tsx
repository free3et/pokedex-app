import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PokemonsList } from "./pages/PokemonsList";
import { Layout } from "./Layout";
import { PokemonSingle } from "./pages/PokemonSingle";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<PokemonsList />} path="/" />
        <Route element={<PokemonSingle />} path="/pokemons/:name" />
      </Route>
    </Routes>
  );
}

export default App;
