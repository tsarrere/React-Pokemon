import React, { Component } from 'react'
import ListePokemon from './ListePokemon';
import NbPokemon from './NbPokemon';

class CardPokemon extends Component {
    state = { nb: '1' }
    recupPoks = texte => this.setState({ nb: texte })
    render() {
        return (<div>
            <NbPokemon recupPoks={this.recupPoks}></NbPokemon>
            <ListePokemon nb={this.state.nb}></ListePokemon>
        </div>)
    }
}

export default CardPokemon