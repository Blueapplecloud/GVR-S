import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Chairman() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div className="container m-10 bg-white shadow-lg rounded-md ">
            <motion.h1
                ref={ref}
                // key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="!text-4xl font-bold text-left pb-2 mt-2"
            >
                Chairman
                <div className="w-[10rem] h-0.5 bg-Amber mt-2"></div>
            </motion.h1>

            <div >
                <p ><strong className='text-[#b04040]'>GVR&S</strong>(Gangineni Venkateswara Rao & Sailaja) Group of Institutions is a progressive educational institution, dedicated to the pursuit of excellence. Aspirants are encouraged on this journey by our intellectual faculty, world-class facilities and student-friendly educational systems. GVR&S Group of Institutions is the world-famous for its academic excellence. We accept the best and brilliant students purely on their academic merit and their curiosity on the course, they want to study. Our aim is to encourage you to become a creative professional and connect you to an exciting and rewarding career. GVR&S is dedicated to the innovation, expansion, association, protection, broadcasting and application of knowledge in extensive fields with a goal to enlarge the scale and compass of human understanding and contribute to the betterment of the humankind.</p>
                {/* <div className='align-center  rounded-lg shadow-lg relative'> */}
                <img
                    src="https://gvrs.ac.in/wp-content/uploads/2024/05/CHAIR-PERSON.webp"
                    className="mx-auto mb-4 w-50 h-120 rounded-lg shadow-md "
                    alt="Chairman"
                />
                {/* </div> */}
                <p className='text-justify'>GVR&S aim is to educate students from all over India, including those from the local and rural areas, and from other countries, so they grow to be progressive individuals, improving the living values of their families, industry and the general public. </p>
                <p className='text-justify'>GVR&S Group of Institutions has maintained high-tech Infrastructural facilities. It has been the regular aspire of GVR&S to include novel features of excellence in its campuses. Every endeavor is made to perk up the existing best practices in these fields.The Management and staff at GVR&S take immense concern to ensure that every institute of GVR&S serves as an exemplary role model for other educational institutions across the country. On the placement frontage, GVR&S has been a regular topper for numerous years in the campus placement records amid private institutions in India. Our students are well rated by employers from industry and commerce in the private and public sectors.</p>
                <p className='text-justify'>Congratulations on choosing GVR&S Group of Institutions for shaping your prospect, and we are delighted to support you in the journey! We truly stand poised to enter a new era of Education - With You....</p>
            </div>
            <div className="text-end">

                <p><strong className='mb-4 text-[#b04040]'>Dr. G.Sindhura</strong></p>
                <p className='m-0'>Chair Person</p>
                <p className='m-0'><b>GVR&S</b> Group of Institutions</p>
            </div>
        </div>
    );
}

export default Chairman