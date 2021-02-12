import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PokemonContainer from "../Views/pokemon/PokemonContainer";
import NoFound from "../Views/noFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/pokemones" />
      <Route exact path="/pokemones" component={PokemonContainer} />
      <Route component={NoFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
