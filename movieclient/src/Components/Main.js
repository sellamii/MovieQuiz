import React from 'react'
import '../Css/Main.css'
import Logo from '../images/logoquiz.png'

 function Main(props) {
    

    return (
       <div className="Main">
       <div className="Main-body">
       
    
             <div className="Main-body_logo"><img src={Logo} alt="LogoCineQuiz" height="180" width ="200"></img></div>
             <div className="Main-body_rules">
               <h2> Welcome to the quizz ! </h2>
               <span className="pt5"> You'll be asked a series of <span className="text-bold">"Yes or No"</span> questions.</span>
               <span className="pt5">Answer as many as you can in the allowed time ! </span>
               <span className="pt5">Good luck !</span>
             </div>
             <button className="Main-body_button" >Let's Start</button>
        
       
       </div>
       </div>
    )
}

export default Main ;