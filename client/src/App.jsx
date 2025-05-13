import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import NavbarComponent from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutGVRS from "./pages/About/About GVR&S/About GVR&S";
import VisionMission from "./pages/About/Vision&Mission/Vision&Mission";
import PrincipalMessage from "./pages/About/Principal Message/Principal's Message";
import Founder from "./pages/Management/Founder/Founder";
import CSE from "./pages/Departments/UG/CSE/CSE";
import EEE from "./pages/Departments/UG/EEE/EEE";
import ECE from "./pages/Departments/UG/ECE/ECE";
import CSEAIML from "./pages/Departments/UG/CSE(AI&ML)/CSE(AI&ML)";
import CSEAIDS from "./pages/Departments/UG/CSE(AI&DS)/CSE(AI&DS)";
import Civil from "./pages/Departments/UG/Civil/Civil";
import Mechanical from "./pages/Departments/UG/Mechanical/Mechanical";
import SH from "./pages/Departments/UG/S&H/S&H";
import Home from "./pages/Home";
import AcademicScholarShip from "./pages/Academics/AcademicScholarship";
import FeeStructure from "./pages/Academics/FeeStructure";
import Chairman from "./pages/Management/Chairman/Chairman";
import Director from "./pages/Management/Director/Director";
import Dean from "./pages/Management/Dean/Dean";
import ExecutiveBody from "./pages/Management/ExecutiveBody/ExecutiveBody";
import GoverningBody from "./pages/Management/GoverningBody/GoverningBody";
import AcademicRegulations from "./pages/Academics/AcademicRegulatio";
import ProgramsOffered from "./pages/Academics/ProgramsOffered";
import CampusGalleryGrid from "./pages/CampusLife/Campus/campus";
import CampusCulturals from "./pages/CampusLife/Gallery/Culturals";
import CampusLibrary from "./pages/CampusLife/Gallery/Library";
import SportsGallery from "./pages/CampusLife/Gallery/Sports";
import CanteenGallery from "./pages/CampusLife/Gallery/Canteen";
import TransportGallery from "./pages/CampusLife/Gallery/Transport";
import EventsGallery from "./pages/CampusLife/Gallery/Events";
import LabsGallery from "./pages/CampusLife/Gallery/Labs";
import OrganisingChart from "./pages/Administration/OrganisingChart/OrganisingChart";
import PlacementDashboard from "./pages/Placement/TpoMessage";

