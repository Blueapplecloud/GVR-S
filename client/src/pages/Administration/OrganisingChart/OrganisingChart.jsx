import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function OrganisingChart() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  return (
    <div className="pt-10 px-4">
      <motion.h3
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center font-bold text-[40px]"
      >
        Organising Chart
      </motion.h3>

      <img
        src="https://gvrs.ac.in/wp-content/uploads/2023/12/chartgvrs.png"
        alt="Organising Chart"
        className="mx-auto mt-6 w-full max-w-5xl"
      />
    </div>
  );
}

export default OrganisingChart;
