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
     <div className='relative'>
     <Header />
    <div className=''>
      <img src= {backgroundImg} alt="background_image"  className='w-full  object-cover fixed h-screen '/>
    </div>

 <form action="" className='w-[300px] md:w-[400px]  absolute top-[22em] sm:top-[25em] md:top-[22em] left-1/2
-translate-x-1/2 -translate-y-1/2 z-10 py-3 lg:p-5 gradient bg-black/65  
'
onSubmit = {(e) => e.preventDefault()}
  >
 <h1 className='px-4 py-3 md:text-3xl font-bold text-white text-center'>Sign <span>{isSignIn ? "In" : "Up"}</span></h1>
 <div className='flex flex-col items-center md:text-lg'>
   {!isSignIn && <input 
   type="text" 
   placeholder='Enter full Name'   
   ref = {name}
   className='p-2 sm:px-3 sm:py-4 md:p-2  w-[75%] md:w-[65%] m-4 rounded-md lg:p-2 placeholder-gray-700'/>}
   <input   
   ref = {email}
   type="email" 
   className='p-2 md:p-2 w-[75%] md:w-[65%] m-4 rounded-md lg:p-2 placeholder-gray-700' 
   placeholder='Email or phone number'
   />

   <input 
   ref = {password}
   type="password"
    className='p-2 md:p-2 w-[75%] md:w-[65%] m-4 rounded-md relative lg:px-2' 
    placeholder='Password'
    />
    <div className='sm:w-[75%] w-[45%] md:w-[65%] ml-auto sm:ml-0'>
   <button onClick = {handleButtonClick}
   className='px-5 py-3 sm:px-3 sm:py-4 md:px-1 md:py-2 lg:p-2 sm:w-full my-4 bg-red-600 rounded-md text-white'>
     {isSignIn ? "Sign In" : "Sign Up"}
     </button>
     </div>
     <h2 className='text-orange-500 font-bold text-lg'>{msg}</h2>
 
   <h2 
   className='md:text-lg text-white'>{isSignIn ? "New to Netflix?" : "Already a user?"} 
   <b className="cursor-pointer"  onClick = {handleClick}>{isSignIn ? "Sign up now" : "Already a user Sign in"}</b></h2>
 </div>
</form> 
    </div>
  )
}

export default Login;

