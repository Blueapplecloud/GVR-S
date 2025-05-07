import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const SH = () => {
  const aboutText = `
The department of Science and Humanities at GVR&S-CET offers the bridge courses in English, Mathematics, Physics, Chemistry, Managerial Economics & Financial Analysis and Environmental science that help the engineering freshmen get attuned to the specialized engineering domains.
In addition, the department coordinates a smoother transition of our novice engineering aspirants from the academic setting they experienced at 10 + 2 level to the study ambience they will encounter in their undergraduate Engineering and Technology course.
As an ancillary department that supports the conduct of specialized courses, offered in its domain, as a part of the curricula of other main branches of engineering the department acquires a multi-disciplinary nature and so the faculty belongs to different disciplines namely, English, Mathematics, Physics, Chemistry, Managements Studies and Environmental Sciences.
The department shields the responsibility of the consolidation of attendance and the seasonal marks of the first years and the maintenance of the Parent-Institution communications for the welfare of the students.
The faculty has addressed itself to the need to orient the students towards the ultimate goal of relating their knowledge to the reality of life situations.  
`;

  const hodMessage = ``;

  const missionPoints = [
    "To help young souls through dedicated teaching, commitment and innovative instructional methods, in discovering their talents.",
    "To afford a high level of competence in the study of different engineering streams.",
    "To provide the ground work to produce graduates committed to integrity, professionalism and lifelong learning by widening their knowledge horizons in range and depth.",
  ];
  const infrastructure = `
  The Department has well equipped and state of the art Engineering Physics & Chemistry Labs as per the JNTU norms, AICTE requirements for the First Year B.Tech students of all braches. The students have to complete at least 12 experiments in 16 weeks.
The English lab is established which includes English language lab (Phonetics) and Interactive Communication Skills lab. The language lab focuses computer-aided multi-media instruments and leashes acquisition through a variety of self-instructional learner-friendly modes of language learning in phonetics, accent, intonation and Rhythm. The language lab provides the required exposure to face computer-based competitive exams such as GRE, TOEFL, & GMAF.
Interactive Communication Skills lab caters to the needs of the students in facing interviews, group discussion, public speaking, report writing, resume writing, format making and paper presentation. English lab builds up the confidence of the students to develop leadership qualifies through communicative competence.
Advanced English Communication Skills lab caters to the needs of the III B. Tech. students of all branches in preparing them for better Employability and Workshop Lab
`;

const infrastructureData = [
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/PHY-600x450.jpg',
      text: ``,
    },
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/CHEM-600x450.jpg',
      text: ``,
    },
    {
        image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/WORK-1-600x450.jpg',
        text: ``,
      },
      {
        image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/CL-5-600x450.jpg',
        text: ``,
      },
    // Add more images and text as needed
  ];

  return (
    <DepartmentsComponent
      sectionName="SCIENCE AND HUMANITIES"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="/Images/S&HImage.png"
      hodImage="/Images/management/S&H HOD.jpg"
      visionContent={`To impart the knowledge which is relevant to the core engineering subjects as per university curricula in graduate students studying in different engineering streams.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName="DR. M. AVINASH"
      hodDesignation=" Msc(Maths),Msc(stat),M.phil,M.Tech(cse),MBA,Ph.d"
      infrastructureImages={infrastructureData}
    />
  );
};

export default SH;
