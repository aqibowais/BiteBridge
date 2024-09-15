import React from 'react'
import { Quotes } from './quotes'
import { IoChevronBackCircleOutline,IoChevronForwardCircleSharp } from "react-icons/io5";
export const ClientFeedback = () => {
  return (
    <div>
        <div className='justify-center items-center my-10'>
            <div className='text-center mx-10'>
            <h1 className='font-bold text-5xl text-center text-[#2E2C49]'>Our Clients Feedback</h1>
            <p>The food at your doorstep. Why starve when you have us. You hunger partner.</p>
            <p>Straight out of the oven to your doorstep.</p>
        
            </div>
        </div>
        <Quotes/>

        <div className='text-center m-5'>
            <h1 className='font-bold tracking-wide text-lg'>Mitchell Marsh</h1>
            <p className='text-slate-500'>CEO, Bexon Agency</p>
            <div className='flex text-2xl gap-2 text-[#FF5331] justify-center items-center'>
                <IoChevronBackCircleOutline />
                <IoChevronForwardCircleSharp />
            </div>
        </div>
    </div>
  )
}
