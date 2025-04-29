import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import About from "./pages/About/About";
import Management from "./pages/Management/Management";
import CustomNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutGVRS from "./pages/About/About GVR&S/About GVR&S";
import VisionMission from "./pages/About/Vision&Mission/Vision&Mission";


function App() {

  return (
    <>
      <Router>
      <div>
        <CustomNavbar />

        <main >
          <Routes>
            {/* Default route */}
            {/* <Route path="/" element={<CustomNavbar />} /> */}
            {/* About page Routes */}
            <Route path="/about" element={<About />} />
            {/* Management page Routes */}
            <Route path="/management" element={<Management />} />
            {/* Add more routes as needed */}
            <Route path="/about/history" element={<AboutGVRS/>}/>
            <Route path="/about/vision&mission" element={<VisionMission/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
