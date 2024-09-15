import React from 'react'

export const DeliveryCard = () => {
  return (
    <div className='w-auto h-[80%] p-10 rounded-xl grid place-content-center bg-[#fafafa] shadow-xl shadow-[#bbb5b5]'>
        <div className="w-96 text-start text-xl font-semibold tracking-wide flex-wrap">Find <span className='text-red-600'>deals</span>, <span className='text-green-600'>free delivery</span>, and more from our restaurant partners.</div>
        <div className='flex justify-end items-end p-2'><img className='w-44' src="./assets/bike.png" alt="" /></div>
    </div>
  )
}