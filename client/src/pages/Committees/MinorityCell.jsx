import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MinorityCell() {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });
  return (
    <section className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="mb-8">
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-red-600"
        >
          Minority Cell Committee
          <div className="w-64 h-0.5 bg-Amber mt-2" />
        </motion.h1>
        {/* <h1 className="text-3xl font-bold text-red-600">Minority Cell Committee</h1> */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          In order to empower minority students, the college founded the Minority Cell in 2018. Minority Cell is dedicated to creating an atmosphere that values diversity and accepts people for who they are,
          regardless of their race, religion, or cultural background. It also pledges to safeguard all people, especially minorities, and to operate in accordance with Indian Constitutional
          requirements on these subjects. The cell is continually working to find solutions for the different issues that minority students face.
        </p>
      </header>

      {/* Objectives */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Ensure provisions for an environment where all such students feel safe and secure.</li>
          <li>Empower the faculty and students belonging to Minority Communities.</li>
          <li>Counsel and guide OBC students about various issues and help them manage academic activities.</li>
          <li>Resolve problems related to OBC students.</li>
        </ul>
      </div>

      {/* Faculty Table */}
      <div className="mb-8 overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Committee Members</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">S.No.</th>
              <th className="px-4 py-2 border">Name of the Faculty</th>
              <th className="px-4 py-2 border">Designation</th>
              <th className="px-4 py-2 border">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Dr. Sk. Sajeeda Parveen</td>
              <td className="px-4 py-2 border">Convener</td>
              <td className="px-4 py-2 border">CSE</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">Mr. Younus Mohamad</td>
              <td className="px-4 py-2 border">Member</td>
              <td className="px-4 py-2 border">EEE</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border">Mrs. Sk. Hussain Bi</td>
              <td className="px-4 py-2 border">Member</td>
              <td className="px-4 py-2 border">CSE</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">Mrs. Sk. Salma</td>
              <td className="px-4 py-2 border">Member</td>
              <td className="px-4 py-2 border">BS&H</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">5</td>
              <td className="px-4 py-2 border">Mr. Sk. Jilani</td>
              <td className="px-4 py-2 border">Member</td>
              <td className="px-4 py-2 border">Admin</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">6</td>
              <td className="px-4 py-2 border">Mrs. Sk. Saidabi</td>
              <td className="px-4 py-2 border">Member</td>
              <td className="px-4 py-2 border">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Student Coordinators Table */}
      <div className="mb-8 overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Coordinators</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">S.No.</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">K. Naga Chaitanya</td>
              <td className="px-4 py-2 border">Coordinator</td>
              <td className="px-4 py-2 border">AIML</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">D. Dinesh Kumar</td>
              <td className="px-4 py-2 border">Coordinator</td>
              <td className="px-4 py-2 border">AIDS</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border">D. Ceazars</td>
              <td className="px-4 py-2 border">Coordinator</td>
              <td className="px-4 py-2 border">ECE</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">G. Nani</td>
              <td className="px-4 py-2 border">Coordinator</td>
              <td className="px-4 py-2 border">CSE</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">5</td>
              <td className="px-4 py-2 border">K. Ashok</td>
              <td className="px-4 py-2 border">Coordinator</td>
              <td className="px-4 py-2_border">MBA</td>
            </tr>
            <tr className="hover:bg-primaryColor transition">
              <td className="px-4 py-2 border">6</td>
              <td className="px-4 py-2 border">G. Amulya</td>
              <td className="px-4 py-2 border">Coordinator</td>
              <td className="px-4 py-2 border">BS&H</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PDF Embed & Download */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Downloadable Document</h3>
        <div className="mt-4 flex justify-center">
          <iframe
            src="https://gvrs.ac.in/wp-content/uploads/2024/02/MINORITY.pdf"
            width="100%"
            height="600px"
            className="border border-gray-300 rounded-lg shadow-md mb-4"
          />
        </div>
        <a
          href="https://gvrs.ac.in/wp-content/uploads/2024/02/MINORITY.pdf"
          download
          className="inline-block px-6 py-2 bg-primaryColor text-white font-medium rounded shadow hover:bg-opacity-90 transition"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}