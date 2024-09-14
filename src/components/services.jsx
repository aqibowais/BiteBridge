import React from 'react'
import { Card } from './card'

export const Services = () => {
  return (
    <div className='justify-center items-center'>
        <h1 className='font-bold text-5xl text-center text-[#2E2C49]'>How To Order?</h1>
        <div className='w-full flex justify-center items-center gap-10 flex-wrap flex-row mx-auto my-8'>
          <Card data = {{icon:"./assets/pin.png",title:"Choose your location"}}/>
          <Card data = {{icon:"./assets/child.png",title:"Choose what to eat"}}/> 
          <Card data = {{icon:"./assets/burger.png",title:"May your first order"}}/>
          <Card data = {{icon:"./assets/home.png",title:"Now! Your food in way"}}/> 
          
        </div>
    </div>
  )
}
