import React from 'react'
import Header from './Header'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux'

const Browser = () => {
   const dispatch = useDispatch();
        useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("Dispatching addUser...");
            const {uid,email,displayName } = user;
            dispatch(addUser({uid: uid,email: email, displayName: displayName  }));
          } else {
              dispatch(removeUser());
            }
          });
      },[]);
  
  return (
   <Header />
  )
}

export default Browser;