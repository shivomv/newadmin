import { useState } from 'react'
import './App.css'
import { FaTwitter, FaFacebook } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
    <FaTwitter className='m-3 text-danger fs-1'/>
    <FaFacebook  className='m-3 text-danger fs-1'/>
  </div>
    </>
  )
}

export default App
