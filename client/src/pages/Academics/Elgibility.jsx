import React from "react";

const Elgibility = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
        Eligibility Conditions
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-3">
          Eligibility Criteria for Admission to B.Tech Courses:
        </h2>
        <p className="mb-2">
          The minimum qualification for admission to the first year of the
          B.Tech course is a pass in the Intermediate (10 + 2) conducted by the
          board of Intermediate education, Govt. of Andhra Pradesh with
          Mathematics, Physics, and Chemistry as optional subjects.
        </p>
        <ul className="list-disc ml-6">
          <li>
            70% of the seats are allotted based on the merit in the Engineering
            and Medical Common Entrance Test (EAMCET) conducted by Govt. of
            Andhra Pradesh.
          </li>
          <li>
            30% of the seats are earmarked for Management Quota candidates.
          </li>
          <li>
            In addition to the above, Diploma holders are admitted in the second
            year of B.Tech to the extent of 10% of intake based on the merit in
            the Engineering Common Entrance Test (ECET), under the lateral entry
            scheme conducted by Govt. of Andhra Pradesh.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-3">
          The Eligibility Criteria for Admission to M.Tech Courses:
        </h2>
        <ul className="list-disc ml-6">
          <li>
            The minimum qualification for admission into M.Tech is a pass in
            B.E. / B.Tech in the concerned stream.
          </li>
          <li>
            70% of the seats are allotted based on GATE score / rank obtained in
            PGECET for M.Tech Course.
          </li>
          <li>
            30% of the seats are earmarked for Management Quota candidates.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-3">
          The Eligibility Criteria for Admission to MBA Course:
        </h2>
        <ul className="list-disc ml-6">
          <li>
            The minimum qualification for admission to the first year of the MBA
            is a pass in an undergraduate course (10 + 2 + 3).
          </li>
          <li>
            70% of the seats are allotted based on the merit in the Integrated
            Common Entrance Test (ICET) conducted by Govt. of Andhra Pradesh.
          </li>
          <li>
            30% of the seats are earmarked for Management Quota candidates.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-orange-600 mb-3">
          The Eligibility Criteria for Admission to DIPLOMA Courses:
        </h2>
        <p className="mb-2">
          Every candidate desirous of seeking admission into
          Engineering/Non-Engineering Diploma courses can apply online for
          POLYCET. No separate application form for admission is prescribed. The
          filled-in application for POLYCET itself is an application for
          admission. The POLYCET examination is conducted by the State Board of
          Technical Education and Training, Andhra Pradesh.
        </p>
      </section>

      <div className="p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Eligibility Criteria to Appear for Common Entrance Test
        </h1>
        <ul className="list-decimal ml-6 space-y-2 text-gray-700">
          <li>Candidate shall be an Indian National.</li>
          <li>
            Candidate should belong to the State of Andhra Pradesh as defined in
            G.O.(P).No. 646, Education (w) Dept., dated 10-07-1979 and its
            subsequent amendments.
          </li>
          <li>
            Candidates should have passed S.S.C. Examination conducted by State
            Board of Secondary Education, Andhra Pradesh/ Telangana or any other
            examination recognized as equivalent thereto by the Board of
            Secondary Education, A.P/TS. such as Central Board of Secondary
            Education (CBSE), Indian Council for Secondary Education (ICSE),
            National Institute of Open School (NIOS), A.P. Open School Society
            (APOSS), X class examination conducted by various State Boards of
            Secondary Education in India with Mathematics as one of the
            subjects, and obtained at least 35% marks in the qualifying
            examination.
          </li>
          <li>
            Candidates belonging to NIOS/APOSS/CBSE/ICSE/OTHER Examinations
            recognized as equivalent to SSC by A.P. Govt. SHOULD HAVE PASSED ALL
            THE SUBJECTS including Mathematics, Physics, Chemistry, with minimum
            of 35% Marks in each subject.
          </li>
          <li>
            There is no age restriction for appearing for POLYCET. However, the
            maximum eligible age for obtaining a scholarship, the guidelines
            prescribed in Memo No. 10537/SW(Edn.2)/2011, and issued from time to
            time by Social Welfare (Edn.) Department shall apply.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Elgibility;
