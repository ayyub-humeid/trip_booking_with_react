import React from "react";
import hero from "../assets/hero.png";
const Contact = () => {
  return (
    <div id="contact" className="w-full max-w-[1140px] p-4 py-16 m-auto">
      <h2 className="text-center text-gray-700 font-bold">
        Send us a message{" "}
      </h2>
      <p className="text-center text-gray-700 py-2">We're Standing By</p>

      <div className="grid md:grid-cols-2">
        <img
          src={hero}
          alt=""
          className="w-full md:h-full p-2 h-[200px] max-h-[500px] object-cover"
        />

        <form action="" className="grid grid-cols-2 ">
          <input
            className="border m-2 p-2 border-[#edeaea]"
            type="text"
            placeholder="First"
          />
          <input
            className="border m-2 p-2 border-[#edeaea] "
            type="text"
            placeholder="Last"
          />

          <input
            className="m-2 p-2 border border-[#edeaea]"
            type="text"
            placeholder="Email"
          />
          <input
            className="m-2 p-2 border border-[#edeaea]"
            type="text"
            placeholder="Phone"
          />
          <input
            className="m-2 p-2 col-span-2 border border-[#edeaea]"
            type="text"
            placeholder="Address"
          />
          <textarea
            value={"type your message here"}
            className="col-span-2 m-2 p-2 text-gray-400  border border-[#edeaea]"
            cols="30"
            rows="10"
            name=""
            id=""
          ></textarea>
          <button className="col-span-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
