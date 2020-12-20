import React from 'react'
import '../Css/LoginHeader.css'
import {Link} from 'react-router-dom'
import movielogo from '../images/movielogo.png'
import userlogo from '../images/zied.png'

 function LoginHeader() {
    

    return (
        <div className="Header">
        <Link className="Link" to="/">
             <img src={movielogo} alt="movielogo" className="HeaderLogo" />
        </Link> 
        <p className="Text">I LOVE MOVIES</p> 
        <img src={userlogo} alt="userlogo" className="UserLogo"/>    
         
        </div>
    )
}

export default LoginHeader ;
