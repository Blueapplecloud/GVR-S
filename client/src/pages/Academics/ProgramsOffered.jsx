import React from "react";
import ProgramsTable from "../../components/academicsComponents/ProgramsTable";

function ProgramsOffered() {
  const ugprograms = [
    {
      id: 1,
      branch: "Electrical & Electronics Engineering (EEE)",
      seats: 30,
    },
    {
      id: 2,
      branch: "Electronics & Communication Engineering (ECE)",
      seats: 60,
    },
    { id: 3, branch: "Computer Science & Engineering (CSE)", seats: 120 },
    { id: 4, branch: "Mechanical Engineering (ME)", seats: 30 },
  ];
  const diplomaprograms = [
    {
      id: 1,
      branch: "Electrical & Electronics Engineering (EEE)",
      seats: 60,
    },
    {
      id: 2,
      branch: "Electronics & Communication Engineering (ECE)",
      seats: 60,
    },
    { id: 3, branch: "Computer Science & Engineering (CSE)", seats: 180 },
    { id: 4, branch: "Mechanical Engineering (ME)", seats: 60 },
  ];
  const pgprograms = [
    {
      id: 1,
      branch: "M.Tech-CSE ( Computer Science Engineering)",
      seats: 24,
    },
    { id: 3, branch: "M.Tech-ECE ( DECS )", seats: 24 },
    { id: 4, branch: "M.Tech-ME ( CAD/CAM )", seats: 24 },
    { id: 5, branch: "Masters in Business Administration(MBA)", seats: 120 },
  ];
  return (
    <div className="px-5 py-4">
      <h1 className="shadow-lg p-5">Programs Offered</h1>
      <ProgramsTable heading="Under Graduate Programs" programs={ugprograms} />
      <ProgramsTable heading="Post Graduate Programs" programs={pgprograms} />
      <ProgramsTable heading="Diploma" programs={diplomaprograms} />
    </div>
  );
}

export default ProgramsOffered;
