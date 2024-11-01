import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  }
  return (
     <div className=''>
     <Header />
    <div className=''>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg" alt="" width="" height="" className=''/>
    </div>
    <form action="" className='border-2 border-black w-[40%] absolute top-1/2 left-1/2
     -translate-x-1/2 -translate-y-1/2 z-10  px-20 py-16 gradient bg-black
     bg-opacity-80

       '>
      <h1 className='px-4 py-3 text-4xl font-bold text-white'>Sign <span>{isSignIn ? "In" : "Up"}</span></h1>
      <div className='flex flex-col items-center'>
        {!isSignIn && <input type="text" placeholder='Enter full Name' className='px-3 py-4 w-[75%] m-4 rounded-md placeholder-gray-700'/>}
        <input type="text" className='px-3 py-4 w-[75%] m-4 rounded-md' placeholder='Email or phone number'/>
        <input type="password" className='px-3 py-4 w-[75%] m-4 rounded-md' placeholder='Password'/>
        <button className='px-3 py-4 w-[75%] m-4 bg-red-600 rounded-md text-white'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <h3 className='text-xl'>OR</h3>
        <button className='px-3 py-4 w-[75%] m-4 bg-red-600 rounded-md text-white'>Use a sign-in code</button>
        <h3 className='w-[70%] mx-[140px] text-xl'>Forgot Password?</h3>
        <input type="radio" className='self-start'/>
        <label htmlFor="" className='self-start text-xl mb-2 text-white'> Remember me</label>
        <h2 className='self-start text-xl text-white'>{isSignIn ? "New to Netflix?" : "Already a user?"} <b className="cursor-pointer"  onClick = {handleClick}>{isSignIn ? "Sign up now" : "Already a user Sign in"}</b></h2>
      </div>
    </form>
    </div>
  )
}

export default Login;