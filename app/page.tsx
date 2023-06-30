import Navbar from "@/components/navbar/navbar"
import {FcGoogle} from "react-icons/fc"

export default function Home() {
  return (
    <div className='flex flex-col w-screen h-screen base'>
      <Navbar/>
      <div className='flex h-full w-full justify-center items-center'>
        <div className='flex justify-center items-center p-10 w-fit h-1/4 bg-white/50 rounded-xl'>
          <button className='flex items-center w-64 h-12 bg-neutral-300 rounded-xl border-2 border-sky-400'>
            <FcGoogle className='h-5/6 w-1/4' />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  )
}
