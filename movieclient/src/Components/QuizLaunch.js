import React, { Component } from 'react'
import { connect } from "react-redux"



class QuizLaunch extends Component {
    render() {
        return (
            <div className="QuizLaunch"> 
                {   
                    this.props.statusPlayer === "game" 
                   
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
