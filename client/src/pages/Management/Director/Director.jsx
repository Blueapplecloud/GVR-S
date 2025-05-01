import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Director() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div className="container m-10  bg-white shadow-lg rounded-md mx-auto px-2 py-3">
            <motion.h1
                ref={ref}
                // key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="!text-4xl font-bold text-left pl-10 mb-6 ml-5"
            >
                Director
                <div className="w-[10rem] h-0.5 bg-Amber mt-2"></div>
            </motion.h1>

            <div >
                <img
                    src="https://gvrs.ac.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-21-at-13.32.05.jpeg"
                    className="ml-5 mr-5 mt-1 mb-3 w-full max-w-[700px] h-auto float-start rounded-lg shadow-lg"
                />
                <p className='text-justify'>It indeed gives me immense pleasure to welcome you to the <b className='text-primaryColor'>GVR&S</b> College of Engineering Technology for short which as its name suggests would be an ace in education. We wish to set new benchmark in professional education. Through this web page I on behalf of the management & on my own behalf extend you warm greetings for fruitful four years which would transform you into professionals- we all should be proud of. Now when higher education is in phase of renaissance with newer thinking, we at GVR&S are committed to provide you matching teaching learning process which would make you an excellent engineers and a good citizen of our country. The twenty first centuries will undoubtedly be knowledge dominated where Indian professionals will be much in demand all over the world. GVR&S will focus to impart training to meet global needs.</p>
                <p className='text-justify'>Discipline & excellence would be hall marks of our education system. For success self--discipline is pre-requisite. We will assist you in this regard by inculcating respect for punctuality, importance of proper turn out & encouraging you take part in all extra & co-curricular activities. There would be sports, hikes, adventure sports, festivities, dramas, annual functions, debates, seminars, presentations etc to bring out the best in your personality.</p>
                <p className='text-justify'>GVR&S has an active Training and Placement Wing with representatives from all departments to take care of the student’s practical training, industrial visits and placements. </p>
                <p className='text-justify'>We would be rendering necessary career guidance for placement in industry, defence & PSUs. Aurangabad is amidst a vibrant industrial belt where large number of major industrial houses & multi- nationals have production facilities. GVR&S will build up healthy industry academic relationship so that our students can get training in working environment & later may be placement too. Our qualified faculty can also assist the industry. I am quite elated that you are exploring what GVR&S has to offer to the prospective students.</p>
                <p className='text-justify'>I can assure you that GVRS will prove to be right destination for your professional education. Our winning combination of committed management qualified & experienced faculty, trained staff & above all an environment conducive to learning will contribute significantly to mould you into professional engineers in four years.</p>
            </div>
            <div className="text-end">

                <p><strong className='!mb-4 text-Red'>SHAIK KAREEMOONISA</strong></p>
                <p className='m-0'>  Director</p>
                <p className='m-0'><b>GVR&S</b> Group of Institutions</p>
                </div>
        </div>
    );
}

export default Director