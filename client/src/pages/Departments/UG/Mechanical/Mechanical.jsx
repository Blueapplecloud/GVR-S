import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const Mechanical = () => {
  const aboutText = `
The Department of Mechanical Engineering was established in the year 2012 with an intake of 60 students and enhanced to 120 in the year 2014.
This department is another promising twig which plays the most significant role in its wider sense. It believes in developing studiousness among the students by giving a clear understanding of core concepts including mechanics, kinematics, thermodynamics, materials science, structural analysis, and electricity.  `;

  const hodMessage = `
Mr. G.Anil Kumar is Associate Professor and Head of the Mechanical Engineering Department. He obtained  in Mechanical Engineering from JNTUH . He received M.Tech in (CAD/CAM) From the Dept. Of Mechanical Engineering in Narasaraopet engineering college Narasaraopet,  He has a rich teaching experience of 9 years and worked in various prestigious Engineering Colleges in Andhra Pradesh. He has published many National/International Journals.
His research interests include Design and  Manufacturing  . He organized several workshops. He delivered several guest lectures throughout the state of Andhra Pradesh. He has extensive experience in the feild of Mechanical Engineering Design. He supervised and mentored undergraduate and post graduate students. He is adept in communication and problem solving.
`;

  const missionPoints = [
    "To transmit quality education to the students and enhancing their skills to make them competitive mechanical engineers.",
    "To enlighten students with ethical responsibilities and to impart leadership and entrepreneurship qualities for their Career Design .",
    "To develop bonding with research organizations and educational institutions in for bringing quality in teaching and research practices.",
  ];
  const infrastructure = `
  The department is well equipped laboratories and operates its own library and linked through a local network. Internet services are available to all students and faculties.
The department maintains updated printed laboratory manuals in all the lab�s and copies are supplied to all the students.
`;

  const infrastructureData = [
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/PRODUCTION-TECHNOLOGY-MACHINE-TOOLS-LAB-600x350.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/METALLURGY-MECHANICS-OF-SOLIDS-LAB-600x341.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/METROLOGY-INSTRUMENTATION-LAB-600x356.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/THERMAL-ENGINEERING-LAB-600x421.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/FLUID-MECHANICS-HYDRALIC-MACHINARY-LAB-600x364.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/HEAT-TRANSFER-LAB-600x351.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/ENGINEERING-WORK-SHOP-LAB-600x356.png",
      text: ``,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/MECH-1-scaled-600x450.jpg",
      text: `Computer Aided Eng Drawing Practice Lab.`,
    },
    {
      image: "https://gvrs.ac.in/wp-content/uploads/2020/12/MECH-3-600x450.jpg",
      text: `Fluid Machines & Hydraulic Machinery Lab`,
    },
    // Add more images and text as needed
  ];

  return (
    <DepartmentsComponent
      sectionName="Mechanical Engineering"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://nie.ac.in/wp-content/uploads/2019/02/NIE-Dipartment.-Mechanical-banner-1.jpg"
      hodImage="https://static.wixstatic.com/media/92bf96_5bfa3a86125e447daf3db4834153e7a5~mv2.jpg/v1/fill/w_283,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-14%20at%2010_37_edited.jpg"
      visionContent={`To be top in the field of computer science and engineering, building competence through student centric learning for self-employment, research, industry and society needs.To become a lead in producing quality mechanical engineers, which will prosper the society to face the current technical challenges.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName="Mr.G.ANIL KUMAR"
      hodDesignation=" B.Tech,M.Tech"
      infrastructureImages={infrastructureData}
    />
  );
};

export default Mechanical;
