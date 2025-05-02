import React from "react";
//test

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
import NAAC from "./pages/NAAC/NAAC/NAAC";
import DVV from "./pages/NAAC/DVV/DVV";
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
              {/* About page Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/about/history" element={<AboutGVRS />} />
              <Route path="/about/vision&mission" element={<VisionMission />} />
              <Route path="/about/message" element={<PrincipalMessage />} />
              {/* Management page Routes */}
              <Route path="/management/founder" element={<Founder />} />
              <Route path="/management/chairman" element={<Chairman/>} />
              <Route path="/management/director" element={<Director />} />
              <Route path="/management/dean" element={<Dean />} />
              <Route path="/management/executivebody" element={<ExecutiveBody />} />
              <Route path="/management/governingbody" element={<GoverningBody />} />
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

              <Route
                path="/academics/academic-regulations"
                element={<AcademicRegulations />}
              />

              {/* Departments page Routes */}
              <Route path="/departments/cse" element={<CSE />} />
              <Route path="/departments/eee" element={<EEE />} />
              <Route path="/departments/cse-aiml" element={<CSEAIML />} />
              <Route path="/departments/cse-aids" element={<CSEAIDS />} />
              <Route path="/departments/ece" element={<ECE />} />
              <Route path="/departments/civil" element={<Civil />} />
              <Route path="/departments/mech" element={<Mechanical />} />
              <Route path="/departments/sh" element={<SH />} />


              <Route path="/naac/naac" element={<NAAC />} />
              <Route path="/naac/dvv" element={<DVV />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
