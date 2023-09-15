import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let obj={
  name:'Sainath',
  age:23
}
let arr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-4'>Tailwind Test</h1>
      <Card username='Chaiaurcode' btnText='click me'/>
      <Card username='welcome to props'/>
      

    </>
  )
}

export default App
