import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSingForm, setIsSingForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSingForm(!isSingForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"  alt="Background-Image"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSingForm ? "Sign In": "Sign Up"}</h1>
        {!isSingForm && <input type='text' placeholder='Full Name' className='p-2 my-4 bg-gray-700 text-white w-full rounded-sm'/>}
        <input type='text' placeholder='Email Address' className='p-2 my-4 bg-gray-700 text-white w-full rounded-sm'/>
        <input type='password' placeholder='Password' className='p-2 my-4 bg-gray-700 text-white w-full rounded-sm'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSingForm ? "Sign In" : "Sing Up"}</button>
        <p className='py-4' onClick={toggleSignInForm}>{isSingForm ? "New to Netflix?" : "Already a user"} <span className='cursor-pointer hover:underline hover:underline-offset-4'>{isSingForm ? "Sign Up Now": "Sing In Now"}.</span></p>
      </form>
    </div>
  )
}

export default Login