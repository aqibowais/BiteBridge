import React from 'react'
import { InputBox } from './input_box'
import { PiPlaceholder } from 'react-icons/pi'

export const SubscribeNewsLetter = () => {
  return (
    <div className='bg-[#FFEFEC] p-5 mt-20 justify-between grid place-items-center  md:flex'>
        <div className='w-[80%] text-center md:text-start'>
            <h1 className='font-bold text-5xl text-[#2E2C49]'>Subscribe to our newsletter</h1>
            <p className='text-slate-600'>Browse local restaurants and businesses for delivery by entering your address blow.</p>
        </div>
        <InputBox data={{placeholder:"Enter Your email",buttonText:"Send"}}/>
    </div>
  )
}
