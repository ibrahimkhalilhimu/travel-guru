import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../Icon/google.png';
import fb from '../../Icon/fb.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [newUser,setNewUser] = useState(false)
    const [user,setUser] = useState({
     
        firstName:'',
        lastName:'',
      email:'',
      password:'',
      confirmPassword:'',
      error:'',
      success:false
    
    })
    
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const handleInput =(e)=>{
        let isFieldValid = true;
          if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            
          }
          if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordValid2 = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && isPasswordValid2
          }
          if(isFieldValid){
            const newUserInfo ={...user}
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
          }
          
      }

const handleSubmit=(e)=>{
  if(newUser && user.email && user.password && user.confirmPassword) 
   {firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res=>{
        const newUserInfo = {...user}
        newUserInfo.error = ''
        newUserInfo.success=true
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        updateUserName(user.firstName + user.lastName)
        console.log(res.user);
    })
    .catch(error=> {
        const newUserInfo = {...user}
        newUserInfo.error = error.message;
        setUser(newUserInfo);
       
      });}

     if(!newUser && user.email && user.password )
     { firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo = {...user}
        newUserInfo.error = ''
        newUserInfo.success=true
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
         console.log('sign in', res.user);
      })
      .catch(error=> {
        const newUserInfo = {...user}
        newUserInfo.error = error.message;
        setUser(newUserInfo);
      });}

e.preventDefault()
}
// GOOGLE LOGIN

const provider = new firebase.auth.GoogleAuthProvider();
const handleSignIn =()=>{
  firebase.auth().signInWithPopup(provider)
  .then(res=>{
   const {displayName,email} = res.user;
   const signedIn ={
      name:displayName,
      email:email
   }


   setUser(signedIn)
   setLoggedInUser(signedIn);
   history.replace(from);
   console.log(displayName,email)
  })
  .catch(error=>{
    console.log(error.code)
    console.log(error.message)
  })
 
}
// Facebook LOGIN
var fbProvider = new firebase.auth.FacebookAuthProvider();
const handleFbSignIn=()=>{
  firebase.auth().signInWithPopup(fbProvider)
  .then(function(result) {
    const {displayName} = result.user;
    const signedIn ={
       name:displayName,
    }
 
    setUser(signedIn)
    setLoggedInUser(signedIn);
    history.replace(from);
    console.log(displayName)
    // ...
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
   
    console.log(errorCode,errorMessage);
    // ...
  });
}
// updateName

const updateUserName = (firstName ,lastName) =>{
    var user = firebase.auth().currentUser;
  
  user.updateProfile({
    displayName: firstName , lastName
     
   
  }).then(function() {
    console.log('user name sent successfully')
  }).catch(function(error) {
    console.log(error)
  });
  }
    return (
  
        <div className="py-5 text-center  ">
            <div className="py-5  " >
                
            <form onSubmit={handleSubmit}  >
            <h4>{newUser ?"Create an account":"Login"}</h4>
            {newUser && <input onBlur={handleInput} type="text" name="firstName" placeholder="First Name" required/>}
                <br/><br/>
               {newUser && <input onBlur={handleInput} type="text" name="lastName" id="" placeholder="Last Name" required/>}
                <br/><br/>
                <input onBlur={handleInput} type="email" name="email" id="" placeholder="username or email" required/>
                <br/><br/>
                <input onBlur={handleInput} type="password" name="password" id="" placeholder="password" required/>
                <br/><br/>
              {newUser &&  <input onBlur={handleInput} type="password" name="confirmPassword" id="" placeholder="confirm password"/>}
                <br/><br/>
                <input className="AllButton" type="submit" value={newUser ?"Create an account":"Login"}/>
                <br/><br/> 
                {newUser ?<p>Already have an account? <button onClick={()=>setNewUser(!newUser)} className="newUserBtn">Login</button></p>:

            <p>Don't have an account? <button onClick={()=>setNewUser(!newUser)} className="newUserBtn">Create an account</button></p>

}
            </form>
            </div>
                <button onClick={handleSignIn} className="otherBtn ">
                    <img className="float-left" src={google} alt=""/><span>Continue to Google</span> 
                    
                    </button>  <br/><br/>
                    <button onClick={handleFbSignIn} className="otherBtn ">
                    <img className="" src={fb} alt=""/> <span>Continue to Facebook</span>
                    </button>                
             <p style={{color:"red"}}>{user.error}</p>
              {user.success &&  <p style={{color:"green"}}>User {newUser ? "Created" : "Logged In"} successfully</p> }

           
        </div>
    );
};

export default Login;