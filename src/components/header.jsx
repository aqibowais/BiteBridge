import { useState } from 'react';
import {Button} from './button.jsx'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  return (
    <div className="flex justify-between items-center mx-6 p-4 sm:p-8">
      <h1 className="font-bold text-3xl">🍕</h1>
      <ul className="hidden sm:flex sm:gap-4 text-[#191720] font-semibold">
        <li>Restaurants</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Page</li>
      </ul>
      <ul className="hidden sm:flex sm:gap-4 items-center">
        <li className="font-bold">Login</li>
        <Button/>
      </ul>
      <div className="sm:hidden font-bold text-2xl" onClick={toggleDropDown}>
        {isOpen ? '✖' : '☰'} 
      </div>

      {isOpen && (
        <ul className="absolute top-16 right-10 bg-white shadow-lg p-4 rounded-lg flex flex-col gap-2 sm:hidden">
          <li>Restaurants</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Page</li>
          <li className="font-bold">Login</li>
        </ul>
      )}
    </div>
  );
};
