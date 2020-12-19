import React,{useState } from 'react'
import {useHistory ,Link} from 'react-router-dom'
import {auth,db} from '../firebase/firebase'
import '../Css/Register.css'
import './LoginHeader'
import registerlogo from '../register.jpg'

 function Register(props) {

    const [FirstName, setFirstName] = useState('')
    const history = useHistory('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const Register =(e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(Email,Password).then((auth)=>{
            if (auth.user) {
                auth.user.updateProfile({
                    displayName : FirstName + " " + LastName
                }).then((s)=>{
                    db.collection('users').doc(auth.user.uid).set({
                        uid : auth.user.uid,
                        displayName : auth.user.displayName,
                        email: auth.user.email

                    }).then((r)=>{
                        history.push("/")
                    })
                })
            }
        })
    }

    return (
       <div className="Register">
     
       <div className ="RegisterContainer">
       <img src ={registerlogo} className="RegisterLogo" alt="userlogo" />
       <center>
       <p> It's quick and easy.</p>
       </center>
       <div className ="hr3"/>
       <form>
       <center>
       <input type="name"  onChange={(e)=> setFirstName(e.target.value)} placeholder="First Name" required />
       </center>
       <center>
       <input type="name"  onChange={(e)=> setLastName(e.target.value)} placeholder="Last Name" required/>
       </center>
       <center>
       <input type="text"  onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address" required />
       </center>
       <center>
       <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="New Password" required />
       </center>
       <center>
       <button type="submit" onClick={Register} className="SubmitRegister"> Sign up </button>
       </center>
       <center>
       <Link className="Link" to="/login">
       <p> Already have an account ?</p>
       </Link> 
       </center>
       
       </form>
       </div>
       </div>
    )
}

export default Register ;