'use client'
import { useState } from "react"

export default function Lookup() {
  const[author, setAuthor] = useState("")
  const[title, setTitle] = useState("")

  function handleSearch(){
    console.log(author, title);
  }

  return (
    <div className="w-2/6 bg-gray-800 p-6 mt-6 rounded-lg">
      <form className='flex flex-col' onSubmit={handleSearch}>
        <label>Book Title</label>
        <input 
          className='my-4 h-fit p-2 rounded-xl text-black' 
          type="text" 
          id="bookTitle" 
          name='title'
          placeholder='Book Title' 
          onChange={(e) => {setTitle(e.target.value)}}
        />
        <label>Author</label>
        <input 
          className='my-4 h-fit p-2 rounded-xl text-black' 
          type="text" 
          id="author" 
          name='author'
          placeholder='Author Name' 
          onChange={(e) => {setAuthor(e.target.value)}}
        />
        <button type="submit" className="self-end w-2/6 bg-blue-800 rounded-lg">Search!</button>
      </form>
    </div>
  )
}
