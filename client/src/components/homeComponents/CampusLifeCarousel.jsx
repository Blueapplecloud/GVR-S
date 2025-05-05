import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const campusLifeData = [
  {
    id: 1,
    title: "Library",
    description:
      "Library offers a wide range of resources and a quiet space for study.",
    image: "/Images/campuslife/library.jpg",
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
  {
    id: 4,
    title: "Sports Arena",
    description:
      "Well-equipped courts and fields for all sports lovers to practice and compete.",
    image: "/Images/campuslife/sportsarena.jpg",
  },
  {
    id: 5,
    title: "Tech Club",
    description:
      "Join Tech Club to participate in coding contests, hackathons, and tech fests.",
    image: "/Images/campuslife/techclub.jpg",
  },
];

const CampusLifeCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= campusLifeData.length ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(campusLifeData.length - itemsPerPage, 0)
        : prev - itemsPerPage
    );
  };

  const currentItems = campusLifeData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="relative mx-auto w-full bg-gray-100 md:px-10 md:py-10 min-h-screen px-3 py-3">
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

          {/* Cards Container */}
          <div className="flex gap-6">
            {currentItems.map((item, index) => (
              <div
                key={item.id}
                className="w-[300px] h-[430px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[230px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                  <button className="mt-3 px-4 py-2 bg-primaryColor text-white rounded hover:bg-blue-600">
                    View more
                  </button>
                </div>
              </div>
            ))}
          </div>

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
          {Array.from(
            { length: Math.ceil(campusLifeData.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  i * itemsPerPage === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CampusLifeCarousel;
