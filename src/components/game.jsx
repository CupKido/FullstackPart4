import React, { Component } from 'react';
import Player from './player';

class Game extends Component {
    state = {
        players : this.props.players,
        player_turn : 0,
        mid_game : this.props.mid_game
    }

    render() {
        const {players, player_turn } = this.state;
        return (<div>
            {players.map(player => <Player 
                key={player.name} 
                player={player} 
                is_turn={player === players[player_turn] && this.props.mid_game} 
                mid_game={this.props.mid_game} 
                onDeletePlayer={this.props.onDeletePlayer}
                onPassTurn={this.handlePassTurn}
                onEndGame={() => {
                    this.props.onEndGame();
                    this.ResetGame();
                }}
                />
                )
                }
            </div>);
    }

    handlePassTurn = () => {
        this.setState({player_turn: (this.state.player_turn + 1) % this.state.players.length});
    }

    ResetGame = () => {
        this.setState({player_turn : 0});
    }
}
 
export default Game;