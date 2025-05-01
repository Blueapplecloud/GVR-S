import React from "react";
import DepartmentsComponent from "../../../../Reusable Components/Departments"; // Adjust the path based on your folder structure

const EEE = () => {
  const aboutText = `
The field of Electrical & Electronics Engineering (EEE) is the place to be in for those who love electrical systems ranging from heavy power generators to the smallest of micro-chips.The Mission of the department is to train the stakeholders in contemporary knowledge and innovative skills, both functional and integrative in the discipline of Electrical and Electronics Engineering focusing on strong foundation in basic concepts, courses in tune with modern trends, leadership, networking and team building, entrepreneurship, ethics and governance.  `;

  const hodMessage = `
LINGAIAH RAJ TUMMALA Associate Professor have around 14 Years of work Experience in both Telugu States ,Academic Qualifications B.Tech. (EEE) ,MTech(PE&ED)  from JNTUH,JNTUK respectively, Published papers in Various reputed National, International Journals and also member in  International Association of Engineers , Good Human being and Played roles until now ,like mentor,Lab i/c,Head,PG coordinator and now Examination Incharge.  `;

  const missionPoints = [
    "Adopt good teaching and learning methods.",
    "Ensure competency in the emerging technologies.",
    "To be accountable through self-evaluation and continuous improvements.",
  ];
  const infrastructure = `
  Department has well developed laboratories viz, AC/DC machines lab, Power electronics lab, Control systems lab, Multisim/networks lab, Sensors, Measurements and Instrumentation lab, Micro controllers lab, Power Systems Lab, DSP lab, Power Electronics and Drives Lab, PLC lab and Labview/Matlab lab with all required machines, equipment with Lab view, Multisim, Matlab, Pspice, Eagle, Tasm, Proteous, Keil, Arduino, Powerworld, Code Composer Studio, Xilinx and many more softwares.
The department maintains updated printed laboratory manuals in all the labs and copies are supplied to all the students.
`;

const infrastructureData = [
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/eee7-1-scaled-600x450.jpg',
      text: ` Electrical Machines Lab`,
    },
    {
      image: 'https://gvrs.ac.in/wp-content/uploads/2020/12/eee8-2-scaled-600x450.jpg',
      text: `Power Electronics Lab`,
    },
    // Add more images and text as needed
  ];

  return (
    <DepartmentsComponent
      sectionName="Electrical and Electronics Engineering"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://chennai.vit.ac.in/wp-content/uploads/2021/09/What-is-Electronics-Engineering-Difference-Between-Electrical-and-Electronics-Engineering.jpg"
      hodImage="https://static.wixstatic.com/media/92bf96_6ec537ac382e4f79968e2f46870947de~mv2.jpg/v1/fill/w_260,h_321,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/92bf96_6ec537ac382e4f79968e2f46870947de~mv2.jpg"
      visionContent={`The Department of Electrical and Electronics Engineering strives to be a Centre of Excellence in Electrical Engineering in producing competent Engineers.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName=" Mr.LINGAIAH RAJ TUMMALA"
      hodDesignation=" B.Tech,M.Tech"
      infrastructureImages={infrastructureData}
    />
  );
};

export default EEE;
