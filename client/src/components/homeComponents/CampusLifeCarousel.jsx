import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const campusLifeData = [
  {
    id: 1,
    title: "Library",
    description:
      "Library offers a wide range of resources and a quiet space for study.",
    image: "Images/campuslife/library.jpg",
  },
  {
    id: 2,
    title: "National Service Scheme (NSS)",
    description:
      "Join NSS to be part of a movement aimed at building a better society through community service and social work.",
    image: "/Images/campuslife/sports.jpg",
  },
  {
    id: 3,
    title: "Cultural Club",
    description:
      "Showcase your talents in drama, and art with the vibrant activities of the Cultural Club! Join us for exciting events.",
    image: "/Images/campuslife/culturals.jpg",
  },
];

const CampusLifeCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % campusLifeData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? campusLifeData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-auto max-w-7xl bg-gray-100 px-10 py-10 min-h-screen">
      <h2 className="text-center text-3xl font-bold text-primaryColor mb-8">
        Campus Life
        <span className="block mt-2 h-1 w-20 bg-Amber mx-auto"></span>
      </h2>
      <div className="relative overflow-hidden">
        {/* Carousel Container */}
        <div className="flex items-center justify-center relative">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md z-10"
            aria-label="Scroll Left"
          >
            <FaArrowLeft />
          </button>

          {/* Carousel Content */}
          <motion.div
            className="w-[450px] h-[430px] bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            key={currentIndex}
          >
            <img
              src={campusLifeData[currentIndex].image}
              alt={campusLifeData[currentIndex].title}
              className="w-full h-[270px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {campusLifeData[currentIndex].title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {campusLifeData[currentIndex].description}
              </p>
              <button className="mt-2 px-4 py-2 bg-primaryColor text-white rounded hover:bg-blue-600">
                View more
              </button>
            </div>
          </motion.div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md z-10"
            aria-label="Scroll Right"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          {campusLifeData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusLifeCarousel;
