import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Founder() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="container mx-auto my-6 px-4 py-6 bg-white shadow-lg rounded-md">
      <motion.h1
        ref={ref}
        // key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-left pb-2 mb-6"
      >
        Founder & Correspondent
        <div className="w-25 h-0.5 bg-Amber mx-auto mt-2"></div>
      </motion.h1>

      <div className="mb-4 space-y-1 text-sm sm:text-base">
        <a href="#" className="text-blue-600 block">From the President's Office,</a>
        <a href="#" className="text-blue-600 block">Dr. G. Venkateswara</a>
        <a href="#" className="text-blue-600 block">Founder</a>
      </div>
      {/* Founder section */}
      <div className="space-y-4 text-sm sm:text-base text-justify">
        <div className="flex flex-col md:flex-row-reverse md:items-start gap-4">
          <div className="md:ml-6 w-full md:w-60 shrink-0">
            <img
              // src="https://gvrs.ac.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-23-at-16.42.56-600x799.jpeg"
              src="/Images/management/Founder.jfif"
              alt="Dr. Vara Prasad"
              className="w-full rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-4 font-semibold text-primaryColor text-center">
              Dr. Gangineni Venkateswara Rao
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <p>
              Dr. Gangineni Venkateswara Rao is a well known Educationalist in
              GUNTUR and he made an outstanding mark in the field of Education with
              his passion for excellence and commitment from last 25 Years for the
              development of GVR&S Educational Society. His life has been a symbol
              of courage, perseverance and devotion. A visionary in the true sense
              establishing a unique institution where students could be trained to
              become qualified engineers equipped with skills to face the challenges
              in the industry and society.
            </p>
            <p>
              His selfless service has been organized and appreciated by the
              journalists Federation of India, Hyderabad, who has honored him with A
              “BEST DOYEN AWARD” in the year 1999. Dr.Gangineni is also the
              recipient of “BHARAT JYOTHI AWARD” along with a certificate of
              excellence for the year 2002 from the India International Friendship
              Society, New Delhi for his outstanding contribution to the field of
              education. He was also chosen for the prestigious “SIKSHA RATTAN
              PURASKAR” for the year 2002 from the International Institute of
              Success Awareness, New Delhi for his flawless efforts and unmatched
              commitment in the field of education.
            </p>
            <b>FOUNDER MESSAGE</b>
            <p><strong className="text-primaryColor"> “We build society- by building people; we build the nation's
              technology and economy-by building leaders”.</strong></p>
            <p> We, in GVR&S, have a simple answer. We believe in the success of an
              institution and its ability to instill confidence, stemming from a
              higher caliber of its dedicated teaching force. When we have finest
              and the most sincere minds working for us, dedication, sincerity and
              continuing empathy of our teaching force get intellectually and
              emotionally translated into an increased success of our students and
              the satisfaction of all parents, leading to the most enviable
              placement.</p>
            <p>At GVR&S, we believe in our students to become the high-profiled
              professionals who can achieve the avowed objective of our great
              president, Hon'ble Abdul Kalam, to make our country a "SUPER POWER".</p>
          </div>
        </div>
      </div>
      {/* President section */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 pb-2 mb-6 mt-8">
        President
        <div className="w-[10rem] h-0.5  bg-Amber mt-2"></div>
      </h2>

      <div className="!pb-5">
        <p>
          Smt.Gangineni Sailaja is an Eminent Educationalist who has been
          associated with the society right from the inception; she dedicated
          her life for the empowerment of women through education.She takes
          utmost care in developing all the Educational institutions established
          by the society.
        </p>
        <div className="float-start text-center mb-5">
        <img
          src="https://gvrs.ac.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-23-at-14.38.35-768x510.jpeg"
          className=" float-start m-5 w-70 h-60 rounded-lg shadow-lg"
         />
          <p className="mb-2 font-semibold text-primaryColor">Smt.Gangineni Sailaja</p>
        </div>
        <p className="text-justify">
          Her selfless service has been recognized and appreciated by the
          journalists Federation of India, Hyderabad, who has honored her with A
          “BEST DOYEN AWARD” in the year 1999.
        </p>
        <p className="text-justify">
          She has been with her husband through thick and thin and took many
          pains in developing the institution. Her services have been recognized
          and she has been chosen as one of the recipient of “BHARAT JYOTHI
          AWARD” for the year 2002 for her outstanding efforts in the field of
          women education.
        </p>
        <b>PRESIDENT MESSAGE</b>
        <p className="text-justify">
          <strong className="text-primaryColor">
            "Women are the real architects of society."
          </strong>
        </p>
        <p className="text-justify">
          G.V.R&S College of Engineering and Technology starts the journey
          towards establishing itself as an excellent technical education
          provider. The college provides the best faculty-student interaction
          and offers a unique academic ambience of utmost discipline. The world
          class facilities of the campus provide intellectually inspiring
          atmosphere to transform students into innovative professionals.
        </p>
        <p className="text-justify">
          G.V.R&S College of Engineering and Technology starts the journey
          towards establishing itself as an excellent technical education
          provider. The college provides the best faculty-student interaction
          and offers a unique academic ambience of utmost discipline. The world
          class facilities of the campus provide intellectually inspiring
          atmosphere to transform students into innovative professionals.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Founder;
