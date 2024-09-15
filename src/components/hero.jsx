import React from "react";
import { InputBox } from "./input_box";
import { PlayStoreButton } from "./play_store_button";
import { FaApple,FaGooglePlay } from "react-icons/fa";

export const Hero = () => {
  return (
  
    <div className="  block items-center p-5 h-auto w-full md:p-10 md:flex md:justify-around md:items-start">
      {/* Content seciton */}
      <div className="h-auto w-4/5 mx-auto md:w-[50%]">
        <p className="font-semibold text-center text-3xl md:text-5xl md:text-start tracking-wide">
          Your Favorite Food Delivery Partner
        </p>
        <p className=" text-lg text-center tracking-wide my-5 text-[#191720] md:block md:text-start md:text-xl">
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.{" "}
        </p>
        <div className="flex justify-center items-center md:justify-start">
        <InputBox
          data={{
            placeholder: "Enter You delivery Location",
            buttonText: "Order Now",
          }}
        />
        </div>
        <div className="justify-center items-center flex gap-5 md:justify-start">
          <PlayStoreButton data={{title:"App Store",icon:< FaApple />}}/>
          <PlayStoreButton data={{title:"Play Store",icon:<FaGooglePlay/>}}/>
        </div>
      </div>
      {/* Image Section */}
      <div className="bg-[#F2EBDA] rounded-xl md:w-[40%]">
        <div className="items-center">
          <img src="./assets/deliveryboy.png" alt="" />
        </div>
      </div>
    </div>
  );
};
