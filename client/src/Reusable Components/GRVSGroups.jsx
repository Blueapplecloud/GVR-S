import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GVRSGroups({ title, image, leftFeatures = [], rightFeatures = [] }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="px-4 py-10 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-6"
      >
        {title}
      </motion.h2>

      <motion.img
        src={image}
        alt={title}
        className="w-full h-auto rounded-xl shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      />

      <div className="grid md:grid-cols-2 gap-8">
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
    </section>
  );
}
