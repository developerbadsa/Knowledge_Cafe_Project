import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs'
import Bookmark from './components/bookmarkBar'


function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (data)=>{
    //console.log(data)
    setBookmark([...bookmark, data])
  }

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
      </div>
      <div>
        <Bookmark data={bookmark}></Bookmark>
      </div>
    </div>
  )
}

export default App
