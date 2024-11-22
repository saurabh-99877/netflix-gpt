import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { Validate } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
// import { useNavigate } from 'react-router-dom';
import { backgroundImg, userAvatar } from '../utils/constants';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [msg, setMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  }

  const handleButtonClick = () => {
    // console.log(email.current.value, password.current.value);
    const msg = Validate(email.current.value, password.current.value);
    // console.log(msg);
    setMsg(msg);

    if(msg) 
      return;

    if(!isSignIn) {
     //sign up
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // console.log(user);
    updateProfile(user, { 
      displayName: name.current.value, photoURL: userAvatar
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
       // Profile updated!
       // navigate("/browse");
    }).catch((error) => {
      // An error occurred
      setMsg(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setMsg(errorCode + "-" + errorMessage);
  });

    }
    else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user, "sing in");
    // navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMsg(errorCode + "-" + errorMessage);
  });
    }
  }

  return (
     <div className=''>
     <Header />
    <div className=''>
      <img src= {backgroundImg} alt="" width="" height="" className=''/>
    </div>
    <form action="" className='border-2 border-black w-[40%] absolute top-1/2 left-1/2
     -translate-x-1/2 -translate-y-1/2 z-10  px-20 py-16 gradient bg-black
     bg-opacity-80'
     onSubmit = {(e) => e.preventDefault()}
       >
      <h1 className='px-4 py-3 text-4xl font-bold text-white'>Sign <span>{isSignIn ? "In" : "Up"}</span></h1>
      <div className='flex flex-col items-center'>
        {!isSignIn && <input 
        type="text" 
        placeholder='Enter full Name' 
        ref = {name}
        className='px-3 py-4 w-[75%] m-4 rounded-md placeholder-gray-700'/>}
        <input 
        ref = {email}
        type="email" 
        className='px-3 py-4 w-[75%] m-4 rounded-md' 
        placeholder='Email or phone number'
        />
     
        <input 
        ref = {password}
        type="password"
         className='px-3 py-4 w-[75%] m-4 rounded-md' 
         placeholder='Password'
         />
        <button onClick = {handleButtonClick}
        className='px-3 py-4 w-[75%] m-4 bg-red-600 rounded-md text-white'>
          {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <h2 className='text-orange-500 font-bold text-lg'>{msg}</h2>
        <h3
         className='text-xl'>
          OR
          </h3>
        {/* <button 
        className='px-3 py-4 w-[75%] m-4 bg-red-600 rounded-md text-white'>Use a sign-in code
          </button> */}
        <h3 
        className='w-[70%] mx-[140px] text-xl'>Forgot Password?
        </h3>
        <input
         type="radio" 
         className='self-start'
         />
        <label 
        htmlFor="" 
        className='self-start text-xl mb-2 text-white'> Remember me
        </label>
        <h2 
        className='self-start text-xl text-white'>{isSignIn ? "New to Netflix?" : "Already a user?"} 
        <b className="cursor-pointer"  onClick = {handleClick}>{isSignIn ? "Sign up now" : "Already a user Sign in"}</b></h2>
      </div>
    </form>
    </div>
  )
}

export default Login;