import React from "react";
import heroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img className="w-full h-full object-cover" src={heroImage} alt="" />
      <div className="max-w-[1140px] mx-auto">
        <div className="absolute top-[40%] w-full max-w-[600px] h-full flex flex-col text-black p-4 ">
          <h1 className="font-bold text-4xl">find your special trip!</h1>
          <h2 className="text-4xl italic py-4">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            natus et iste quas veritatis. Voluptate amet sapiente magni vitae
            tempora provident voluptatem, cum voluptatum sequi numquam quos
            doloribus fugiat quia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
