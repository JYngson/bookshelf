import Navbar from "@/components/navbar/navbar"
import GoogleAuthButton from "@/components/auth/GoogleAuthButton"
import Lookup from "@/components/lookup/lookup";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";


export default async function Home() {
  const session = await getServerSession(authConfig)

  if(session && session.user?.name){
    
    let firstName = session.user.name.split(" ")[0];
    
    return(
      <div className='flex flex-col w-screen h-screen base'>
        <Navbar session={session} />
        <div className='flex flex-col h-full w-full justify-center items-center'>
        <h1 className='text-xl'>Welcome {firstName}!</h1>
          <Lookup />
        </div>
      </div>
    )
  } else {
    return(
      <div className='flex flex-col w-screen h-screen base'>
        <Navbar session={undefined} />
        <div className='flex h-full w-full justify-center items-center'>
          <div className='flex justify-center items-center p-10 w-fit h-1/4 bg-white/50 rounded-xl'>
            <GoogleAuthButton />
          </div>
        </div>
      </div>
    )
  }
}
