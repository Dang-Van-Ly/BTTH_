import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Mycomponent from "./components/Mycomponent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My component</h1>
      <div>
        <Mycomponent></Mycomponent>
      </div>
            
    </>
  )
}

export default App
