import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <BsChatSquareDots
          className="text-[var(--primary-dark)]"
          size={30}
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex ">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mx-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone
            size={20}
            className="mx-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">1-888-817-1234</p>
        </div>
        <button className="transition-transform duration-200 hover:scale-105 hover:shadow-lg">Get a free quote</button>
      </div>
    </div>
  );
};

export default TopBar;
