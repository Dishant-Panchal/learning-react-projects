import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let userObj = {
      name:"Isabell",
      detail: "Software Engineer with 6 yrs experience"
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Card user={userObj}/>
    </>
  )
}

export default App
