import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const CSEAIML = () => {
  const aboutText = `
CSE Department came into inception from 2007 onwards with an intake of 60 seats in B.Tech, and enhanced to 120 seats in the year 2009. In view of the accentuated interest towards CSE and its immensity of growth the Department of Computer Science and Engineering has developed well appointed laboratories where the main focus is on the development of logical reasoning that is stressed upon, in all practical applications. The department boasts of promoting a unique mode of teaching-learning setting, one that makes an effective utilization of the advanced aids of teaching. The Department imparts world class training and provides state of the art of computing facilities to the students. CSE Department is offering M.Tech (CSE) program from 2012 onwards with an intake of 18 and enhanced to 24 seats in the year 2013.  `;

  const hodMessage = `
   Papa Rao Challagundla Associate Professor has around 13 Years of work Experience in both Telugu States .He have Academic Qualifications B.Tech.,MTech and thesis submission Ph.D.  all from  JNTUH University only. also Certified Cloud Computing and Computer Networs and Internet Protocol from NPTEL Swayam. Published papers in Various reputed International Journals . Member in VSI , International Association of Engineers , Good Human being and Played roles until now ,like mentor,Lab i/c,PG coordinator now as Head.
  `;

  const missionPoints = [
    "To develop professionals who are skilled in the area of Artificial Intelligence and Data Science.",
    "To impart quality and value based education and contribute towards the innovation of computing, expert system, Data Science to raise satisfaction level of all stakeholders.",
    "Our effort is to apply new advancements in high performance computing hardware and software.",
  ];

  const visionPoints=`To Achieve excellent standards of quality-education by using the latest tools, nurturing collaborative culture and disseminating customer oriented innovations to relevant areas of academia and industry towards serving the greater cause of society.`

  const infrastructure = `
  The department owns 180 latest computer systems with high configuration and upgraded software and maintains an exclusive lab with 1 to 1 ratio for each subject.
The Department has established its own library with different Titles and 100+ text books, CAL Package CDs and few journals related to CSE, catering to the needs of undergraduate courses.
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
     hodVisible="NO"
     //If you want to show the hod data just remove the above hodVisible property.
      sectionName="Computer Science and Engineering(AI & ML)"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://chennai.vit.ac.in/wp-content/uploads/2020/01/scse-btech-cse-2048x947.jpg"
      hodImage="https://static.wixstatic.com/media/92bf96_5d6b4f6e43bc4e33be6c481a7c1de2f5~mv2.jpeg/v1/crop/x_0,y_0,w_892,h_997/fill/w_289,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-14%20at%202_37_58%20AM.jpeg"
      visionContent={visionPoints}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName=" (Dr).Papa Rao Challagundla"
      hodDesignation=" B.Tech,M.Tech,Ph.D."
      infrastructureImages={infrastructureData}
    />
  );
};

export default CSEAIML;
