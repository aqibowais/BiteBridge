import React from 'react'
import { Card } from './card'
import { DeliveryCard } from './delivery_card'

export const AdvertisingSection = () => {
  return (
    <div className=' justify-center items-center'>
      {/* content */}
        <div className='text-center'>
            <h1 className='font-bold text-4xl mb-4'>MORE THAN <span className='text-[#FF5331]'>10,000</span> DISHES <br /> TO ORDER!</h1>
            <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
        </div>
        {/* cards */}
        <div className='w-full flex justify-center items-center gap-10 flex-wrap flex-row mx-auto my-8'>
          <Card data = {{icon:"./assets/pizza.png",title:"Pizza"}}/>
          <Card data = {{icon:"./assets/burger.png",title:"Burger"}}/>
          <Card data = {{icon:"./assets/sushi.png",title:"Sushi"}}/> 
          <DeliveryCard/>
        </div>
    </div>
  )
}
