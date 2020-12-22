import React,{ Component } from 'react'
import '../Css/Main.css'
import Logo from '../images/logoquiz.png'
import QuizLaunch from './QuizLaunch'
import { persistor, store } from '../Store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


class Main extends Component {
    
   state = {
      beginGame: false
    }
   
    changeBeginGameValue= () =>{
      this.setState({beginGame: true})
    }

    render () {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <div className="Main">
       <div className="Main-body">
       {
         this.state.beginGame
         ? <QuizLaunch></QuizLaunch>
         : <>
    
             <div className="Main-body_logo"><img src={Logo} alt="LogoCineQuiz" height="180" width ="200"></img></div>
             <div className="Main-body_rules">
               <h2> Welcome to the quizz ! </h2>
               <span className="pt5"> You'll be asked a series of <span className="text-bold">"Yes or No"</span> questions.</span>
               <span className="pt5">Answer as many as you can in the allowed time ! </span>
               <span className="pt5">Good luck !</span>
             </div>
             <button className="Main-body_button" onClick={this.changeBeginGameValue} >Let's Start</button>
             </>
            }
       
       </div>
       </div>
       </PersistGate>
       </Provider>
    )
}
       }
export default Main ;