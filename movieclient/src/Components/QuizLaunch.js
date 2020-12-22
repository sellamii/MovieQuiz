import React, { Component } from 'react'
import { connect } from "react-redux"
import GameOver from './Gameover'
import Game from './Game'


class QuizLaunch extends Component {
    render() {
        return (
            <div className="QuizLaunch"> 
                {   
                    this.props.statusPlayer === "game" 
                    ? <Game></Game>
                    : <GameOver></GameOver>
                }
            </div>
        )
    }
}
const mapStateToProps= (state) => {
    return{
        statusPlayer: state.statusPlayer.status
    }
}




export default connect(mapStateToProps)(QuizLaunch);
