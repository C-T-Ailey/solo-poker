import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gambler from './assets/8bitgambler.mp3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app-window' className='w-screen h-screen bg-green-500 flex justify-center items-center'>
      <div className='text-black text-xl absolute top-8'>
        well la-di-da mr high resolution monitor
        <audio src={gambler} controls/>
      </div>
      <div id='game-window' className='flex absolute max-w-[1920px] max-h-[1080px] w-full h-full bg-green-700 overflow-hidden'>
        {/* <div id='game-area' className='flex w-full h-full'> */}

          <div id='deck' className='absolute w-52 h-52 bg-white'>
            Deck
          </div>

          <div id='help' className='absolute right-0 w-52 h-52 bg-white'>
            Help
          </div>
          
          <div id='community' className='m-auto h-fit w-fit flex flex-row'>
            {[1,2,3,4,5].map((number, index) => (
              <div key={index} className='w-28 h-40 rounded-lg border-white border-dashed border-4 opacity-75 mx-4 flex items-center justify-center text-white'>
                {number}
              </div>
            ))}
          </div>

          <div id='hole' className='absolute bottom-0 w-52 h-52 right-0 bg-white'>
            Hole cards
          </div>

          <div id='chips' className='absolute flex bottom-0 h-52 w-52 bg-white'>
            Chips and betting
          </div>

        {/* </div> */}

      </div>

    </div>
  )
}

export default App
