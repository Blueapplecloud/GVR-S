import GVRSGroups from '../../../Reusable Components/GRVSGroups';


// Feature lists
const left = [
  "E-Class Rooms",
  "Career Oriented Coaching with Focus On Placements",
  "100% Placements Assurance",
  "Highly Skilled Qualified Faculty",
  "Digital Library",
  "Well Equipped Laboratories"
];

const right = [
  "Separated Hostels For Boys & Girls With All Security Measures",
  "Medical Secured CCTV enabled Campus",
  "Hygiene Mess",
  "Canteen",
  "Well Prepared Playground"
];

// Courses list from image
const courses = [
  "MPC : INTER + EAMCET + JEE Mains",
  "MEC/CEC : INTER + CPT",
];

export default function GVRSJuniorCollege() {
  return (
    <GVRSGroups
      title="GVR&S Co-Operative Junior College"
      image={"https://gvrs.ac.in/wp-content/uploads/2021/01/GVRS-College-Photo.jpg"}
      leftFeatures={left}
      rightFeatures={right}
      courses={courses}
    />
  );
}
