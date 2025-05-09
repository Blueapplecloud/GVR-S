import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const ECE = () => {
  const aboutText = `
The department of ECE in G.V.R&S College of Engineering and Technology best known for its talented and dedicated professionals renowned for their excellence in various specializations in the field of Electronics & Communication which was established in 2007. The department provides with state of the art technological tools incorporated in all the existing laboratories. For the last ten years the students of the ECE, who walked out of the portals of the institute successfully, holding their degrees, were immediately inducted into the MNCs of high reputation in India & abroad.
The augmentation of the intake of the department from 60 in the year 2007, later the intake was increased to 120 in the year 2009.
The introduction of M.Tech program in DECS in the academic year 2012 with intake of 18 seats, later VLSI and Embedded System Design introduced in 2014 with an intake of 18.
`;

  const hodMessage = `
Associate Profesor has around 10 Years of work Experience in both Telugu States .He have Academic Qualifications B.Tech. (ECE) ,MTech(DECS)from JNTUK,JNTUK, Universities
Respectively.He Published papers in Various reputed International Journals . Member in VLSI Society of India (VSI) , International Association of Engineers , Good Human being and Played roles until now ,like mentor,Lab i/c,examination incharge now as Head .
• Conducted Two day workshop on “Telecommunications and Fiber Optics ” from 6th Feb to 7th Feb, 2017.
• Conducted three day workshop on “Embedded Systems & Robotic Design” as a Course Coordinator on August 17th & 18th, 2018.
• Conducted three day workshop on “Web Designing and Career Guidance” as Coordinator on March 11th & 12th, 2018.
• Conducted two day workshop on “Micro Processor & Micro controller” as a Course Coordinator on Nov 14th & 15th, 2019.
• Conducted two day workshop on “Workshop on IOT and Embedded Applications” as a Course Coordinator on Jan 7th & 8th, 2019.
`;

  const missionPoints = [
    "Facilitating the students with innovative pedagogy and quality infrastructure to acquire knowledge and skill in electronics and communication Engineering.",
    "Training students in doing projects, meeting latest technologies.",
    "Nurturing students for understanding and serving society with a concern for environment.",
  ];
  const infrastructure = `
  The Department has established its own library with 50 Titles and 200 text and reference books and few journals related to ECE, catering to the needs of undergraduate courses. Our laboratories and teaching methods of mixing theory sessions with laboratory practice were appreciated by The All India Council for Technical Education (AICTE) inspection team. The department is having all the following fully equipped laboratories.
`;

  const infrastructureData = [
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/ece4-1-scaled-600x450.jpg",
      text: `Pulse Digital & Circuits Lab`,
    },
    {
      image:
        "https://gvrs.ac.in/wp-content/uploads/2020/12/ece5-1-scaled-600x450.jpg",
      text: `Analog & Digital Communications Lab`,
    },
    {
        image:
          "https://gvrs.ac.in/wp-content/uploads/2020/12/ece6-1-scaled-600x450.jpg",
        text: `Communication Lab`,
      },
    // Add more images and text as needed
  ];

  return (
    <DepartmentsComponent
      sectionName="Electronics and Communication Engineering"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://th.bing.com/th/id/OIP.0jB1ar8YvZIs5omyLPyHrgHaEJ?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      hodImage="/Images/management/ECE HOD.jpg"
      visionContent={`To achieve academic excellence in Electronics and Communication Engineering education and to train students in contemporary core technologies by developing them into skillful engineers inspired with human values and social needs.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName="Mrs. J. SOWJANYA"
      hodDesignation="B.Tech,M.Tech,(Ph.D)"
      infrastructureImages={infrastructureData}
    />
  );
};

export default ECE;
