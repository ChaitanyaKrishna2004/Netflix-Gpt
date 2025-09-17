import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);  
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () =>{
    // Validate the form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
  }
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  }
  return (
    <div>
      <Header />  
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"  alt="Background-Image"/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 bg-gray-700 text-white w-full rounded-sm'/>}
       
        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-4 bg-gray-700 text-white w-full rounded-sm'/>
       
        <input ref={password} type='password' placeholder='Password' className='p-2 my-4 bg-gray-700 text-white w-full rounded-sm'/>
          
        {errorMessage != "PasswordVaild" && (
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        )}
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "sign Up"}</button>
        
        <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?" : "Already a user"} <span className='cursor-pointer hover:underline hover:underline-offset-4'>{isSignInForm ? "Sign Up Now": "sign In Now"}.</span></p>
      </form>
    </div>
  )
}

export default Login