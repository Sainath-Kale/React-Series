import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter]=useState(2)
  const addValue=()=>{
    setCounter(prevCounter => prevCounter + 1)
  
  }
  const removeValue=()=>{
    if (counter<1){
    setCounter(0)
    }
    else{
      setCounter(prevCounter => prevCounter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Count value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
