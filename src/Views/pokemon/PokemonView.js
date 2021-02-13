import React from "react";
import Searcher from "../../Components/searcher";
import Cards from '../../Components/Cards/Cards';
import './styles.css'

const PokemonView = ({ pokemons, openCard, searchPokemon }) => (
  <div className='containerGeneral' >
    <h2 className='title'>Pokedex</h2>
    <Searcher onChange={(value) => searchPokemon(value)} />
    <div className='containerCards'>
      {!pokemons.length ? (
        <h2>Pokemon no encontrado.</h2>
      ) : (
          pokemons.map((p, i) => (
            <Cards key={p.id} item={p} id={i + 1} openCard={() => openCard(p, i)}>
            </Cards>
          ))
        )}
    </div>
  </div>
);


export default PokemonView;