import React from "react";
import Searcher from "../../Components/searcher";

const PokemonView = ({ pokemons, openCard, searchPokemon }) => (
  <div
    style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}
  >
    <Searcher onChange={(value) => searchPokemon(value)} />
    {!pokemons.length ? (
      <h2>Pokemon no encontrado.</h2>
    ) : (
      pokemons.map((p, i) => (
        <p key={p.id} onClick={() => openCard(i + 1)}>
          {p.name}
        </p>
      ))
    )}
  </div>
);

export default PokemonView;
