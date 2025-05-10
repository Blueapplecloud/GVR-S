import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function GVRSGroups({
  title,
  image,
  leftFeatures = [],
  rightFeatures = [],
  courses = [],
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="px-4 py-10 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-4"
      >
        {title}
      </motion.h2>

      <motion.img
        src={image}
        alt={title}
        className="w-full h-auto rounded-xl shadow-lg mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h3 className="text-2xl font-semibold text-gray-800">Our Features</h3>
        <div className="w-40 h-0.5 bg-Amber mx-auto mb-6"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          {leftFeatures.map((item, index) => (
            <motion.p
              key={index}
              className="text-blue-700 text-lg mb-3"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item}
            </motion.p>
          ))}
        </div>
        <div>
          {rightFeatures.map((item, index) => (
            <motion.p
              key={index}
              className="text-blue-700 text-lg mb-3"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h3 className="text-2xl font-semibold text-gray-800">Our Courses</h3>
        <div className="w-40 h-0.5 bg-Amber mx-auto mb-6"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.p
            key={index}
            className="text-gray-700 text-lg mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {course}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
