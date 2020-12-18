import React from 'react'
import '../Css/Login.css'


 function Login(props) {
    

    return (
       <div className="Login">
       <div className="LoginContainer">
       <h3>Login to Movie Quiz</h3>
       <center>
       <input type="text" placeholder="Email Address" />
       </center>
       <center>
       <input type="password" placeholder="Password" />
       </center>
       <center>
       <button type="submit" className="SubmitLogin"> Log In </button>
       </center>
       </div>
       </div>
    )
}

export default Login
