const Gallery = () => {
  return (
    <div id="gallery" className="py-16 px-4 max-w-[1140px] w-full m-auto">
      <h2 className="text-center text-gray-700 py-4 ">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2 overflow-hidden">
          <img
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="/"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="/"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="/"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="/"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
