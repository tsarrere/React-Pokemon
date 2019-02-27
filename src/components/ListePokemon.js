import React, { Component } from 'react';
import Pokemon from '../Pokemon';
import { Card, Col } from 'antd';

const { Meta } = Card;

const url = 'https://pokeapi.co/api/v2/pokemon/'

class ListePokemon extends Component {
    state = { listePoks: [] }

    getPokemon(i) {
        // requête ajax sur l'API => fetch
        fetch(url + i)
            .then(resp => resp.json())
            .then(data => {
                let l = this.state.listePoks
                l.push(new Pokemon(data))
                this.setState({ listePoks: l })
                console.log(this.state.listePoks)
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        for (let i = 1; i <= this.props.nb; i++) {
            this.getPokemon(i)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.nb !== this.props.nb) {
            this.setState({ listePoks: [] })
            for (let i = 1; i <= this.props.nb; i++) {
                this.getPokemon(i)
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.listePoks.map(pokemon => {
                    return (
                        <Col className="gutter-row" xs={10} sm={8} md={6} lg={4} key={pokemon.id}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="sprite" src={pokemon.sprite} />}>
                                <Meta
                                    title={pokemon.name}
                                    description={pokemon.type}
                                />
                            </Card>
                        </Col>)
                })}
            </div>
        )
    }
}

export default ListePokemon