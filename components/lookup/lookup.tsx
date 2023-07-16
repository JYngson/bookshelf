'use client'
import { useState } from "react"

export default function Lookup() {
  const[author, setAuthor] = useState("")
  const[title, setTitle] = useState("")

  function handleSearch(){

  }

  return (
    <div className="w-2/6 bg-gray-800 p-6 mt-6 rounded-lg">
      <form className='flex flex-col'>
        <label>Book Title</label>
        <input 
          className='my-6 h-fit p-2 rounded-xl text-black' 
          type="text" 
          id="bookTitle" 
          name='title'
          placeholder='Book Title' 
        />
        <label>Author</label>
        <input 
          className='my-6 h-fit p-2 rounded-xl text-black' 
          type="text" 
          id="author" 
          name='author'
          placeholder='Author Name' 
        />
      </form>
    </div>
  )
}
