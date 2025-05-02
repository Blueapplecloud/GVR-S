import { FaUserGraduate, FaBriefcase, FaAward, FaUsers } from "react-icons/fa";
import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";

const overviewData = [
  {
    icon: <FaUserGraduate className="text-white text-2xl" />,
    value: 3300,
    suffix: "+",
    description: "Placements in last 3 years",
    bgColor: "bg-teal-500",
  },
  {
    icon: <FaBriefcase className="text-white text-2xl" />,
    value: 200,
    suffix: "+",
    description: "Companies visited to campus",
    bgColor: "bg-red-400",
  },
  {
    icon: <FaAward className="text-white text-2xl" />,
    value: 6,
    suffix: "+",
    description: "Highest LPA in last 3 years",
    bgColor: "bg-pink-600",
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    value: 350,
    suffix: "+",
    description: "Faculty Count",
    bgColor: "bg-indigo-900",
  },
];

const AnimatedCounter = ({ target }) => {
  const controls = useAnimation();
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        count: target,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [inView, controls, target]);

  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        setCurrent(Math.floor(latest.count));
      }}
    >
      {current}
    </motion.span>
  );
};

const CampusOverview = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Campus Overview
      </h2>
      <div className="w-24 h-1 bg-primaryColor mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {overviewData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${item.bgColor}`}
            >
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-blue-900">
              <AnimatedCounter target={item.value} />
              {item.suffix}
            </h3>
            <p className="text-primaryColor font-medium text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusOverview;
