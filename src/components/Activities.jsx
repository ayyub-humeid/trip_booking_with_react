import React from "react";
import herpImage from "../assets/hero.png";
const Activities = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto mt-[-75px] md:flex bg-amber-200">
      <div className="relative p-4">
        <h3 className="z-10 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] text-white font-bold text-2xl">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl"
          src={herpImage}
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="z-10 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] text-white font-bold text-2xl">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl"
          src={herpImage}
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="z-10 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] text-white font-bold text-2xl">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl"
          src={herpImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
