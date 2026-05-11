import React from "react";
import { useState } from "react";

const Booking = () => {
  // const [formData, setFormData] = useState(Array(0));
  return (
    <div id="deals" className="w-full max-w-[1140px] m-auto p-4">
      <form
        className="w-full items-center lg:flex lg:justify-between"
        action=""
      >
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="">Destination</label>
          <select
            className="p-2 lg:w-[300px] md:w-full border border-[1px] border-gray-300  rounded-md"
            name=""
            id=""
          >
            <option value="">Grand Antigua</option>
            <option value="">Key West</option>
            <option value="">Maldives</option>
            <option value="">Cozumel</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col my-2 p-2 lg:max-w-[250px]">
            <label htmlFor="">Check In</label>
            <input
              type="date"
              name=""
              id=""
              className="rounded-md border p-2 border-[1px] border-gray-300"
            />
          </div>
          <div className="flex flex-col my-2 p-2 lg:max-w-[250px]">
            <label htmlFor="">Check Out</label>
            <input
              type="date"
              name=""
              id=""
              className="rounded-md border p-2 border-[1px] border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label htmlFor="">Search</label>
          <button className="w-full transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
// git add src/components/Booking.jsx
