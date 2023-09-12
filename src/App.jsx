import './App.css'
import Blogs from './components/blogs'


function App() {

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <Blogs></Blogs>
      </div>
    </div>
  )
}

export default App
