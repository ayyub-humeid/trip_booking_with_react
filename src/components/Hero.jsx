import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        alt="Beach Resort"
      />
      <div className="max-w-[1140px] mx-auto">
        <div className="absolute top-[30%] w-full max-w-[600px] h-full flex flex-col text-white p-6 bg-[#0077be]/40 backdrop-blur-sm rounded-lg max-h-[320px] shadow-lg">
          <h1 className="font-bold text-4xl animate-fadeInUp">find your special trip!</h1>
          <h2 className="text-4xl italic py-4 animate-fadeInUp animate-delay-200">With Weekaway</h2>
          <p className="animate-fadeInUp animate-delay-400">
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
