import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const CSEAIDS= () => {
  const aboutText = `
CSE Department came into inception from 2007 onwards with an intake of 60 seats in B.Tech, and enhanced to 120 seats in the year 2009. In view of the accentuated interest towards CSE and its immensity of growth the Department of Computer Science and Engineering has developed well appointed laboratories where the main focus is on the development of logical reasoning that is stressed upon, in all practical applications. The department boasts of promoting a unique mode of teaching-learning setting, one that makes an effective utilization of the advanced aids of teaching. The Department imparts world class training and provides state of the art of computing facilities to the students. CSE Department is offering M.Tech (CSE) program from 2012 onwards with an intake of 18 and enhanced to 24 seats in the year 2013.  `;

  const hodMessage = `
   Papa Rao Challagundla Associate Professor has around 13 Years of work Experience in both Telugu States .He have Academic Qualifications B.Tech.,MTech and thesis submission Ph.D.  all from  JNTUH University only. also Certified Cloud Computing and Computer Networs and Internet Protocol from NPTEL Swayam. Published papers in Various reputed International Journals . Member in VSI , International Association of Engineers , Good Human being and Played roles until now ,like mentor,Lab i/c,PG coordinator now as Head.
  `;

  const missionPoints = [
    "To impart quality academic to prepare students to be continuous learners in a connected world and impart professional skills and ethical responsibilities.",
    "To groom our young students with analytical and technical competency for productive Career in industry, academia and entrepreneurs.",
    "Create nurturing environment through competitive events industry interactions, global collaborations and hands on experience on latest tools and technologies.",
  ];
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
      sectionName="Computer Science and Engineering(AI & DS)"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="/Images/ai.jpg"
      hodImage="https://static.wixstatic.com/media/92bf96_5d6b4f6e43bc4e33be6c481a7c1de2f5~mv2.jpeg/v1/crop/x_0,y_0,w_892,h_997/fill/w_289,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-14%20at%202_37_58%20AM.jpeg"
      visionContent={`To create an eminent academic platform the graduates by providing unique learning, research and empower to be technologically in field of computer science and engineering.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName=" (Dr).Papa Rao Challagundla"
      hodDesignation=" B.Tech,M.Tech,Ph.D."
      infrastructureImages={infrastructureData}
    />
  );
};

export default CSEAIDS;
