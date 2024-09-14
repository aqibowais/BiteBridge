import React from 'react'

export const Card = ({data}) => {
  const {icon,title} = data;
  return (
    <div className='w-48 p-8 rounded-lg grid place-content-center bg-[#FAFAFA] shadow-lg shadow-[#bbb5b5]'>
        <div className='flex justify-center items-center rounded-full bg-white p-2'><img className='w-12' src={icon} alt="" /></div>
        <div className="text-center text-lg font-semibold tracking-wider flex-wrap">{title}</div>
    </div>
  )
}
