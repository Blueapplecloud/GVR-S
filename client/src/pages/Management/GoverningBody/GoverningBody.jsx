import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const governingMembers = [
    {
        name: 'Smt.Gangineni Sailaja',
        role: 'President',
        img: 'https://gvrs.ac.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-23-at-14.38.35-768x510.jpeg',
    },
    {
        name: 'Name',
        role: 'Vice-President',
        img: '',
    },
    {
        name: 'Name',
        role: 'Vice-President',
        img: '',
    },
    {
        name: 'Name',
        role: 'Secretary & Correspondent',
        img: '',
    },
    {
        name: 'Name',
        role: 'Treasurer',
        img: '',
    },
    {
        name: 'Name',
        role: 'Additional Secretary',
        img: '',
    },
    {
        name: 'Name',
        role: 'Joint Secretary',
        img: '',
    },
    {
        name: 'Name',
        role: 'Member',
        img: '',
    },
    {
        name: 'Name',
        role: 'Special Invitee',
        img: '',
    },
    {
        name: 'Name',
        role: 'Special Invitee',
        img: '',
    },
    {
        name: 'Name',
        role: 'Special Invitee',
        img: '',
    },
    {
        name: 'Name',
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
                <div className="w-[16rem] h-0.5 bg-Amber mt-2"></div>
                {/* <div className="w-[25rem] h-0.5 bg-Amber mt-2 align-center"></div> */}
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 shadow-lg rounded-md">
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
