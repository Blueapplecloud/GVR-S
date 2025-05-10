import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <motion.div layout className="border-b border-gray-300">
    <button
      onClick={onClick}
      className={`w-full text-left font-semibold text-base sm:text-lg px-4 py-3 flex justify-between items-center transition-colors duration-300 ${
        isOpen ? "bg-[#B04040]/30 text-black" : "bg-white text-black"
      }`}
    >
      <span>{title}</span>
      <span className="text-sm sm:text-base">{isOpen ? "▲" : "▼"}</span>
    </button>

    <motion.div
      initial={false}
      animate={
        isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="px-4 py-4 text-black space-y-6 text-sm sm:text-base">
        {content}
      </div>
    </motion.div>
  </motion.div>
);

const DepartmentsComponent = ({
  sectionName,
  aboutContent,
  hodContent,
  backgroundImage,
  hodImage,
  hodName,
  hodDesignation,
  visionContent,
  missionContent,
  infrastructureContent,
  infrastructureImages,
  hodVisible,
}) => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: hodRef, inView: hodInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div
        className="w-full h-[200px] sm:h-[250px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white text-center px-4"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-light"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Department of
        </motion.h2>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {sectionName}
        </motion.h1>
      </div>

      {/* About Section */}
      <div className="flex justify-center mt-10 sm:mt-16 px-4 sm:px-6 md:px-8">
        <div className="bg-white shadow-lg rounded-lg max-w-6xl w-full p-6 sm:p-8">
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            About the Department
          </motion.h2>
          <div ref={aboutRef}>
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, width: 0 },
                visible: { opacity: 1, width: "100%" },
              }}
              transition={{ duration: 0.6 }}
              className="h-0.5 bg-amber-500 mb-4"
            />
          </div>
          <p className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
            {aboutContent}
          </p>
        </div>
      </div>

      {/* HOD Section */}
      {hodVisible !== "NO" && (
        <div className="flex justify-center mt-10 sm:mt-16 px-4 sm:px-6 md:px-8">
          <div className="bg-white shadow-lg rounded-lg max-w-6xl w-full p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex-1">
              <motion.h2
                className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                HOD's Message
              </motion.h2>
              <div ref={hodRef}>
                <motion.div
                  initial="hidden"
                  animate={hodInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    visible: { opacity: 1, width: "100%" },
                  }}
                  transition={{ duration: 0.8 }}
                  className="h-0.5 bg-amber-500 mb-4"
                />
              </div>
              <p className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
                {hodContent}
              </p>
              <p className="mt-4 font-semibold text-gray-800 text-sm sm:text-base">
                {hodName}
                <br />
                {hodDesignation}
              </p>
            </div>
            <div className="w-full sm:w-[140px] flex justify-center sm:justify-start">
              <img
                src={hodImage}
                alt="HoD"
                className="rounded-md w-29 h-36 sm:w-32 sm:h-40 object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Accordion */}
      <div className="flex justify-center mt-10 sm:mt-16 px-4 sm:px-6 md:px-8 pb-16">
        <div className="bg-white shadow-lg rounded-lg max-w-6xl w-full">
          <AccordionItem
            title="Vision & Mission"
            isOpen={openIndex === 0}
            onClick={() => toggleAccordion(0)}
            content={
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg sm:text-2xl mb-2">Vision</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {visionContent}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-2xl mb-2">
                    Mission
                  </h3>
                  <ul className="list-disc pl-6 text-sm sm:text-base leading-relaxed">
                    {missionContent.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          />
          <AccordionItem
            title="Infrastructure"
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
            content={
              <div className="space-y-6">
                <p className="text-sm sm:text-base leading-relaxed">
                  <p className="!font-bold text-[18px] pb-3">{`Following are the Infrastructure Provided by ${sectionName} Department :`}</p>
                  {infrastructureContent}
                </p>
                {infrastructureImages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {infrastructureImages.map((item, index) => (
                      <div key={index} className="space-y-4">
                        <img
                          src={item.image}
                          alt={`Infrastructure ${index + 1}`}
                          className="w-full h-auto rounded-md shadow-md"
                        />
                        <p className="text-sm sm:text-base leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="italic text-gray-600">
                    Infrastructure images are not available at the moment. They
                    will be added soon.
                  </p>
                )}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentsComponent;
