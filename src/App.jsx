import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app-window' className='w-screen h-screen bg-green-500 flex justify-center items-center'>
      <div id='game-window' className='flex absolute max-w-[1920px] max-h-[1080px] w-full h-full bg-green-700 overflow-hidden'>
        {/* <div id='game-area' className='flex w-full h-full'> */}

          <div id='deck' className='absolute w-52 h-52 bg-white'></div>

          <div id='help' className='absolute right-0 w-52 h-52 bg-white'></div>
          
          <div id='community' className='m-auto bg-black h-fit w-fit flex flex-row'>
            {[0,1,2,3,4].map((number, index) => (
              <div key={index} className='w-28 h-40 bg-white mx-4'>

              </div>
            ))}
          </div>

          <div id='hole' className='absolute'></div>

          <div id='chips' className='absolute bottom-0 h-52 w-52 bg-white'></div>

        {/* </div> */}

      </div>

    </div>
  )
}

export default App
