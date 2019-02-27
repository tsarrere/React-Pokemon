import React, { Component } from 'react';
import './App.css';

// components
import CardPokemon from './components/CardPokemon.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Pokemon API React</h1>
        <CardPokemon></CardPokemon>
      </div>
    );
  }
}

export default App;
