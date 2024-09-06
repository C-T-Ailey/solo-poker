import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app-window' className='w-screen h-screen bg-green-500 flex justify-center items-center'>
      <div id='game-window' className='max-w-[1920px] max-h-[1080px] w-full h-full bg-green-700'>
        <div id='game-area' className='w-full h-full'>
          <div id='deck'></div>

          <div id='help'></div>
          
          <div id='greendale'></div>

          <div id='hole'></div>

          <div id='chips'></div>



        </div>

      </div>

    </div>
  )
}

export default App
