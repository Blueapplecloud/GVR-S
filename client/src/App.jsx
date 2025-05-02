import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
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
import CampusGalleryGrid from "./pages/CampusLife/Campus/campus";
import CampusCulturals from "./pages/CampusLife/Gallery/Culturals";
import CampusLibrary from "./pages/CampusLife/Gallery/Library";
import SportsGallery from "./pages/CampusLife/Gallery/Sports";
import CanteenGallery from "./pages/CampusLife/Gallery/Canteen";
import TransportGallery from "./pages/CampusLife/Gallery/Transport";
import EventsGallery from "./pages/CampusLife/Gallery/Events";
import LabsGallery from "./pages/CampusLife/Gallery/Labs";
import OrganisingChart from "./pages/Administration/OrganisingChart/OrganisingChart";


function App() {

  return (
    <>
      <Router>
      <div>
        <NavbarComponent />

        <main >
          <Routes>
            {/* Default route */}
            {/* <Route path="/" element={<CustomNavbar />} /> */}
            {/* About page Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<AboutGVRS/>}/>
            <Route path="/about/vision&mission" element={<VisionMission/>}/>
            <Route path="/about/message" element={<PrincipalMessage/>}/>
            {/* Management page Routes */}
            <Route path="/management/founder" element={<Founder />} />
            {/* Add more routes as needed */}

            <Route path="/departments/cse" element={<CSE/>}/>
            <Route path="/departments/eee" element={<EEE/>}/>
            <Route path="/departments/cse-aiml" element={<CSEAIML/>}/>
            <Route path="/departments/cse-aids" element={<CSEAIDS/>}/>
            <Route path="/departments/ece" element={<ECE/>}/>
            <Route path="/departments/civil" element={<Civil/>}/>
            <Route path="/departments/mech" element={<Mechanical/>}/>
            <Route path="/departments/sh" element={<SH/>}/>


            <Route path="/campus/campus" element={<CampusGalleryGrid/>}/>
            <Route path="/gallery/culturals" element={<CampusCulturals/>}/>
            <Route path="/gallery/library" element={<CampusLibrary/>}/>
            <Route path="/gallery/sports" element={<SportsGallery/>}/>
            <Route path="/gallery/canteen" element={<CanteenGallery/>}/>
            <Route path="/gallery/transport" element={<TransportGallery/>}/>
            <Route path="/gallery/events" element={<EventsGallery/>}/>
            <Route path="/gallery/labs" element={<LabsGallery/>}/>


            <Route path="/administration/organising chart" element={<OrganisingChart/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
