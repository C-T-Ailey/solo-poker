import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

export default function Help(props) {
  return (
    <div id='help-container' className={`${props.showHelp ? 'visible' : 'invisible'} flex absolute w-full h-full bg-[rgba(0,0,0,0.6)]`}>
        <div>
            <MdOutlineCancel className='absolute top-4 right-4 text-white' size={42} onClick={() => props.setShowHelp(!props.showHelp)}/>
        </div>
        <div id='help-window' className='h-[90%] w-[90%] m-auto bg-green-800 rounded-lg border-white border-8 overflow-y-scroll'>
            
        </div>
    </div>
  )
}
