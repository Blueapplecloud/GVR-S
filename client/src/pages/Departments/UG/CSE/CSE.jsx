import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const CSE = () => {
  const aboutText = `
   CSE Department came into inception from 2007 onwards with an intake of 60 seats in B.Tech, and enhanced to 120 seats in the year 2009. In view of the accentuated interest towards CSE and its immensity of growth the Department of Computer Science and Engineering has developed well appointed laboratories where the main focus is on the development of logical reasoning that is stressed upon, in all practical applications. The department boasts of promoting a unique mode of teaching-learning setting, one that makes an effective utilization of the advanced aids of teaching. The Department imparts world class training and provides state of the art of computing facilities to the students. CSE Department is offering M.Tech (CSE) program from 2012 onwards with an intake of 18 and enhanced to 24 seats in the year 2013.
  `;

  const hodMessage = `
   Papa Rao Challagundla Associate Professor has around 13 Years of work Experience in both Telugu States .He have Academic Qualifications B.Tech.,MTech and thesis submission Ph.D.  all from  JNTUH University only. also Certified Cloud Computing and Computer Networs and Internet Protocol from NPTEL Swayam. Published papers in Various reputed International Journals . Member in VSI , International Association of Engineers , Good Human being and Played roles until now ,like mentor,Lab i/c,PG coordinator now as Head.
  `;

  const missionPoints = [
    "To create a learning environment to transform the students with strong fundamentals in computer science, analytical, programming and problem solving skills.",
    "To provide exposure to students to latest tools & technologies in the area of computer science and engineering.",
    "To create a platform for Research, exhibiting leadership qualities, professionally ethical citizens through affinity activities and self governance.",
  ];
  const infrastructure = `
  Our department is equipped with state-of-the-art networking equipment to ensure fast and reliable communication across teams.
  We have modern office spaces with ergonomic workstations designed for comfort and productivity.
  The infrastructure also includes high-performance servers to meet our computing needs, along with a secure data center that operates 24/7.
  Additionally, we utilize cloud infrastructure for scalable solutions to meet the growing demands of the business.
`;

const infrastructureData = [
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/CL-1-600x450.jpg',
      text: `C-Programming Lab                                             
Unix And Shell Programming Lab
Object Oriented Programming Lab`,
    },
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/CL-2-600x450.jpg',
      text: `Hadoop Lab
      Computer Networks And Case Tools Lab
      Web Technologies Lab`,
    },
    // Add more images and text as needed
  ];

  return (
    <DepartmentsComponent
      sectionName="Computer Science and Engineering"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://wallpapercave.com/wp/wp2700093.jpg"
      hodImage="/Images/management/CSE HOD.jpg"
      visionContent={`To be top in the field of computer science and engineering, building competence through student centric learning for self-employment, research, industry and society needs.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName="Dr. CH. PAPA RAO"
      hodDesignation=" B.Tech,M.Tech,(Ph.D.)"
      infrastructureImages={infrastructureData}
    />
  );
};

export default CSE;
