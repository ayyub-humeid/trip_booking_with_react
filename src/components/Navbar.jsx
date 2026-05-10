import React, { useState } from "react";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaGooglePlusG,
//     FaInstagram,
// FaBars
// } from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    console.log("sdsd");
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] items-center flex justify-between bg-gray-700/80 absolute text-white z-10">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        {/* <FaFacebookF /> 
        <FaTwitter />
        <FaGooglePlusG />
        <FaInstagram /> */}
        <span className="mx-4">f</span>
        <span className="mx-4">t</span>
        <span className="mx-4">g</span>
        <span className="mx-4">inst</span>
      </div>
      <div onClick={handleNav} className="sm:hidden z-10">
        {/* <FaBar size={20} className="mr-4 cursor-pointer"/> */}
        <span>___</span>
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
