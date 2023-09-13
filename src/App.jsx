import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs'
import Bookmark from './components/bookmarkBar'
import SpendTime from './components/spendTime';



function App() {

  const [bookmark, setBookmark] = useState([]);
  const [spendTime, setSpendTime] = useState(0)

  const handleBookmark = ({title, reading_time})=>{
    setBookmark([...bookmark, title])
    setSpendTime(spendTime+reading_time)
  }

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
      </div>
      <div>
        <SpendTime data={spendTime}></SpendTime>
        <Bookmark data={bookmark}></Bookmark>
      </div>
    </div>
  )
}

export default App
