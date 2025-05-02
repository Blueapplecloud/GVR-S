import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const executiveMembers = [
  {
    name: 'Dr. Rayapati Srinivas',
    position: 'President, Nagarjuna Education Society and the Constituent Institutions',
    description: `Dr. Srinivas is a former Vice-President and Secretary of Nagarjuna Education Society. Former MLC, a Physician, a social worker, a Philanthropist and a patron of numerous social service and cultural organizations.`,
    img: '',
  },
  {
    name: 'Sri. Rayapati Gopala Krishna',
    position: 'Secretary & Correspondent',
    description: `Sri Rayapati Gopala Krishna hails from the famous Rayapati family. He is an Educationist, Businessman; Director, Jayalakshmi Group of Enterprises. He established Rayapati Venkata Ranga Rao College of Education, Guntur.`,
    img: '',
  },
  {
    name: 'Dr. K. Krishna Prasad',
    position: 'Treasurer of the college and Secretary & Correspondent of Dr.K.L.P.Public School.',
    description: `Dr. K. Krishna Prasad is an eminent Medical Practitioner (Paediatrics) of Guntur.`,
    img: '',
  },
];
const executiveCommitteeMembers = [
  {
    name: 'Dr. R. Srinivas',
    position: 'President',
    img: '',
  },
  {
    name: 'Sri. J. Murali Mohan',
    position: 'Vice-President',
    img: '',
  },
  {
    name: 'Dr. M. Jagadesh Kumar',
    position: 'Vice-President',
    img: '',
  },
  {
    name: 'Sri. R. Gopala Krishna',
    position: 'Secretary & Correspondent',
    img: '',
  },
  {
    name: 'Dr. K. Krishna Prasad',
    position: 'Treasurer',
    img: '',
  },
  {
    name: 'Sri. V. Kuppu Swamy',
    position: 'Additional Secretary',
    img: '',
  },
  {
    name: 'Dr. P. Gopi Chand',
    position: 'Joint Secretary',
    img: '',
  },
  {
    name: 'Sri. Chukkapalli Ramesh',
    position: 'Special Invitee',
    img: '',
  },
  {
    name: 'Dr. K. Vara Prasad, M.S.',
    position: 'Special Invitee',
    img: '',
  },
  {
    name: 'Sri. R. Mohan Sai Krishna',
    position: 'Special Invitee',
    img: '',
  },
];

const defaultImg = "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png";

function ExecutiveBody() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <>
      <div className="container mx-auto p-2 m-11  bg-white shadow-lg rounded-md">
        <div className="flex flex-col items-center justify-center mb-6">
        <motion.h1
          ref={ref}
          // key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="!text-4xl font-bold text-centerpl-10 mb-6 ml-5"
        >
          The Executive Body
          <div className="w-[20rem] h-0.5 bg-Amber mt-2"></div>
        </motion.h1>
        </div>

        {executiveMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
            <div className="flex-1 p-2">
              <h3 className="text-xl font-bold text-primaryColor">{member.name}</h3>
              <p className="text-md font-medium text-Red mb-2">- {member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
            <div>
              <img
                src={member.img || defaultImg}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover shadow-md mr-10"
              />
            </div>
          </div>
        ))}

        
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-2xl font-bold text-center">
            The Executive Committee of GVR&S COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h1>
          <div className="w-[59rem] h-0.5 bg-Amber mt-2"></div>
        </div>

        <div className="space-y-6 bg-gray-100 p-5 align-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 m-2">
            {executiveCommitteeMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="text-center border-0 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={member.img || defaultImg}
                  alt={member.name}
                  className="w-40 h-60 object-cover mx-auto rounded-full shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {executiveCommitteeMembers.slice(4).map((member, index) => (
              <div
                key={index}
                className="text-center border-0 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={member.img || defaultImg}
                  alt={member.name}
                  className="w-40 h-60 object-cover mx-auto rounded-full shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>

        </div>

      </div >
    </>
  );
}

export default ExecutiveBody;
