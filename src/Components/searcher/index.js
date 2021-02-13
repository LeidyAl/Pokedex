import React from "react";
import "./styles.css";

const Searcher = ({ onChange }) => (

  <div className="headerTop-search-time">
    <i className="fab fa-searchengin icon-search"></i>
    <input className="headerTop-searc" type="text" placeholder="Buscar pokemon..." onChange={({ target }) => onChange(target.value)} />
    
  </div>
);

export default Searcher;
