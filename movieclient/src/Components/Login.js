import React , {useState } from 'react'
import '../Css/Login.css'
import {auth} from '../firebase/firebase'
import {useHistory} from 'react-router-dom'
import loginlogo from '../login.png'
import {Link} from 'react-router-dom'


 function Login(props) {
  const [Email, setEmail] = useState('')
  const history = useHistory('')
  const [Password, setPasswword] = useState('')

  const login =(event) => {
   event.preventDefault();
   auth.signInWithEmailAndPassword(Email,Password)
   .then( (auth) => {
     
      history.push("/");
   })
   .catch ((e) =>{
      alert(e.message);
   })

  }

    return (
       <div className="Login">
       <div className="LoginContainer">
       <img src ={loginlogo} className="LoginLogo" alt="userlogo" />
       <h3>Login to Movie Quiz</h3>
       <form>
       <center>
       <input type="text"  onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address" required/>
       </center>
       <center>
       <input type="password" onChange={(e)=> setPasswword(e.target.value)} placeholder="Password" required/>
       </center>
       <center>
       <button type="submit" onClick={login} className="SubmitLogin"> Log In </button>
       </center>
       <center>
       <Link className="Link" to="/register">
             <p> Create Account ? </p>
       </Link> 
       </center>
       </form>
       </div>
       </div>
    )
}

export default Login
