import React from "react";
import Searcher from "../../Components/searcher";
import Cards from '../../Components/Cards/Cards';

const PokemonView = ({ pokemons, openCard, searchPokemon }) => (
  <div style={{ display: "flex", flexDirection: "column", margin:'auto 0'}}>
    <Searcher onChange={(value) => searchPokemon(value)} />
    <div
      style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}
    >
      {!pokemons.length ? (
        <h2>Pokemon no encontrado.</h2>
      ) : (
          pokemons.map((p, i) => (
            <Cards key={p.id} item={p} id={i + 1} openCard={() => openCard(i + 1)}>
            </Cards>
          ))
        )}
    </div>
  </div>
);

export default PokemonView;
