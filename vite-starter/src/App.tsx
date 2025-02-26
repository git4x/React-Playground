import { useState } from 'react'
import './App.css'
import { FunctionInitialzier } from './FunctionInitialzier'

function App() {
  console.log('render', Math.random())
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((prev) => {
      console.log("inside......" + prev)
      return prev + 1
    })
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button> 
      </div>

      <FunctionInitialzier />
    </>
  )
}

export default App
