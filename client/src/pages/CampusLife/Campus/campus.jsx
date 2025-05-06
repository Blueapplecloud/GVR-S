import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function CampusGalleryGrid() {
  const images = [
    "https://gvrs.ac.in/wp-content/uploads/2023/08/clg4-2048x862.jpg",
    "https://gvrs.ac.in/wp-content/uploads/2023/07/DJI_0751-4_11zon-2048x1159.jpg",
    "https://gvrs.ac.in/wp-content/uploads/2023/08/clg2-2048x1095.jpg",
    "https://gvrs.ac.in/wp-content/uploads/2023/08/clg1-2048x1125.jpg",
    "https://gvrs.ac.in/wp-content/uploads/2023/08/clg3-2048x1155.jpg",
  ];

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="px-6 py-12 md:px-16 bg-gray-100">
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold mb-10 text-center uppercase text-gray-800"
      >
        <h3 className="relative inline-block font-bold text-[32px] sm:text-[36px] md:text-[40px]">
          Campus Gallery
          <span className="absolute bottom-[-12px] left-0 right-0 h-0.5 bg-Amber mx-auto w-full" />
        </h3>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-50px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative overflow-hidden rounded shadow-md bg-cover bg-center h-60 cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="absolute inset-0 bg-black/30 hover:bg-black/0 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default CampusGalleryGrid;
