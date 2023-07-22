'use client'
import { signOut } from "next-auth/react"

export default function LoginLogout(name:any) {
  const handleSignOut = () => {
    signOut()
  }
  
  return (
    <div className='mx-2 px-2 rounded-md bg-sky-600 border-2 border-slate-600'>
      <button onClick={handleSignOut} >Log Out</button>
    </div>
  )
}
