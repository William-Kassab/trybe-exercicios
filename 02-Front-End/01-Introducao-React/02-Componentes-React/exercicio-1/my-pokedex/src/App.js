import React from 'react';
import './App.css';
import PokeInfos from './PokemonsMap';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">POKEDEX</h1>
        <div className="pokedex">
          {pokemons.map((pokemon) => {
            return (
            <div key={pokemon.name} className="pokemon-infos">
              <PokeInfos poke={pokemon} />
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export default App;
