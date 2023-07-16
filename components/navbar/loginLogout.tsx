"use client"

import { signIn, signOut } from "next-auth/react"

export default function LoginLogout(name:any) {
  const handleSignOut = () => {
    signOut()
  }
  const handleSignIn = () => {
    signIn("google")
  }
  
  if(name) {
    return(
      <div className='mx-2 px-2 rounded-md bg-sky-600 border-2 border-slate-600'>
        <button onClick={handleSignOut} >Log Out</button>
      </div>
    )
  } else {
    return (
      <div className='mx-2 px-2 rounded-md bg-sky-600 border-2 border-slate-600'>
        <button onClick={handleSignIn}>Log In</button>
      </div>
    )
  }
}
