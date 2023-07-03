import Navbar from "@/components/navbar/navbar"
import GoogleAuthButton from "@/components/auth/GoogleAuthButton"
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authConfig);
  console.log(session);
  if(session){
    return(
      <div className='flex flex-col w-screen h-screen base'>
        <Navbar/>
        <div className='flex h-full w-full justify-center items-center'>
          <h1>Logged In.</h1>
        </div>
      </div>
    )
  } else {
    return(
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
}
