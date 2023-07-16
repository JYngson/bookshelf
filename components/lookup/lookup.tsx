export default function Lookup() {
  return (
    <div className="w-2/6 bg-gray-800 p-6 mt-6 rounded-lg">
      <form className='flex flex-col'>
        <label className=''>Book Title</label>
        <input className='my-6 rounded-xl' type="text" id="bookTitle" name='title'></input>
        <label className=''>Author</label>
        <input className='my-6 rounded-xl' type="text" id="author" name='author'></input>
      </form>
    </div>
  )
}