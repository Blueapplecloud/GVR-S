import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const committeeData = [
  { id: 1, name: 'Dr. M. Avinash', position: 'Convener' },
  { id: 2, name: 'Mr. T. Lingaiah', position: 'Member' },
  { id: 3, name: 'Mr. S. Seshogiri Rao', position: 'Member' },
  { id: 4, name: 'Mr. B. Sunil Kumar Naik', position: 'Member' },
  { id: 5, name: 'Mr. Ch. Papa Rao', position: 'Member' },
  { id: 6, name: 'Mr. T. Vasantha Rao', position: 'Member' },
  { id: 7, name: 'Mr. A. Prabhakar Rao', position: 'Member' },
];

const tableVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const rowVariants = {
  hidden: (i) => ({ opacity: 0, y: 20 * i }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 + i * 0.1, ease: 'easeInOut' },
  }),
};

const ASHC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={tableVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="px-5 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 flex flex-col items-start w-full"
    >
      <div className="w-full mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          Anti Sexual Harassment Committee
        </h2>
        <div className="h-0.5 bg-black w-full"></div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm sm:text-base font-medium">
                S.No
              </th>
              <th className="px-4 py-2 border text-left text-sm sm:text-base font-medium">
                Name of the Faculty
              </th>
              <th className="px-4 py-2 border text-left text-sm sm:text-base font-medium">
                Position in the Committee
              </th>
            </tr>
          </thead>
          <tbody className="">
            {committeeData.map((item, index) => (
              <motion.tr
                key={item.id}
                variants={rowVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-2 border text-sm sm:text-base">{item.id}</td>
                <td className="px-4 py-2 border text-sm sm:text-base">{item.name}</td>
                <td className="px-4 py-2 border text-sm sm:text-base">{item.position}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ASHC;