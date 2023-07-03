"use client"
import {FcGoogle} from "react-icons/fc"
import {signIn} from "next-auth/react"

export default function GoogleAuthButton() {
  const handleClick = () => {
    signIn("google")
  }
  return (
    <button 
      className='flex items-center justify-center w-64 h-12 bg-neutral-300 rounded-xl border-2 border-sky-400'
      onClick={handleClick}
    >
      <FcGoogle className='h-5/6 w-1/4'/>
      <p className='m-auto w-3/4 text-center text-slate-800'>
        Log in with Google
      </p>
    </button>
  )
}
