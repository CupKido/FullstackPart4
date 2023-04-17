import React, { Component } from 'react';
import GameMenu from './gameMenu';
import Game from './game';



class GetTo100 extends Component {
    running_id = 0;
    state = { 
        players : [],
        mid_game : false
    } 
    render() { 
        return (<div>
            <GameMenu onAddGame={this.handleAddPlayer}
            onStartGame={this.handleStartGame}
            mid_game={this.state.mid_game}
            />
            <Game players={this.state.players} 
            onDeletePlayer={this.handleDeletePlayer}
            mid_game={this.state.mid_game}
            onEndGame={this.handleEndGame}
            />
        </div>);
    }

    handleAddPlayer = (player_name) => {
        if (player_name === "") return alert("Player name cannot be empty");
        const players = this.state.players;
        let exists = false;
        players.forEach(element => {
            if (element.name === player_name) {
                alert("Player already exists")
                exists = true;
                return true;
            }
        });
        if (exists) return;
        players.push({name : player_name});
        this.setState({players});
    }

    handleDeletePlayer = (player_name) => {
        const players = this.state.players;
        
        const names = players.map(player => player.name)
        const index = names.indexOf(player_name)
        players.splice(index, 1);
        this.setState({players});
    }

    handleStartGame = () => {
        if (this.state.players.length < 2){
            alert("You need at least 2 players to start a game");
            return;
        }
        this.setState({mid_game : true});
    }

    handleEndGame = () => {
        this.setState({mid_game : false});
    }
}
 
export default GetTo100;