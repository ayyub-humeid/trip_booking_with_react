import React from "react";
import hero from "../assets/hero.png";

const Gallery = () => {
  return (
    <div id="gallery" className="py-16 px-4 max-w-[1140px] w-full m-auto">
      <h2 className="text-center text-gray-700">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="h-full w-full object-cover" src={hero} alt="" />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={hero} alt="" />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={hero} alt="" />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={hero} alt="" />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
