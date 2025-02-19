import React from "react";
import './Button.css'
const CustomButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors 
      before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left 
      before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] 
      hover:text-white before:hover:scale-x-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;