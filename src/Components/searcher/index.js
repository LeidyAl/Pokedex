import React from "react";

const Searcher = ({ onChange }) => (
  <div>
    <h4>icono</h4>
    <input
      placeholder="Buscar pokemon..."
      onChange={({ target }) => onChange(target.value)}
    />
  </div>
);

export default Searcher;
