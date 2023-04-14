import React, { Component } from 'react'
import Player from './player'
class Players extends Component {
    state = {  } 
    render() { 
        const {players} = this.props
        return (players.map(player => <Player key={player} player={player} onDeletePlayer={this.props.onDeletePlayer}/>));
    }
}
 
export default Players;