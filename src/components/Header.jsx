import React from 'react';
import { useEffect } from 'react';
import { Logo } from '../utils/constants';
import { userAvatar } from '../utils/constants';
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';
const Header = () => {
  const navigate = useNavigate();    
  const user = useSelector((store) => store.user); 
  // console.log(user, "selector");
  const dispatch = useDispatch();

  // console.log(user, "lol");
  // console.log(auth, 'auth');
  const location = useLocation();
  //  console.log(location,"location");
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
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
    <div className='absolute bg-gradient-to-b from-black p-5 flex z-10'>
      <div>
      <img src={Logo} alt="netflix-logo" width="17%" />
    </div>
    {user && (
      <div className='flex gap-5 mx-4 w-1/4 justify-end'>
      <div className='shrink-0'>
     <button className='text-white text-xl font-bold bg-[#780000] rounded-md px-4 py-2 mt-2'
        onClick = {handleSignOut} >
      Sign Out
      </button>
     </div>
     <div className='w-16 shrink-0'>
     <img src={ user.photoURL } alt="" className='w-full h-16 rounded-full'/>
     </div>
   </div>
    )
}
    </div>
  )
}

export default Header