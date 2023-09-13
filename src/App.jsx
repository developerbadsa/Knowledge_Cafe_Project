import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs'
import Bookmark from './components/bookmarkBar'
import SpendTime from './components/spendTime';
import Header from './components/Header'



function App() {

  const [bookmark, setBookmark] = useState([]);
  const [spendTime, setSpendTime] = useState(0)

  const handleBookmark = ({title, reading_time})=>{
    setBookmark([...bookmark, title])
    setSpendTime(spendTime+reading_time)
  }

  return (
   <>
   <Header></Header>
   <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
      </div>
      <div className='my-12'>
        <SpendTime data={spendTime}></SpendTime>
        <Bookmark data={bookmark}></Bookmark>
      </div>
    </div>
   </>
  )
}

export default App
