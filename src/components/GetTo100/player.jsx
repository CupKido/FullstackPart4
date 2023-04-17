import React, { Component } from 'react'
class Player extends Component {
    state = { 
        playerName : this.props.player.name,
        steps : 0,
        amount : Math.floor(Math.random() * 99),
        is_turn : this.props.is_turn,
        player_won : false
     } 
    render() { 
        if(this.props.mid_game === false && this.state.steps !== 0){
            //this.setState({mid_game:false, steps : 0, amount : Math.floor(Math.random() * 99)});
            this.state.mid_game = false;
            this.state.steps = 0;
            this.state.amount = Math.floor(Math.random() * 99);
        }
        const player_stats = this.getPlayerStats();
        return (
            <div className="Player">
                <h3>{this.state.playerName + (this.state.is_turn ? " | TURN" : "" )}</h3>
                <p>steps: {this.state.steps} | amount: {this.state.amount}</p>
                {this.getGameBoard()}
                {player_stats.length > 0 && (<p>scores: {player_stats.join(', ')}</p>)}
                {this.props.mid_game === false && <button onClick={() => this.props.onDeletePlayer(this.state.playerName)}>Quit</button>}

            </div>
        );
    }

    getGameBoard = () => {
        if(this.state.player_won){
            return (<div>
                <button onClick={() => {
                    this.setState({player_won : false, steps : 0, amount : Math.floor(Math.random() * 99)});
                }}>New Game</button>
                <button onClick={() => this.props.onDeletePlayer(this.state.playerName)}>Quit</button>
            </div>)
        }
        if(this.props.mid_game === false){
            return null;
        }
        else if(this.props.is_turn){
            return (
                <div>
                    <button onClick={() => this.handleActionTaken("x2")}>x2</button>
                    <button onClick={() => this.handleActionTaken("/2")}>/2</button>
                    <button onClick={() => this.handleActionTaken("+1")}>+1</button>
                    <button onClick={() => this.handleActionTaken("-1")}>-1</button>
                </div>
            )
        }
    }

    handleActionTaken = (action) => {
        let amount = 0;
        switch(action){
            case "x2":
                amount = this.state.amount * 2;
                break;
            case "/2":
                amount =  Math.floor(this.state.amount / 2);
                break;
            case "+1":
                amount =  this.state.amount + 1;
                break;
            case "-1":
                amount =  this.state.amount - 1;
                break;
            default:
                break;
        }
        const steps = this.state.steps + 1
        this.setState({amount, steps});
        if(amount === 100){
            alert(this.state.playerName + " won with "+ steps + " steps!");
            this.addPlayerStat(steps);
            this.setState({player_won : true});
            //this.props.onEndGame(this.state.playerName);
        }
        this.props.onPassTurn();
        
    }

    getPlayerStats = () => {
        // access local storage
        let players = localStorage.getItem("Players");
        if(players === null){
            players = {};
        }
        else{
            players = JSON.parse(players);
        }
        // if player exists
        if (players[this.state.playerName] !== undefined){
            // get player stats
            return players[this.state.playerName]["stats"];
        }
        // if player does not exist
        return [];
    }

    addPlayerStat = (stat) => {
        // access local storage
        let players = localStorage.getItem("Players");
        if(players === null){
            players = {};
        }
        else{
            players = JSON.parse(players);
        }
        // if player exists
        if (players[this.state.playerName] === undefined){
            // get player stats
            players[this.state.playerName] = {"stats" : []};
        }
        players[this.state.playerName]["stats"].push(stat);
        // if player does not exist
        localStorage.setItem("Players", JSON.stringify(players));
    }
}
 
export default Player;