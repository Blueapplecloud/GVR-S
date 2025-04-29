import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutGVRS = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="!mt-16 p-6 max-w-4xl mx-auto h-110 bg-white shadow-2xl rounded-md">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="!text-2xl font-bold text-left mb-2"
      >
        WELCOME TO G.V.R.&S EDUCATIONAL INSTITUTIONS
      <div className="w-200 h-0.5 bg-amber-200 mb-6" />
      </motion.h1>

      {/* Thin amber-500 line aligned left */}

      <p className="text-gray-700 leading-relaxed">
        GVR&S (Gangineni Venkateswara Rao & Sailaja) College of Engineering and
        Technology was established in the year 2007 under the aegis of an
        educational society whose members have had consummate experience in the
        field of education.</p>
        
        <p className="text-gray-700 leading-relaxed">
         GVR&S (Gangineni Venkateswara Rao & Sailaja)-CET has
        completed 15 years—with a deep sense of satisfaction and pride over its
        contributions, achievements, and recognition received. At G.V.R.&S
        (Gangineni Venkateswara Rao & Sailaja) College of Engineering and
        Technology, we believe in “Fueling the quest for knowledge.” In doing
        so, our commitments are in ensuring individual professional success,
        which culminates in benefiting society.
      </p>

      <p className="text-gray-700 mt-4 leading-relaxed">
        Creating a vast state-of-the-art academic infrastructure, assembling the
        best teaching talent, and equipping students with every required
        learning aid ensures that students at GVR&S (Gangineni Venkateswara Rao
        & Sailaja) receive the best in academics. Sporting, cultural, and
        extra-curricular facilities are provided so that students enjoy their
        campus life. We are truly emerging as the nurturing ground for
        leadership. It is becoming synonymous with practical, industry-focused
        education and is attracting students from across the globe. The fact
        that we are today a familiar face in the industry is a demonstration of
        our total commitment to excellence in academics.
      </p>
    </div>
  );
};

export default AboutGVRS;
