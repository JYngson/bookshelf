import Navbar from "@/components/navbar/navbar"
import Lookup from "@/components/lookup/lookup";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authConfig)
  let firstName = session?.user?.name?.split(" ")[0];
  console.log(session);
  return (
    <div className='flex flex-col w-screen h-screen base'>
      <Navbar />
      <div className='flex flex-col h-full w-full justify-center items-center'>
        <h1 className='text-xl'>Welcome, {firstName}!</h1>
        <Lookup />
      </div>
    </div>
  )
}

