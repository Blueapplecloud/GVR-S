import React from "react";
import DepartmentsComponent from "../../../../../Reusable Components/Departments";

const MBA = () => {
  const aboutText = `
The Department of Business Administration was established in the year 2009 with an intake 60 seats and enhanced to 120 in the year 2014.
The Master of Business Administration (MBA) program is designed to meet the challenge of full-filling the needs of the society under resource constraints by providing new dimensions in the body of knowledge needed for managerial development. Environmental, social, ecological, and economic forces are affecting every sector of business enterprise and every area of business, governmental and industrial administration.
The MBA program will prepare students for assuming responsibility of management in their career path in business and other organizations. The program also prepares students having career interest in teaching or research and also for higher studies.
The core strength of the MBA Program is the extensive coverage in the field of specialization along with exposure to a wide array of quantitative and qualitative analytical tools. These Programs are aimed at broadening the outlook and strengthening the skills of participating professionals to prepare them for a dynamic and constantly changing work environment.
Teaching methodology at GVR&S-CET, in the Department of Management Studies, include lectures, seminars, business games, simulation exercise, mini-projects and field visits incorporating formal and informal group dynamics. The regular features of the same also include a curriculum, which boasts exhaustive case studies and challenging role-plays, thereby enhancing in depth knowledge in a specific field with excellent communication skills.  `;

  const hodMessage = `MBA in today’s scenario is considered as a basic qualification for management positions be it in Finance, Marketing, and HR department of an organization.
In present globally acquired business environment, dynamic managers having vision, resourcefulness and proficiency to face the problems and challenges are in demand. Keeping this in view, Department of Management Studies, GVR&S trains the students with quality education and skill sets required in business world. 
The students of the department have been actively participating in the Consultancy Development Cell as well as Entrepreneurship Development Centre in GVR&S  institution.`;

  const missionPoints = [
    "Impart advanced management concepts and skills by adopting application-based pedagogy.",
    "Evolve and establish an environment of academic excellence, research, and innovation beneficial to students, faculty, and stakeholders.",
    "To develop scholarly and practice-oriented intellectual capital to meet the needs of the emerging social economic environment.",
  ];
  const infrastructure = `
  Clean & green surroundings with disciplined & ragging-free atmosphere

Well ventilated and illuminated class rooms with ergonomic seating arrangement

State-of-the-art boards, projectors and microphone facilities

Qualitatively and quantitatively adequate and strategically located display and notice boards

Computer Lab. With latest technological fixtures and well-trained and qualified technicians

Digital Library with national and international reference books, journals, magazines, bulletins & newspapers

Wi-Fi enabled Campus

Centers for meditation, entrepreneur development and student activity.

Encouragement for sports training, both indoor and outdoor.

Remedial Class Rooms for improvement of student caliber.

Safe water and Sanitation Facilities.

Good Canteen and hostel facilities.

Good College Transport Facilities covering the whole City.

Spacious and well furnished auditoria.
`;

const infrastructureData = []

  return (
    <DepartmentsComponent
      sectionName="Master of Business Administration"
      aboutContent={aboutText}
      hodContent={hodMessage}
      backgroundImage="https://gbsn.org/wp-content/uploads/2020/07/Indian-MBA-students-stock-2048x1090.jpg"
      hodImage="https://static.wixstatic.com/media/92bf96_ce213c147d574828a2782cbf48d2100f~mv2.jpeg/v1/fill/w_310,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-14%20at%203_06_20%20AM.jpeg"
      visionContent={`To make the management department a leading and continuously evolving department which equipped students with a transformative learning experience so that they can be global leaders and contributes to the growth of the business, society, and nation.`}
      missionContent={missionPoints}
      infrastructureContent={infrastructure}
      hodName=" TAIDALA VASANTHA RAO"
      hodDesignation="MBA,LLB,(Ph.D)"
      infrastructureImages={infrastructureData}
    />
  );
};

export default MBA;
