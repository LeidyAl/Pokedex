import React, { Component } from "react";
import { API } from "../../API";
import Modal from "../../Components/Modal/Modal";

import PokemonView from "./PokemonView";

class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemons: [],
      pokemonsFilter: [],
      show: false,
      pokemonSelect: {},
    };
  }

  async componentDidMount() {
    let pokemons = [];
    await API.GET("/pokemon").then(async ({ data }) => {
      await data.results.forEach(async (p) => {
        let result = await API.GET(`/pokemon/${p.name}`).then(
          ({ data }) => data
        );
        result.description = await API.GET(`/characteristic/${result.id}`).then(
          ({ data }) => data.descriptions[1].description
        );
        result.ability = await API.GET(`/ability/${result.id}`).then(
          ({ data }) => data
        );
        pokemons.push(result);
      });
    });

    this.setState({ pokemonsFilter: pokemons, pokemons });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  openCard(pokemonSelect) {
    this.setState({ show: !this.state.show, pokemonSelect })
    
  }

  searchPokemon(name) {
    let { pokemons, pokemonsFilter } = this.state;
    if (!name) {
      pokemonsFilter = pokemons;
      this.setState({ pokemonsFilter });
    } else {
      pokemonsFilter = pokemons.filter((p) => p.name.search(name) != -1);
    }

    this.setState({ pokemonsFilter });
  }

  render() {
    if (this.state.loading) {
      return <div>Cargando...</div>;
    }
    console.log(this.state.pokemonsFilter);
    return (
      <>
        <PokemonView
          pokemons={this.state.pokemonsFilter}
          openCard={(id, i) => this.openCard(id, i)}
          searchPokemon={(value) => this.searchPokemon(value)}
        />
        {
          this.state.show && (
            <Modal data={this.state.pokemonSelect}  onclick={()=>this.openCard()}/>
          ) 
        }
      </>
    );
  }
}

export default PokemonContainer;
