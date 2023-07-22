import Navbar from "../navbar/navbar"
import GoogleAuthButton from "../auth/GoogleAuthButton"

export default function Login() {
  return (
    <div className='flex w-screen h-screen justify-center items-center base'>
        <div className='flex justify-center items-center p-10 w-fit h-1/4 bg-white/50 rounded-xl'>
          <GoogleAuthButton />
        </div>
  </div>
  )
}
