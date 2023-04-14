import React, { Component } from 'react'
class PlayersPresent extends Component {
    state = {  } 
    render() { 
        const players = this.props.players;
        return (<ul>
            {players.map(player => <li key={player.name}>{player.name} | steps: {player.steps} | amount : {player.number} </li>)}
        </ul>);
    }
}
 
export default PlayersPresent;