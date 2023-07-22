import LoginLogout from "./loginLogout";
import Link from "next/link";
import { getServerSession } from "next-auth";
import {authConfig} from "@/lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authConfig)
  console.log(session);
  return (
    <div className="absolute flex w-screen h-10 justify-end items-center bg-white/50">
      <Link href={"/"} className='mx-2'>Home</Link>
      <Link href={"/bookshelf"} className='mx-2'>Bookshelf</Link>
      <LoginLogout />
    </div>
  )
}
