import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const TestDate=import.meta?.env?.Test
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {TestDate}
    </>
  )
}

export default App
