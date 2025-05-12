import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Images/carousel/img1.jpg",
  "/Images/carousel/img2.jpg",
  "/Images/carousel/img3.jpg",
  "/Images/carousel/img4.jpg",
  "/Images/carousel/img5.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragThreshold = 50;
  const [dragStartX, setDragStartX] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[480px] overflow-hidden">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          initial={{ opacity: 0.6, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          drag="x"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragConstraints={{ left: 0, right: 0 }}
          className="absolute inset-0 w-full h-full object-cover shadow-lg"
        />

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 sm:mt-6 gap-2 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
