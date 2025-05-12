import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrincipalMessage = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-left"
        >
          Principal's Message
          <div className="w-64 h-0.5 bg-Amber mt-2" />
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center mt-6">
          {/* Left: Text */}
          <div className="md:w-1/2 text-lg text-gray-700 space-y-4">
            {/* <p>
              <strong>Dr. P BHASKAR NAIDU</strong> has around 20+ years of
              experience in Telugu States & Non-Telugu States in India, as
              well as 5+ years of international exposure.
            </p> */}
            <p><strong>Dr. P BHASKAR NAIDU</strong></p>
            <p className="text-1xl font-bold">AMIE(CSE), M.Tech (CSE),Ph.D(CSE),PGP(NIT-W),(PDF-MALAYSIA)
            </p>
            <p className="font-semibold"><i>LIMISTE,LMCSI,MIAENG(HK),LMIACSIT(SING),MCSTA(NY)</i></p>
            <p className="italic text-gray-600">
              Detailed message from the principal will be shared soon. Please stay tuned for more updates.
            </p>
            {/* <p>
              He holds qualifications BE (ECE), MTech(ES), MTech(CSE), Ph.D
              from GU, JNTUH, JNTUK, ANU, and also completed PGDCST from
              the Human Resource Department.
            </p>
            <p>
              He has published research papers in various reputed
              international journals and has patents nationally and
              internationally. He is a guest speaker and a paper setter
              for various autonomous institutions.
            </p>
            <p>
              Memberships: JCP(Java Certified Programmer) from Sun Micro
              Systems, LMISTE (Life Member of Indian Society for Technical
              Education), VSI (VLSI Society of India), International Association
              of Engineers, LMBMSI, LM Indian Science Congress.
            </p>
            <p>
              His roles have included mentor, lab in-charge, head, PG
              coordinator, dean, and principal.
            </p>
            <p className="font-semibold">
              Principal, GVR&S CET, Guntur, Andhra Pradesh, India
            </p>
            <p>📞 +91 6305893114 | ✉ principal@gvrs.ac.in</p> */}
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="/Images/management/principal.jpeg"
              alt="Dr.P BHASKAR NAIDU"
              className="w-90 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
