import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const Civil = () => {
  const aboutText = `
This being the youngest department was started in the year 2014 with an intake of 60 seats.Though it was started later than the other departments, the department has shown good results in both academics and industry orientation. Besides focusing on completing the course content, it further directs the students to learn and understand design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals and buildings.  `;

  const hodMessage = `
  `;

  const missionPoints = [
    "Provide learning environment, outcome based education towards academic excellence.",
    "Organize trainings to promote research, knowledge development.",
    "Promote industry interactions towards skills, ethics and values. Latest technologies.",
  ];
  const infrastructure = `
  The Department has established its own library with different Titles and 100 text books, CAL Package CDs and few journals related to CIVIL, catering to the needs of undergraduate courses. Each Lab is equipped with 60 Pentium-IV 2.88 GHz Dual Core systems and other accessories.
The department maintains updated printed laboratory manuals in all the lab�s and copies are supplied to all the students.
`;

const infrastructureData = [
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/te-1-600x450.jpg',
      text: ``,
    },
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/111-600x390.jpg',
      text: ``,
    },{
        image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/2-1-scaled-600x450.jpg',
        text: ``,
      },
      {
        image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/3-1-scaled-600x450.jpg',
        text: ``,
      },
    // Add more images and text as needed
  ];

  return (
    <DepartmentsComponent
      sectionName="Civil Engineering"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://mitwpu.edu.in/uploads/department_image/6378671ccd18f1668835100.jpg"
      hodImage="https://gvrs.ac.in/wp-content/uploads/2020/12/WhatsApp-Image-2021-01-12-at-10.36.06-PM-600x400.jpeg"
      visionContent={`To be a quality education provider of civil engineering to empower human resources.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName=""
      hodDesignation=""
      infrastructureImages={infrastructureData}
    />
  );
};

export default Civil;
