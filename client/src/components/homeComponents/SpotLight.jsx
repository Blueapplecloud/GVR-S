import React from "react";

function SpotLight() {
  const images = [
    "/Images/spotlight/img1.jpg",
    "/Images/spotlight/img2.jpg",
    "/Images/spotlight/img3.jpg",
    "/Images/spotlight/img4.jpg",
    "/Images/spotlight/img5.jpg",
    "/Images/spotlight/img6.jpg",
    "/Images/spotlight/img7.jpg",
  ];
  return (
    <div className="bg-gray-100 md:py-6 md:px-10 min-h-screen flex flex-col items-center mx-auto ">
      <h3 className="border-b-2 border-Amber pb-2 text-3xl font-bold text-primaryColor">
        GVRS SpotLight
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-10 place-items-cent max-w-6xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-68 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl"
          >
            <img
              src={image}
              alt={`Spotlight ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpotLight;
