import React from "react";

export const InputBox = ({ data }) => {
  const { placeholder, buttonText } = data;
  return (
    <div className="h-[60px] flex justify-between items-center sm:w-96 my-10 bg-[#F6F6F6] rounded-full">
      <input
        className="w-2/3 bg-transparent mx-4 text-sm md:text-lg sm:mx-5"
        type="text"
        placeholder={placeholder}
      />
      <div className="w-[120px] flex h-full justify-center items-center bg-[#E94339] hover:bg-[#c93830] cursor-pointer text-xs sm:text-sm font-bold tracking-wide text-white rounded-full">
        {buttonText}
      </div>
    </div>
  );
};
