import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TransportGallery = () => {
  const images = [
    { imageUrl: "https://gvrs.ac.in/wp-content/uploads/2023/08/bus-1-1536x788.jpg", size: "full" },

  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sizeClasses = {
    medium: "row-span-2",
    large: "row-span-3",
    full: "col-span-full row-span-2",
    default: "row-span-1",
  };

      const headingRef = useRef(null);
      const headingInView = useInView(headingRef, { once: true });

  return (
    <div className="mb-16 pt-16">
      <motion.h1
                   ref={headingRef}
                   initial={{ opacity: 0, y: 50 }}
                   animate={headingInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="text-4xl font-bold mb-10 text-center uppercase text-gray-800"
                 >
        Transport
                 </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[150px]">
        {images.map((item, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-50px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`relative overflow-hidden rounded shadow-md bg-cover bg-center cursor-pointer transition-transform duration-300 hover:scale-105 ${sizeClasses[item.size || "default"]}`}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/30 hover:bg-black/0 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TransportGallery;
