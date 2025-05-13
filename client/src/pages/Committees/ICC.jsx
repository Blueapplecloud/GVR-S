import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ICC() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const faculty = [
    { no: 1, name: 'Dr. B. Ramanuja Srinivas', role: 'Convener', dept: 'Mech' },
    { no: 2, name: 'Mrs. Rajya Lakshmi', role: 'Member', dept: 'EEE' },
    { no: 3, name: 'Mrs. Prathibha Praharsha', role: 'Member', dept: 'ECE' },
    { no: 4, name: 'Mr. P. Ravi Kumar', role: 'Member', dept: 'Mech' },
    { no: 5, name: 'Mr. N. V. V. Satyanarayana', role: 'Member', dept: 'Mech' },
    { no: 6, name: 'Mr. Ch. Papa Rao', role: 'Member', dept: 'CSE' }
  ];

  const students = [
    { no: 1, name: 'SV. Nagarjun Reddy', role: 'Coordinator', dept: 'AIML' },
    { no: 2, name: 'L. Naga Veera Venkat', role: 'Coordinator', dept: 'AIDS' },
    { no: 3, name: 'M. Ashwini', role: 'Coordinator', dept: 'ECE' },
    { no: 4, name: 'J. Kiran', role: 'Coordinator', dept: 'CSE' },
    { no: 5, name: 'K. Saraswathi', role: 'Coordinator', dept: 'MBA' },
    { no: 6, name: 'T. Janaki', role: 'Coordinator', dept: 'BS&H' }
  ];

  return (
    <section className="container mx-auto my-10 p-6  shadow-lg rounded-lg">
      {/* Header */}
      <header className="mb-8 ">
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-red-600"
        >
          Internal Complaint Committee (ICC)
          <div className="w-64 max-sm:w-20 h-0.5 bg-Amber mt-2 " />
        </motion.h1>
        {/* <div className="w-32 max-sm:w-20 h-0.5 bg-amber-500 mt-2 mx-auto" /> */}
        <p className="mt-4 text-lg max-sm:text-base text-gray-700 leading-relaxed">
          The Internal Complaint Committee ensures all disciplinary and anti-ragging matters are handled
          fairly, maintaining a respectful academic environment. Chaired by a senior professor with
          cross-departmental faculty members, the ICC investigates complaints and recommends actions
          to the principal based on prime facie evidence.
        </p>
      </header>

      {/* Objectives */}
      <div className="mb-8">
        <h2 className="text-2xl max-sm:text-xl font-semibold text-orange-500 mb-4">Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-base max-sm:text-sm text-gray-700">
          <li>Establish a supportive atmosphere for new students via regular consultations.</li>
          <li>Monitor student activities to prevent unauthorized organizations and disruptions.</li>
          <li>Investigate complaints and identify responsible parties.</li>
          <li>Submit findings with recommendations for disciplinary action to the principal.</li>
          <li>Ensure strict penalties for guilty parties, promoting a safe campus.</li>
        </ul>
      </div>

      {/* Faculty Table */}
      <div className="mb-8 overflow-x-auto">
        <h3 className="text-xl max-sm:text-lg font-semibold text-gray-800 mb-4">Committee Members</h3>
        <table className="min-w-full bg-white border border-gray-200 text-base max-sm:text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 max-sm:px-2 py-2 border">S.No.</th>
              <th className="px-4 max-sm:px-2 py-2 border">Name of the Faculty</th>
              <th className="px-4 max-sm:px-2 py-2 border">Designation</th>
              <th className="px-4 max-sm:px-2 py-2 border">Department</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map(({ no, name, role, dept }) => (
              <tr key={no} className="hover:bg-primaryColor transition">
                <td className="px-4 max-sm:px-2 py-2 border">{no}</td>
                <td className="px-4 max-sm:px-2 py-2 border">{name}</td>
                <td className="px-4 max-sm:px-2 py-2 border">{role}</td>
                <td className="px-4 max-sm:px-2 py-2 border">{dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Coordinators Table */}
      <div className="mb-8 overflow-x-auto">
        <h3 className="text-xl max-sm:text-lg font-semibold text-gray-800 mb-4">Student Coordinators</h3>
        <table className="min-w-full bg-white border border-gray-200 text-base max-sm:text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 max-sm:px-2 py-2 border">S.No.</th>
              <th className="px-4 max-sm:px-2 py-2 border">Name</th>
              <th className="px-4 max-sm:px-2 py-2 border">Role</th>
              <th className="px-4 max-sm:px-2 py-2 border">Department</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ no, name, role, dept }) => (
              <tr key={no} className="hover:bg-primaryColor transition">
                <td className="px-4 max-sm:px-2 py-2 border">{no}</td>
                <td className="px-4 max-sm:px-2 py-2 border">{name}</td>
                <td className="px-4 max-sm:px-2 py-2 border">{role}</td>
                <td className="px-4 max-sm:px-2 py-2 border">{dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PDF Embed & Download */}
      <div className="mb-4">
        <h3 className="text-xl max-sm:text-lg font-semibold text-gray-800 mb-2">Downloadable Document</h3>
        <object
          data="https://gvrs.ac.in/wp-content/uploads/2024/02/ICC.pdf"
          type="application/pdf"
          className="w-full h-96 max-sm:h-64 mb-4 border border-gray-200 rounded"
          aria-label="ICC Document"
        />
        <a
          href="https://gvrs.ac.in/wp-content/uploads/2024/02/ICC.pdf"
          download
          className="inline-block px-6 max-sm:px-4 py-2 bg-primaryColor text-white font-medium rounded shadow hover:bg-opacity-90 transition"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
