import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import CSE from "./pages/Departments/CSE/CSE";


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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
