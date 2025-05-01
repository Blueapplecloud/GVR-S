import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/carousel/img1.jpg",
  "/images/carousel/img2.jpg",
  "/images/carousel/img3.jpg",
  "/images/carousel/img4.jpg",
  "/images/carousel/img5.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragThreshold = 50;
  const [dragStartX, setDragStartX] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (_, info) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (_, info) => {
    const delta = info.point.x - dragStartX;
    if (delta > dragThreshold) prevSlide();
    else if (delta < -dragThreshold) nextSlide();
  };

  return (
    <div className="w-full  ">
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden mb-3 ">
        {/* Slide Image */}
        <motion.div
          key={currentIndex}
          className="w-full h-[400px]"
          initial={{ opacity: 0.6, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          drag="x"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragConstraints={{ left: 0, right: 0 }}
        >
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="w-full h-full object-cover  shadow-lg"
          />
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 w-2.5 !rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
