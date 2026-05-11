const Activities = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto mt-[-75px] md:flex ">
      <div className="relative p-4 group overflow-hidden">
        <h3 className="z-10 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] text-white font-bold text-2xl transition-all duration-300 group-hover:scale-110">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="/"
        />
      </div>
      <div className="relative p-4 group overflow-hidden">
        <h3 className="z-10 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] text-white font-bold text-2xl transition-all duration-300 group-hover:scale-110">
          Cruise
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="/"
        />
      </div>
      <div className="relative p-4 group overflow-hidden">
        <h3 className="z-10 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] text-white font-bold text-2xl transition-all duration-300 group-hover:scale-110">
          Excursions
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
