import React from 'react';
import { PlayStoreButton } from './play_store_button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { FooterDetails } from './footer_details'; 

export const Footer = () => {
    return (
        <div className="w-full flex flex-wrap justify-around sm:flex mt-20 bg-black p-5">
            <div className=''>
                <div className='flex items-center justify-center sm:justify-start'>
                    <img className="w-10" src='./assets/pizza.png' alt="logo" />
                    <h1 className='font-bold text-xl text-[#da3c33] tracking-wide'>BiteBridge</h1>
                </div>
                <div className="justify-center items-center flex flex-wrap gap-2 md:justify-start">
                    <PlayStoreButton data={{ title: "App Store", icon: <FaApple /> }} />
                    <PlayStoreButton data={{ title: "Play Store", icon: <FaGooglePlay /> }} />
                </div>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <FooterDetails />
            </div>
        </div>
    );
};
