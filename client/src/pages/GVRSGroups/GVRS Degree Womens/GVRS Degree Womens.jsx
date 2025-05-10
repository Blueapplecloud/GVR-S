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
  "B.Sc.(Mathematics, Physics, Chemistry)",
  "B.Sc.(Mathematics, Electronics, Computer Science)",
  "B.Sc.(Mathematics, Physics, Computer Science)",
  "B.Sc.(Mathematics, Statistics, Computer Science)",
  "B.Com.(Computers)",
  "B.Com.(General)"
];

export default function GVRSDegreeCollegeforWomen() {
  return (
    <GVRSGroups
      title="GVR&S Degree College For Women"
      image={"https://gvrs.ac.in/wp-content/uploads/2021/01/GVRS-College-Photo.jpg"}
      leftFeatures={left}
      rightFeatures={right}
      courses={courses}
    />
  );
}
