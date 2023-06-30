import Navbar from "@/components/navbar/navbar"
import GoogleAuthButton from "@/components/auth/GoogleAuthButton"

export default function Home() {
  return (
    <div className='flex flex-col w-screen h-screen base'>
      <Navbar/>
      <div className='flex h-full w-full justify-center items-center'>
        <div className='flex justify-center items-center p-10 w-fit h-1/4 bg-white/50 rounded-xl'>
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  )
}
