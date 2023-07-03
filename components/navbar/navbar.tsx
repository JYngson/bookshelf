import LoginLogout from "./loginLogout"
import Link from "next/link"

export default function Navbar(session:any) {
  return (
    <div className="absolute flex w-screen h-10 justify-end items-center bg-white/50">
      <Link href={"/"} className='mx-2'>Home</Link>
      <Link href={"/bookshelf"} className='mx-2'>Bookshelf</Link>
      <LoginLogout name={session?.session?.user.name} />
    </div>
  )
}
