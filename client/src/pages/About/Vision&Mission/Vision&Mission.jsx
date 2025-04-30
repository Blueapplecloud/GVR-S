import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VisionMission = () => {
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: qualityRef, inView: qualityInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="!mt-16 p-6 h-110 max-w-5xl mx-auto bg-white shadow-lg rounded-md">
      {/* Vision Section */}
      <motion.h2
        ref={visionRef}
        initial={{ opacity: 0, y: -30 }}
        animate={visionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="!text-3xl font-bold text-center mb-2"
      >
        VISION
      <div className="w-24 h-0.5 bg-Amber mx-auto mb-6" />
      </motion.h2>
      <p className="text-gray-700 text-lg leading-relaxed text-center">
        To emerge as a “Centre for excellence” offering Technical Education and Research Opportunities of very high standards to students, develop the total personality of the individual, and instill high levels of discipline and strive to set global standards, making our students technologically superior and ethically strong, who in turn shall contribute to the advancement of society.
      </p>

      {/* Mission Section */}
      <motion.h2
        ref={missionRef}
        initial={{ opacity: 0, y: -30 }}
        animate={missionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="!text-3xl font-bold text-center mt-10 mb-2"
      >
        MISSION
      <div className="w-24 h-0.5 bg-Amber mx-auto mb-6" />
      </motion.h2>
      <p className="text-gray-700 text-lg leading-relaxed text-center">
        To transform the rural learners into exceptional technocrats to meet the challenges in an ever-changing global scenario, by imparting high-quality outcome-based technical education.
      </p>

      {/* Quality Policy Section */}
      <div className="text-center mt-10 mb-6" ref={qualityRef}>
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    animate={qualityInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1 }}
    className="!text-3xl font-bold"
  >
    QUALITY POLICY
  </motion.h2>
  <div className="w-25 h-0.5 bg-Amber mx-auto mt-2" />
</div>

      <p className="text-gray-700 text-lg leading-relaxed text-center">
        To provide world-class infrastructure, equipment & well-qualified faculty for all-round growth of the students including their competence and overall personality, meeting ever-growing expectations of society.
      </p>
    </div>
  );
};

export default VisionMission;
