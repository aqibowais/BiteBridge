import React from "react";
import { Card } from "./card";

export const Quotes = () => {
  return (
    <div className="flex justify-center gap-10 items-center flex-wrap">
      <div className="mx-14 md:w-[40%]">
        <img className="w-8" src="./assets/commas.png" alt="" />
        <h1 className="font-medium text-lg tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
          reiciendis voluptatibus voluptatum quibusdam at, eum quod neque
          perferendis totam sit iusto illo doloremque adipisci doloribus quidem
          impedit officiis quia! Quas!
        </h1>
      </div>
      <div>
      <div className='w-full flex justify-center items-center gap-10 flex-wrap flex-row mx-auto my-8'>
          <Card data = {{icon:"./assets/pasta.png",title:"Pasta"}}/>
          <Card data = {{icon:"./assets/burger.png",title:"Burger"}}/>
          <Card data = {{icon:"./assets/desert.png",title:"Desert"}}/> 
          
        </div>
      </div>
    </div>
  );
};
