import Link from 'next/link'

export default function Bookshelf() {
  return (
    <div className='base'>
      <Link href={"/"}>To: Home Page</Link>
      <h1>You are on the Bookshelf Page</h1>
    </div>
  )
}
