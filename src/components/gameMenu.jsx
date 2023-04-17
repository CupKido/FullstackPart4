import React, { Component } from 'react'
class GamsMenu extends Component {
    playerName = ""
    render() { 
        // div for title, user input, and button
        
        return (<div>
            <h1>Get to 100</h1>
            {this.getMenu()}
        </div>);
    }

    getMenu = () => {
        if(this.props.mid_game)
        {
            return <h2>Game in progress...</h2>;
        }
        else
        {
            return (
                <nav>
                    <input type="text" id="playerName" placeholder="Player Name" onChange={(event) => this.playerName = event.target.value}/>
                    <button onClick={() => this.props.onAddGame(this.playerName)}>Add Player</button>
                    <button onClick={this.props.onStartGame}>Start Game</button>
                </nav>
                )
        }

    }

}
 
export default GamsMenu;