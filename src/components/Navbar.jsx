import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] items-center flex justify-between bg-gray-700/80 absolute text-white z-10">
      <ul className="hidden sm:flex px-4">
        <li className="relative group">
          <a href="/" className="transition-colors duration-200 hover:text-[var(--primary-light)]">Home</a>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--primary-light)] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#gallery" className="transition-colors duration-200 hover:text-[var(--primary-light)]">Gallery</a>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--primary-light)] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#deals" className="transition-colors duration-200 hover:text-[var(--primary-light)]">Deals</a>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--primary-light)] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#contact" className="transition-colors duration-200 hover:text-[var(--primary-light)]">Contact</a>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--primary-light)] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4 cursor-pointer hover:text-[var(--primary-light)] transition-colors duration-200 hover:scale-125 transform" />
        <FaTwitter className="mx-4 cursor-pointer hover:text-[var(--primary-light)] transition-colors duration-200 hover:scale-125 transform" />
        <FaGooglePlusG className="mx-4 cursor-pointer hover:text-[var(--primary-light)] transition-colors duration-200 hover:scale-125 transform" />
        <FaInstagram className="mx-4 cursor-pointer hover:text-[var(--primary-light)] transition-colors duration-200 hover:scale-125 transform" />
      </div>
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col  items-center"
            : "absolute top-0 left-[-100%]  h-screen ease-in duration-500"
        }
      >
        <ul>
          <li className="text-2xl py-8 hover:text-gray-100">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8 hover:text-gray-100">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8 hover:text-gray-100">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8 hover:text-gray-100">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
