import React, { Component } from 'react'

class NbPokemon extends Component {
    state = { texte: "" }

    handlerChange = evt => {
        let texte = evt.target.value
        this.setState({ texte })
    }

    handlerKeyUp = evt => {
        if (evt.key === 'Enter') {
            this.props.recupPoks(evt.target.value)
            this.setState({ texte: '' })
        }
    }

    render() {
        return (
            <input type='number'
                required
                onChange={this.handlerChange}
                onKeyUp={this.handlerKeyUp}
                value={this.state.texte} />
        )
    }
}

export default NbPokemon