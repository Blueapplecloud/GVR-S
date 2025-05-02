import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Dean() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div className="container m-10 bg-white shadow-lg rounded-md ">
            <motion.h1
                ref={ref}
                // key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="!text-4xl font-bold text-left pb-2 mb-6"
            >
                Dean
                <div className="w-[7rem] h-0.5 bg-Amber mt-2"></div>
            </motion.h1>


            <div >
                <p >It is my privilege and pleasure to welcome you all to GVR&S College of Engineering and Technology.</p>
                <div className="float-end m-5 mt-0 text-center">
                    <img
                        src="https://gvrs.ac.in/wp-content/uploads/2023/06/dean-248x300.jpg"
                        alt="Dr. Vara Prasad"
                        className="h-90 rounded-lg shadow-lg mx-auto"
                    />
                    <p className="mt-3 font-semibold text-Red">Dr. Vara Prasad, Dean</p>
                </div>
                <p className='text-justify'>It is an Institute where discipline and punctuality with conducive environment will provide quality education and development in frontier areas of engineering and technology. We, the faculty, staff and administration at GVR&S will work for producing technologically superior and ethically strong engineers for the country and the world with a purpose to serve the society & mankind. With strong team work we would achieve technological excellence in a highly competitive environment around us.</p>
                <p className='text-justify'>As we strive for excellence in what we do, the Institute is constantly making endeavors to scale new heights by developing synergy between academic knowledge, technical skill set in line with industry needs, high moral values and sensitivity to the environment and the nation. Therefore apart from academics, co-curricular activities, sports and cultural development will form an important part of the life at GVR&S from the very beginning.</p>
                <p className='text-justify'>I wish our students to soar high by excelling in academics and other activities upholding the name of GVR&S and to bring fame to the institution with their sterling qualities. In an era of stiff competition, success can only be achieved if one makes the right kind of endeavor at the right time and in the right direction. “Success will never lower its standard to accommodate us; we have to raise our standard to achieve it”.</p>
                <p className='text-justify'>With this I invite you to visit GVR&S  to experience the difference.</p>
                <p className='mt-5'>
                    <strong className=' text-Red'>PROFILE:</strong><br /><br />
                </p>
                <p className='mt-2'><strong className=' text-primaryColor'>EDUCATIONAL QUALIFICATION:</strong></p>
                <p className='mt-3'> <b>Ph.D: </b> Quality of work Life in Banks – <b>A Study with reference to Andhra Bank and ICICI Bank,</b> Acharya Nagarjuna University.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>MPhil:</b> Dissertation entitled “<b>Organizational Climate</b>” in Maddi Lakshmaiah Tobbaco Company, Ganapavaram, chilakaluri pet.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>SLET:</b> in Management (1997)  APGSG Hyd, A. P. ( Accredited by UGC)</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>MBA: </b>(Personnel Management): 1992-1994 Andhra University Campus, Visakhapatnam.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>MA: </b>(History): Andhra University, Vishakhapatnam.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>ML: </b>(Business Law): Andhra University, Visakhapatnam.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>BA: </b>(Economics): Acharya Nagarjuna University.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-3'> <b>BL: </b>Andhra University.</p>
                <div className='w-full h-0.5 bg-[#65656533] mt-2'></div>
                <p className='mt-6'><strong className=' text-primaryColor'>PROFESSIONAL EXPERIENCE:</strong></p>
                <div className='mt-3 space-y-4'>
                    <p >Working as Dean, <b>GVR&S</b> College of Engineering and Technology, Guntur from 2020 to till date</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p className='mt-3'>Worked as principal, Nalanda Institute of PG studies, Kantepudi, Sattenapalli, Guntur (Dt.) from 2013 to 2020</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p className='mt-3'>Worked as P.G Director in K. Chandrakala PG College, Tenali, Guntur (Dt.) From 2005 to 2013.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p className='mt-3'>Worked as Associate Professor in MBA Department in Nalanda Institute of PG studies, Kantepudi, Sattenapalli, Guntur (Dt.) from 2003-2005.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p className='mt-3'>Worked as Asst. Professor in management studies, department of applied science and humanities in Narasaraopet Engineering and post graduation Department, Narasaraopet, Guntur (Dt.) from 2002-2003.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p className='mt-3'>Worked as Asst. Professor in department of management studies in S.C.A.S Degree College, Maddirala Guntur (Dt.) from 1995-2002.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                </div>
                <p className='mt-6'><strong className=' text-primaryColor'>SEMINARS / WORKSHOPS ATTENDED:</strong></p>
                <div className='mt-3 space-y-2'>
                    <p>National conference on management strategies in service sector.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>National conference on research issues in business management- 2K13</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>National seminar on social justice: Dr. B.R. Ambedkar held on 6-7th January, 2003 organized by Acharya Nagarjuna University</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>National seminar on Women Empowerment in india organized by Acharya Nagarjuna University in 2007.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Attended one day work shop on <b>Women towards Development: Role of Non - Governments Agencies 2002</b> organized by center for women studies Acharya Nagarjuna University.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                </div>
                <p className='mt-6'><strong className=' text-Red'>ARTICLES PUBLISHED:</strong></p>
                <p className='mt-2'><strong className=' text-primaryColor'>INTERNATIONAL JOURNALS:</strong></p>
                <div className='mt-3 space-y-2'>
                    <p>International Journal on Strategies for Business Excellence (IJSBE) vol 7/ number 02. ISSN: 2277-761X</p>
                    <p >Article titled: <b>Managing the stress at work place.</b> Page no 56 to 61</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>An International of Multidisciplinary research journal ISSN: 2250-1193 vol 3/ number 07, on a case study on <b>performance of a milk dairy; principal component analysis.</b></p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p><b>Contemporary Research in India - A Peer reviewed multi disciplinary International Journal.</b> Special issue: Feb. 2015. Vol. 01, Title: <b>"Work Life Balance of The Staff in APSRTC"</b></p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p><b>Contemporary Research in India - A Peer reviewed multi disciplinary International Journal.</b> Special issue: Feb. 2015. Vol. 02, Title: <b>"Labour Welfare With Reference to Maddi Lakshmaiah Company Ltd, Ganapavaram, Guntur(dt) Andrapradesh"</b></p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                </div>
                <p className='mt-6'><strong className=' text-primaryColor'>NATIONAL JOURNALS:</strong></p>
                <div className='mt-3 space-y-2'>
                    <p>An article titled "<b>Organizational climate</b>" in HRD Times - November, 2005</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>An article titled "<b>Women empowerment</b>" in HRD Times -February, 2007</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>National conference research issues in business management - 2K13 conducted by St. Anns Engineering College, Chirala, 08<sup>th</sup> March 2013.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Article titled <b>Knowledge Mnanagement.</b> Page No: 30 to 31</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>National Conference in Christu Jayanthi Jubilee college, Guntur</p>
                    <p>Article title: "<b>Emerging Trends in Retail Sector</b>".</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>An article titled "<b>Emerging Trends in Industrial relations</b>" February, 2014.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>ANU Journal of Commerce and Management, Vol. 4 (i & ii), ISSN: 0976-0957, (June-Dec 2012)</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                </div>
                <p className='mt-6'><strong className=' text-primaryColor'>BOOKS:</strong></p>
                <div className='mt-3 space-y-2'>
                    <p>Book title: <b>Financial innovations and challenges</b>. ISBN - 978-93-82163-81-7</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Book Title: <b>Human Resource Development issues, Challenges and Strategies</b>. ISBN - 978-81-92283-3-9</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Book title: <b>Changing scenario of Human Resources in India</b> ISBN 978-93-5097-139-0 PCH 178.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Book title: <b>Changing scenario of Human Resources in India</b> ISBN 978-93-5097-139-0 PCH 178.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Book title: <b>Empowerment of Women in India New Strategies</b> ISBN 978-81-8484-389-2 Regal Publications.</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                    <p>Book title: <b>HRD Strategies</b> ISBN 978-93-85100-05-5</p>
                    <div className='w-full h-0.5 bg-[#65656533]'></div>
                </div>
            </div>
        </div>
    );
}

export default Dean