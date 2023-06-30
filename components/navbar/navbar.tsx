import Link from "next/link"

export default function Navbar() {
  return (
    <div className="absolute flex w-screen h-10 justify-center items-center bg-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/bookshelf"} className='mx-2'>Bookshelf</Link>
    </div>
  )
}
