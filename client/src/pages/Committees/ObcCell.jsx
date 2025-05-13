import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { File, DownloadCloud } from "lucide-react"

// Data for the tables
const obcCommitteeData = [
    { id: 1, name: 'Mr.V.Prasanth babu', designation: 'Convener', department: 'MBA' },
    { id: 2, name: 'Mr.RPS Raju', designation: 'Member', department: 'EEE' },
    { id: 3, name: 'Mr.D.Ashok', designation: 'Member', department: 'MECH' },
    { id: 4, name: 'Mr.K.Rajesh', designation: 'Member', department: 'ECE' },
    { id: 5, name: 'Mr.A.S.R.Prasanth', designation: 'Member', department: 'CSE' },
    { id: 6, name: 'Mr.k.Sankara Rao', designation: 'Member', department: 'BS&H' },
];

const studentCoordinatorsData = [
    { id: 1, name: 'A.Yamini', designation: 'Coordinator', department: 'AIML' },
    { id: 2, name: 'CH.Pavan kumar', designation: 'Coordinator', department: 'MECH' },
    { id: 3, name: 'SK.Jani basha', designation: 'Coordinator', department: 'ECE' },
    { id: 4, name: 'P.Venu babu', designation: 'Coordinator', department: 'CSE' },
    { id: 5, name: 'SK.Basha', designation: 'Coordinator', department: 'MBA' },
    { id: 6, name: 'CH.Anusha', designation: 'Coordinator', department: 'BS&H' },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Stagger the appearance of children
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const OBCCELL = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleDownloadPDF = () => {
        // Replace this with your actual PDF download logic
        console.log('Downloading PDF...');
        const pdfUrl = '/pdfs/OBC-CELL.pdf'; // Use the correct path

        // Create a new link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'OBC-Cell.pdf'; //  filename
        link.style.display = 'none'; // Hide the link

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
    };


    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 max-w-7xl" // Added max-w-7xl and mx-auto
        >
            {/* Heading */}
            <div className="w-full mb-6">
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 relative inline-block"
                    style={{
                        "::after": {
                            content: "''",
                            position: 'absolute',
                            left: 0,
                            bottom: '-2px',
                            backgroundColor: '#4a5568',
                            height: '2px',
                            width: '100%',
                        },
                    }}
                >
                    OBC Cell
                </h2>
                <div className="h-0.5 bg-black w-full"></div>
            </div>

            {/* OBC Committee Heading */}
            <motion.div variants={itemVariants} className="w-full mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">OBC Committee</h3>
            </motion.div>

            {/* Introduction Text */}
            <motion.div variants={itemVariants} className="mb-8 text-gray-700">
                <p className="mb-4">
                    The college's OBC Committee was founded in 2018 with the intention of empowering OBC students.
                    OBC Cell is dedicated to creating an atmosphere that values diversity and accepts people for who
                    they are regardless of their race, religion, or cultural background. It also pledges to safeguard
                    people and follow Indian Constitutional laws in these situations. The cell is constantly working
                    to provide solutions for OBC students&apos; varied issues.
                </p>
            </motion.div>

            {/* Objectives List */}
            <motion.div variants={itemVariants} className="w-full mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Objectives</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        To make sure that conditions are set up so that all of these students feel comfortable and protected.
                    </li>
                    <li>
                        To give academic members and students who are members of Other Backward Communities (OBC) more power.
                    </li>
                    <li>
                        To advise and mentor OBC students on a range of matters and assist them in handling their academic
                        obligations.
                    </li>
                    <li>To find solutions for OBC students&apos; issues.</li>
                </ul>
            </motion.div>

            {/* OBC Committee Table */}
            <motion.div variants={itemVariants} className="w-full mb-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">S.No.</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">Name of the Faculty</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">Designation</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {obcCommitteeData.map((item) => (
                                <tr key={item.id} className="bg-white">
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.id}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.name}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.designation}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Student Coordinators Table */}
            <motion.div variants={itemVariants} className="w-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Student Coordinators</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">S.No.</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">Name</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">Designation</th>
                                <th className="px-4 py-2 border border-gray-300 text-left text-sm sm:text-base font-medium text-gray-700">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentCoordinatorsData.map((item) => (
                                <tr key={item.id} className="bg-white">
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.id}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.name}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.designation}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-sm sm:text-base text-gray-600">{item.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Iframe for PDF */}
            <div className="mt-8 flex justify-center w-full">
                <div className="w-full max-w-7xl mx-auto">
                    <iframe
                        src="/pdfs/OBC-CELL.pdf"
                        width="100%"
                        height="600px"
                        className="border border-gray-300 rounded-lg shadow-md"
                        title="OBC Cell PDF" // Add a title for accessibility
                    />
                </div>
            </div>

            {/* Download PDF Section */}
            <div className="w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
                <button
                    onClick={handleDownloadPDF}
                    className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:text-blue-400 border-blue-500/30 transition-colors duration-200 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-md w-full sm:w-auto shadow-lg"

                >
                    <DownloadCloud className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download PDF
                </button>
            </div>

        </motion.div>
    );
};

export default OBCCELL;
