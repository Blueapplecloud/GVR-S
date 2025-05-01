import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const governingMembers = [
    {
        name: 'Dr.P BHASKAR NAIDU',
        role: 'President',
        img: 'https://gvrs.ac.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-12-at-12.57.17-PM-228x300.jpeg',
    },
    {
        name: 'Sri. J. Murali Mohan',
        role: 'B.Tech., M.B.A (U.S) Vice-President',
        img: '',
    },
    {
        name: 'Dr. M. Jagadish Kumar',
        role: 'Vice-President',
        img: '',
    },
    {
        name: 'Sri. R. Gopala Krishna',
        role: 'Secretary & Correspondent',
        img: '',
    },
    {
        name: 'Dr. K. Krishna Prasad',
        role: 'Treasurer',
        img: '',
    },
    {
        name: 'Sri. V. Kuppu Swamy',
        role: 'Additional Secretary',
        img: '',
    },
    {
        name: 'Dr. P. Gopi Chand',
        role: 'Joint Secretary',
        img: '',
    },
    {
        name: 'Dr. K. Vara Prasad, M.S.',
        role: 'Member',
        img: '',
    },
    {
        name: 'Dr. K. Krishna Prasad',
        role: 'Special Invitee',
        img: '',
    },
    {
        name: 'Sri. V. Kuppu Swamy',
        role: 'Principal, MBTS Govt. Polytechnic, Nallapadu',
        img: '',
    },
    {
        name: 'Dr. P. Gopi Chand',
        role: 'Principal, Dr.YSR ANU College of Engineering & Technology',
        img: '',
    },
    {
        name: 'Dr. K. Vara Prasad, M.S.',
        role: 'Member / Director-Academics and R&D',
        img: '',
    },
];
const defaultImg = "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png";
function GoverningBody() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 bg-white ">
            <motion.h1
                ref={ref}
                // key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="!text-4xl font-bold text-left pl-10 mb-6 ml-5"
            >
                The Governing Body
                <div className="w-[25rem] h-0.5 bg-Amber mt-2 align-center"></div>
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 bg-gray p-5 shadow-lg rounded-md">
                {governingMembers.map((member, index) => (
                    <div
                        key={index}
                        className="text-center border-0 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <img
                            src={member.img || defaultImg}
                            // alt={member.name} 
                            className="w-40 h-60 object-cover mx-auto rounded-full shadow-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default GoverningBody;
