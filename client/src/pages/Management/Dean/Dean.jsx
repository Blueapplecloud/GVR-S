import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Dean() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="container m-10 bg-white shadow-lg rounded-md ">
      <motion.h1
        ref={ref}
        // key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="!text-4xl font-bold text-left pb-2 mb-6"
      >
        Dean
        <div className="w-[7rem] h-0.5 bg-Amber mt-2"></div>
      </motion.h1>

      <div>
        <p>
          It is my privilege and pleasure to welcome you all to GVR&S College of
          Engineering and Technology.
        </p>
        <div className="float-end m-5 mt-0 text-center">
          <img
            src="https://gvrs.ac.in/wp-content/uploads/2023/06/dean-248x300.jpg"
            alt="Dr. Vara Prasad"
            className="h-90 rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-3 font-semibold text-Red">Dr. Vara Prasad, Dean</p>
        </div>
        <p className="text-justify">
          It is an Institute where discipline and punctuality with conducive
          environment will provide quality education and development in frontier
          areas of engineering and technology. We, the faculty, staff and
          administration at GVR&S will work for producing technologically
          superior and ethically strong engineers for the country and the world
          with a purpose to serve the society & mankind. With strong team work
          we would achieve technological excellence in a highly competitive
          environment around us.
        </p>
        <p className="text-justify">
          As we strive for excellence in what we do, the Institute is constantly
          making endeavors to scale new heights by developing synergy between
          academic knowledge, technical skill set in line with industry needs,
          high moral values and sensitivity to the environment and the nation.
          Therefore apart from academics, co-curricular activities, sports and
          cultural development will form an important part of the life at GVR&S
          from the very beginning.
        </p>
        <p className="text-justify">
          I wish our students to soar high by excelling in academics and other
          activities upholding the name of GVR&S and to bring fame to the
          institution with their sterling qualities. In an era of stiff
          competition, success can only be achieved if one makes the right kind
          of endeavor at the right time and in the right direction. “Success
          will never lower its standard to accommodate us; we have to raise our
          standard to achieve it”.
        </p>
        <p className="text-justify">
          With this I invite you to visit GVR&S to experience the difference.
        </p>
        <p className="mt-5"></p>
        <br />
        <a
  href="https://gvrs.ac.in/academic-dean/"
className="border border-Amber bg-primaryColor rounded hover:bg-Amber text-white px-10 py-3 text-lg font-sans font-semibold rounded-md  hover:!text-black transition duration-200 ease-in-out p-2 mx-1"
                
>
  View More &gt;&gt;
</a>


        <br />
        <br />
      </div>
    </div>
  );
}

export default Dean;
