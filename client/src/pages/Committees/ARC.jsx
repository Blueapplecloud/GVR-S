import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { File, DownloadCloud } from "lucide-react"

const committeeData = [
    { id: 1, name: 'Dr. M. Avinash', designation: 'Convener', department: 'BS&H' },
    { id: 2, name: 'Mr. T. Lingaiah', designation: 'Member', department: 'EEE' },
    { id: 3, name: 'Mr. S. Seshagiri Rao', designation: 'Member', department: 'ECE' },
    { id: 4, name: 'Mr. B. Sunil Kumar Naik', designation: 'Member', department: 'MECH' },
    { id: 5, name: 'Mr. Ch. Papa Rao', designation: 'CSE' },
    { id: 6, name: 'Mr. T. Vasantha Rao', designation: 'MBA' },
    { id: 7, name: 'Mr. A. Prabhakar Rao', designation: 'PD' },
];

const studentCoordinatorsData = [
    { id: 1, name: 'V. Sai Jyothi', designation: 'Coordinator', department: 'AMI' },
    { id: 2, name: 'vishal kumar sharma', designation: 'Coordinator', department: 'AIDS' },
    { id: 3, name: 'Sk. Jani Basha', designation: 'Coordinator', department: 'ECE' },
    { id: 4, name: 'S.Sekhar', designation: 'Coordinator', department: 'CSE' },
    { id: 5, name: 'K.Danesh', designation: 'Coordinator', department: 'MBA' },
    { id: 6, name: 'N.Hemanth Reddy', designation: 'Coordinator', department: 'BS&H' },
];

const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const rowVariants = {
    hidden: (i) => ({ opacity: 0, y: 20 * i }),
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 + i * 0.1, ease: 'easeInOut' },
    }),
};

// Mock function for initiating download
const handleDownloadPDF = () => {
    // Replace this with your actual PDF download logic
    console.log('Downloading PDF...');
    const pdfUrl = '/pdfs/ANTI-RAGGING-1.pdf'; // Use the correct path

    // Create a new link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Anti-Ragging-Regulations.pdf'; //  filename
    link.style.display = 'none'; // Hide the link

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
};

const ARC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Ensure animation happens only once

    return (
        <motion.div
            ref={ref}
            variants={tableVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="px-5 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 flex flex-col items-start w-full"
        >
            <div className="w-full mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
                    Anti-Ragging Committee
                </h2>
                <div className="h-0.5 bg-gray-900 w-full"></div>
            </div>

            {/* Ragging Definition and Punishment */}
            <div className="mb-8 text-gray-700">
                <p className="mb-4">
                    <span className="font-semibold">Ragging is a CRIME</span> and is strictly prohibited. It is punishable under
                    State Govt., Central Govt. and Supreme Court Laws.
                </p>
                <p className="mb-4">
                    <span className="font-semibold">Punishment:</span> Imprisonment up to 3 years and Fine up to ₹ 50,000/-
                </p>
                <p className="mb-4">Dismissal from College.</p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Objectives:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        To forbid, stop and eradicate the will of <span className="font-semibold">RAGGING</span>, including any
                        action on the part of a student that results in teasing, treating or handling with
                        rudeness a fresher or any other student; or any disorderly conduct which causes or is likely to
                        cause physical or psychological harm or raise apprehension or fear in a fresher or any other
                        student.
                    </li>
                    <li>
                        To monitor, direct and oversee the functions and performance of the Anti-Ragging squads in
                        prevention and curtailing of ragging in the institution.
                    </li>
                </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        To be vigilant at all hours all around the campus and other places vulnerable to incidents of,
                        and having the potential of, ragging and shall be empowered to inspect such places.
                    </li>
                    <li>
                        To make surprise raids on hostels, and other places vulnerable to incidents and having the
                        potential for ragging.
                    </li>
                    <li>
                        To conduct an "on-the-spot enquiry" into any incident of ragging referred to it by the faculty
                        or parent or guardian, as the case may be; and the enquiry report along with recommendations
                        shall be submitted to the Head of the Institution for action.
                    </li>
                    <li>
                        To ensure the display of posters on Institution and Department Notice Boards and other
                        prominent designated places.
                    </li>
                    <li>To offer services of counseling and create awareness to the students.</li>
                </ul>
            </div>

            {/* Committee Members Table */}
            <div className="w-full mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Committee Members:</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    S.No
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Name of the Faculty
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Designation
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Department
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {committeeData.map((item, index) => (
                                <motion.tr
                                    key={item.id}
                                    variants={rowVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}

                                >
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.id}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.name}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.designation}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.department}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Student Coordinators Table */}
            <div className="w-full mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Student Coordinators:</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    S.No
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Name
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Designation
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Department
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {studentCoordinatorsData.map((item, index) => (
                                <motion.tr
                                    key={item.id}
                                    variants={rowVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.id}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.name}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.designation}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.department}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Iframe for PDF */}
            <div className="mt-4 flex justify-center w-full">
                <div className="w-full max-w-7xl mx-auto">
                    <iframe
                        src="/pdfs/ANTI-RAGGING-1.pdf"
                        width="100%"
                        height="600px"
                        className="border border-gray-300 rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Download PDF Section */}
            <div className="w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
                <button
                    onClick={handleDownloadPDF}
                    className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:text-blue-400
                             border-blue-500/30 transition-colors duration-200
                             flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-md"
                >
                    <DownloadCloud className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download PDF
                </button>
            </div>
        </motion.div>
    );
};

export default ARC;
