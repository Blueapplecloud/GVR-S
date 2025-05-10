import React from "react";
import { Document, Page } from "react-pdf";

const IQAC = () => {
  return (
    <>
      <h1 className="p-10 font-bold text-4xl text-left">IQAC</h1>
      <div className="p-16 pt-6 font-[Arial] text-gray-800 leading-relaxed">
        <h3 className="font-bold text-2xl text-left">
          INTERNAL QUALITY ASSURANCE CELL (IQAC)
        </h3>
        <p className="mt-2">
          To improve the quality in the academic process and also as a
          pre-accreditation exercise, the Internal Quality Assurance Cell (IQAC)
          was established in the academic year 2018-2019 at the college. The
          objective of the cell is to develop a system for conscious,
          consistent, and catalytic improvement in the overall performance of
          the institution at all levels with the involvement of all
          stakeholders.
        </p>

        <h3 className="font-bold text-xl mt-4 text-left">STRATEGIES</h3>
        <p className="font-bold mt-2">
          IQAC shall evolve mechanisms and procedures for:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Timely, efficient, and progressive performance of academic,
            administrative, and financial tasks.
          </li>
          <li>The relevance and quality of academic and research programs.</li>
          <li>
            Equitable access and affordability of academic programs for various
            sections of society.
          </li>
          <li>
            Optimization and integration of modern methods of teaching and
            learning.
          </li>
          <li>The credibility of evaluation procedures.</li>
          <li>
            The adequacy, maintenance, and proper allocation of support
            structures and services.
          </li>
          <li>
            Research sharing and networking with other institutions in India.
          </li>
        </ul>

        <h3 className="font-bold text-xl mt-4 text-left">FUNCTIONS</h3>
        <p className="font-bold mt-2">
          Some of the functions expected of the IQAC are:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Development and application of quality benchmarks/parameters for
            various academic and administrative activities of the institution.
          </li>
          <li>
            Dissemination of information on quality parameters of higher
            education.
          </li>
          <li>
            Organization of workshops, seminars on quality-related themes and
            promotion of Quality Circles.
          </li>
          <li>
            Documentation of various programs/activities leading to quality
            improvement.
          </li>
          <li>Acting as a nodal agency for quality-related activities.</li>
          <li>
            Preparation of the Annual Quality Assurance Report (AQAR) to be
            submitted to UGC/AICTE/University based on quality parameters.
          </li>
        </ul>

        {/* Embedding the PDF */}
        <h3 className="font-bold text-xl mt-6 text-left">
          IQAC Meetings - PDF
        </h3>
        <div className="mt-4 flex justify-center">
          <iframe
            src="/pdfs/IQAC-Meetings.pdf "
            width="100%"
            height="600px"
            className="border border-gray-300 rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default IQAC;
