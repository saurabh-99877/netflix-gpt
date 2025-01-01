import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Logo } from '../utils/constants';
import { userAvatar } from '../utils/constants';
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
import { toggleIcons } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();    
  const user = useSelector((store) => store.user); 
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const lang = useRef(null);
  const toogle = useSelector((store) => store.config.showIcons);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 650);
  // console.log(isSmall, "issmall")i
  // console.log(lang.current.value, "lang");
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    dispatch(toggleIcons());
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }
  
  const handleChangeLanguage = (e) => {
    // console.log(e.target.value);
    // console.log(lang.current,lang.current.value, "lang.current.value");
    dispatch(changeLanguage(lang.current.value));
  }

  const handleClose = (e) => {
   e.target.parentElement.style.padding = '0';
   e.target.parentElement.style.width = '0';
   dispatch(toggleIcons());
  }
 useEffect(() => {
  const handleResize = () => {
    setIsSmall(window.innerWidth < 650);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener('resize', handleResize);
 })

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
          // console.log(user, "i am user");
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
         navigate("/browse");
        } else {
          // User is signed out
         dispatch(removeUser());
         navigate("/");
        }
      });
        return () => unsubscribe();
   }, []);


  return ( 
    <div  
  className={`absolute py-4 sm:p-5 flex justify-between z-10 w-full bg-gradient-to-b from-black
   ${!user && `h-screen`} `}  
>

      <div className='shrink-0 w-[28px] h-[50px] sm:w-auto mx-3'>
      <img src={Logo} alt="netflix-logo"
       className='h-full  object-cover object-left sm:w-[180px] md:w-[200px] lg:w-[200px] '/>
    </div>
    {user && (
      <div className='flex gap-5 mx-1 lg:w-2/4 justify-end'>
        {showGpt && (
          <div>
            <select name="languages" id="" onChange={handleChangeLanguage} ref={lang}
            className='text-white md:text-lg font-bold bg-blue-500 outline-none rounded-md p-1 md:p-2 mt-2'>
              {
              SUPPORTED_LANGUAGES.map((lang) => <option key={lang.IDENTIFIER} value={lang.IDENTIFIER}>{lang.NAME}</option>
                )
              }
            </select>
          </div>
        )}
   { !isSmall && (<div className='shrink-0'>
     <button className='text-white md:text-lg  font-bold bg-[#780000] rounded-md px-2 py-1 md:px-3 md:py-2 mt-2
      hover:bg-gradient-to-r from-red-400 to-orange-500'
        onClick = {handleSignOut} >
      Sign Out
      </button>
     </div>
   )
   }

<div className='shrink-0'>
      <button className='text-white md:text-lg font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500
       hover:to-yellow-500 rounded-md px-2 py-1 md:px-3 md:py-2 mt-2'
      onClick = {handleGptSearch}>{showGpt ? "Home" : "Netflix Gpt"}</button>
      </div>

     {!isSmall && (<div className='shrink-0 mt-3 lg:mt-3'>
     <img src={ user.photoURL } alt="" className='h-8 lg:h-10 rounded-full'/>
     </div>
     )
    }

   {isSmall && toogle && <div className="parent fixed left-0 top-0  bg-black max-w-[170px] h-full p-8  overflow-x-hidden ">
    <button className='text-white absolute right-2 top-2 text-xl' 
    onClick = {handleClose}>x</button>
    { toogle && (<div className='shrink-0 my-3 sm:mt-2 lg:mt-3'>
      <img src={ user.photoURL } alt="" className='h-8 lg:h-10 rounded-full'/>
      </div>
      )
     }
       {
    toogle && (<div className='shrink-0'>
      <button className='text-white font-bold bg-[#780000] rounded-md px-2 py-1 mt-2'
         onClick = {handleSignOut} >
       Sign Out
       </button>
      </div>
 )
   }
     </div>
}

    {
    isSmall  && (<div className=''>
      <button className='text-white md:text-xl font-bold bg-cyan-700 rounded-md px-2 py-1 md:px-4 md:py-2 mt-2'
      onClick = {() => {dispatch(toggleIcons())
      }}>☰</button>
     </div>)  
}
   </div>
   
    )
}
    </div>
  )
}

export default Header