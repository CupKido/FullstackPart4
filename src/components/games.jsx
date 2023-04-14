import React, { Component } from 'react'
import Game from './game'

class Games extends Component {
    
    render() { 
        const {games} = this.props
        return (games.map(game => <Game game={game}/>));
    }
}
 
export default Games;