import NAAC from "./pages/NAAC/NAAC/NAAC";
import DVV from "./pages/NAAC/DVV/DVV";
import LoginLayout from "./components/login/LoginLayout";
import LoginPage from "./pages/Login/Login";
import TeachingStaff from "./pages/Academics/TeachingStaff";
import NonTeachingStaffTable from "./pages/Academics/NonTeachingStaff";
import Elgibility from "./pages/Academics/Elgibility";
import Placements from "./pages/Admin/Placements/Placements";
import GVRSDegreeCollegeforWomen from "./pages/GVRSGroups/GVRS Degree Womens/GVRS Degree Womens";
import GVRSDegreeCollegeforProfessionalStudents from "./pages/GVRSGroups/GVRS Degree Professional/GVRS Degree Professional";
import GVRSJuniorCollege from "./pages/GVRSGroups/GVRS Junior College/GVRS Junior College";
import MBA from "./pages/Departments/PG/MBA/MBA/MBA";
import RTIDeclaration from "./pages/Placement/Rti";
import ContactUS from "./pages/About/Contact Detalis/ContactUS";
import IQAC from "./pages/IQAC/Iqac";
import GrievanceRedressalCommittee from "./pages/Committees/Grievance redressal Committee";
import Scst from "./pages/Committees/Committee For SC/Committee For SC/Committee for sc/Committee For SC/ST";
function App() {
  return (
    <>
      <Router>
        <div className="">
          <NavbarComponent />

          <main className="">
            <Routes>
              {/* Default route */}
              {/* <Route path="/" element={<CustomNavbar />} /> */}
              {/* Home page Routes */}
              <Route path="/" element={<Home />} />

              {/* loginpage */}
              <Route path="/login" element={<LoginLayout />}>
                <Route index element={<LoginPage />} />
              </Route>
              {/* About page Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/about/history" element={<AboutGVRS />} />
              <Route path="/about/vision&mission" element={<VisionMission />} />
              <Route path="/about/message" element={<PrincipalMessage />} />
              <Route path="/about/contactus" element={<ContactUS />} />
              {/* Management page Routes */}
              <Route path="/management/founder" element={<Founder />} />
              <Route path="/management/chairman" element={<Chairman />} />
              <Route path="/management/director" element={<Director />} />
              <Route path="/management/dean" element={<Dean />} />
              <Route
                path="/management/executive-body"
                element={<ExecutiveBody />}
              />
              <Route
                path="/management/governing-body"
                element={<GoverningBody />}
              />
              <Route path="/management/chairman" element={<Chairman />} />
              <Route path="/management/director" element={<Director />} />
              <Route path="/management/dean" element={<Dean />} />
              <Route
                path="/management/executivebody"
                element={<ExecutiveBody />}
              />
              <Route
                path="/management/governingbody"
                element={<GoverningBody />}
              />
              <Route
                path="/academics/academic-regulations"
                element={<AcademicRegulations />}
              />
              <Route
                path="/management/teaching-staff"
                element={<TeachingStaff />}
              />
              <Route
                path="/management/non-teaching-staff"
                element={<NonTeachingStaffTable />}
              />
              {/* Add more routes as needed */}
              {/* Academics page Routes */}
              <Route
                path="/academics/academic-scholarship"
                element={<AcademicScholarShip />}
              />
              <Route
                path="/academics/fee-structure"
                element={<FeeStructure />}
              />
              <Route
                path="/academics/programs-offered"
                element={<ProgramsOffered />}
              />

              <Route path="/academics/elgibility" element={<Elgibility />} />

              {/* Departments page Routes */}
              <Route path="/departments/cse" element={<CSE />} />
              <Route path="/departments/eee" element={<EEE />} />
              <Route path="/departments/cse-aiml" element={<CSEAIML />} />
              <Route path="/departments/cse-aids" element={<CSEAIDS />} />
              <Route path="/departments/ece" element={<ECE />} />
              <Route path="/departments/civil" element={<Civil />} />
              <Route path="/departments/mech" element={<Mechanical />} />
              <Route path="/departments/sh" element={<SH />} />
              <Route path="/departments/mba" element={<MBA/>}/>

              <Route path="/campus/campus" element={<CampusGalleryGrid />} />
              <Route path="/gallery/culturals" element={<CampusCulturals />} />
              <Route path="/gallery/library" element={<CampusLibrary />} />
              <Route path="/gallery/sports" element={<SportsGallery />} />
              <Route path="/gallery/canteen" element={<CanteenGallery />} />
              <Route path="/gallery/transport" element={<TransportGallery />} />
              <Route path="/gallery/events" element={<EventsGallery />} />
              <Route path="/gallery/labs" element={<LabsGallery />} />


               {/*Committee page Routes */}

                <Route path="/committees/grievance" element={<GrievanceRedressalCommittee />} />
                <Route path="/committees/scst" element={<Scst />} />




              <Route
                path="/administration/organising-chart"
                element={<OrganisingChart />}
              />

              <Route path="/naac/naac" element={<NAAC />} />
              <Route path="/naac/dvv" element={<DVV />} />
              {/* Placement page Routes */}
              <Route path="/placements" element={<PlacementDashboard />} />

              {/* All Admin Routes Here */}
              <Route path="/admin/placements" element={<Placements />} />
              {/* Add more routes as needed */}
              
              <Route path="/gvr&s-group/gvr&s-degree-college-for-women" element={<GVRSDegreeCollegeforWomen/>}/>
              <Route path="/gvr&s-group/gvr&s-degree-college-for-professional-studies" element={<GVRSDegreeCollegeforProfessionalStudents/>}/>
              <Route path="/gvr&s-group/gvr&s-co-operavtive-junior-college" element={<GVRSJuniorCollege/>}/>
              <Route path="/placements/placements" element={<PlacementDashboard />} />
              <Route path="/placements/rti" element={<RTIDeclaration />} />

              {/* IQAC page Routes */}
              <Route path="/iqac" element={<IQAC />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
