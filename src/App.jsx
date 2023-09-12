import './App.css'
import Blogs from './components/blogs'
import Bookmark from './components/bookmarkBar'


function App() {

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <Blogs></Blogs>
      </div>
      <div>
        <Bookmark></Bookmark>
      </div>
    </div>
  )
}

export default App
