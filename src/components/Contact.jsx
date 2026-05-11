const Contact = () => {
  return (
    <div id="contact" className="w-full max-w-[1140px] p-4 py-16 m-auto">
      <h2 className="text-center text-gray-700 font-bold">
        Send us a message{" "}
      </h2>
      <p className="text-center text-gray-700 py-2">We're Standing By</p>

      <div className="grid md:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="/"
            className="w-full md:h-full p-2 h-[200px] max-h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <form action="" className="grid grid-cols-2 ">
          <input
            className="border m-2 p-2 border-[#edeaea] transition-all duration-200 focus:outline-none focus:border-[var(--primary-dark)] focus:ring-2 focus:ring-[var(--primary-light)]/30 rounded"
            type="text"
            placeholder="First"
          />
          <input
            className="border m-2 p-2 border-[#edeaea] transition-all duration-200 focus:outline-none focus:border-[var(--primary-dark)] focus:ring-2 focus:ring-[var(--primary-light)]/30 rounded"
            type="text"
            placeholder="Last"
          />

          <input
            className="m-2 p-2 border border-[#edeaea] transition-all duration-200 focus:outline-none focus:border-[var(--primary-dark)] focus:ring-2 focus:ring-[var(--primary-light)]/30 rounded"
            type="text"
            placeholder="Email"
          />
          <input
            className="m-2 p-2 border border-[#edeaea] transition-all duration-200 focus:outline-none focus:border-[var(--primary-dark)] focus:ring-2 focus:ring-[var(--primary-light)]/30 rounded"
            type="text"
            placeholder="Phone"
          />
          <input
            className="m-2 p-2 col-span-2 border border-[#edeaea] transition-all duration-200 focus:outline-none focus:border-[var(--primary-dark)] focus:ring-2 focus:ring-[var(--primary-light)]/30 rounded"
            type="text"
            placeholder="Address"
          />
          <textarea
            value={"type your message here"}
            className="col-span-2 m-2 p-2 text-gray-400 border border-[#edeaea] transition-all duration-200 focus:outline-none focus:border-[var(--primary-dark)] focus:ring-2 focus:ring-[var(--primary-light)]/30 rounded"
            cols="30"
            rows="10"
            name=""
            id=""
          ></textarea>
          <button className="col-span-2 transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
