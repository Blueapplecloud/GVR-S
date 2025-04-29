import React, { useState, useCallback } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Header from './Header';
import './Navbar.css';  // Import the CSS file

const CustomNavbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [showAcademics, setShowAcademics] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showCampus, setShowCampus] = useState(false);
  const [showRnd, setShowRnd] = useState(false);

  const handleMouseEnter = useCallback(setter => () => setter(true), []);
  const handleMouseLeave = useCallback(setter => () => setter(false), []);
  const dropdownItemClass = "bg-white text-black hover:!text-[#B04040] hover:!bg-[#F5F5F5]";




  return (
   <>
   <Header/>
   <Navbar sticky="top" expand="lg" className="bg-[#B04040]" variant="dark">
      <Navbar.Brand as={Link} to="/" className="  text-[#ffffff] flex items-center">
        <FaHome className="mr-2" />
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="navbar-nav" 
        className="bg-[#B04040]" 
      />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto space-x-4 text-black mr-60">
        <NavDropdown
  title={<span className="text-white hover:text-white">{'About GVR&S'}</span>}
  id="about-dropdown"
  show={showAbout}
  onMouseEnter={handleMouseEnter(setShowAbout)}
  onMouseLeave={handleMouseLeave(setShowAbout)}
>

  <NavDropdown.Item as={Link} to="/about/history" className={dropdownItemClass}>
    GVR&S History
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/about/vision&mission" className={dropdownItemClass}>
    Vision & Mission
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/about/message" className={dropdownItemClass}>
    Principal's Message
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/about/map" className={dropdownItemClass}>
    Campus Map
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/about/organization" className={dropdownItemClass}>
    Organization Map
  </NavDropdown.Item>
</NavDropdown>


<NavDropdown
  title={<span className="text-white hover:text-white">{'Management'}</span>}
  id="management-dropdown"
  // className="custom-dropdown"
  show={showManagement}
  onMouseEnter={handleMouseEnter(setShowManagement)}
  onMouseLeave={handleMouseLeave(setShowManagement)}
>
  <NavDropdown.Item as={Link} to="/management/chairman" className={dropdownItemClass}>
    Founder & President
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/management/chairman" className={dropdownItemClass}>
    Chairman
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/management/principal" className={dropdownItemClass}>
    Director
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/management/chairman" className={dropdownItemClass}>
    Dean
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/management/chairman" className={dropdownItemClass}>
    Executive Body
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/management/chairman" className={dropdownItemClass}>
    Governing Body
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown
  title={<span className="text-white hover:text-white">{'Academics'}</span>}
  id="academics-dropdown"
  // className="custom-dropdown"
  show={showAcademics}
  onMouseEnter={handleMouseEnter(setShowAcademics)}
  onMouseLeave={handleMouseLeave(setShowAcademics)}
>
  <NavDropdown.Item as={Link} to="/academics/calendar" className={dropdownItemClass}>
    Programs Offered
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/academics/calendar" className={dropdownItemClass}>
    Academic Calendar
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/academics/syllabus" className={dropdownItemClass}>
    Academic Regulation
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/academics/calendar" className={dropdownItemClass}>
    Fee Structure
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/academics/calendar" className={dropdownItemClass}>
    Examination Section
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/academics/calendar" className={dropdownItemClass}>
    Academic Scholarship
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown
  title={<span className="text-white hover:text-white">{'Departments'}</span>}
  id="departments-dropdown"
  // className="custom-dropdown"
  show={showDepartments}
  onMouseEnter={handleMouseEnter(setShowDepartments)}
  onMouseLeave={handleMouseLeave(setShowDepartments)}
>
  <NavDropdown.Item as={Link} to="/departments/cse" className={dropdownItemClass}>
    Computer Science & Engineering
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Computer Science & Engineering(AI & ML)
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Computer Science & Engineering(AI & DS)
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Electronics and Communication Engineering(EEE)
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Electrical and Electronics Engineering(ECE)
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Civil Engineering
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Mechanical Engineering
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    BS & H
  </NavDropdown.Item>
  <hr />
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Finance
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    Human Resources
  </NavDropdown.Item>
  <hr />
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    EEE(Power System)
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
    CAD / CAM (Mechanical)
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown
  title={<span className="text-white hover:text-white">{'Campus Life'}</span>}
  id="campus-dropdown"
  // className="custom-dropdown"
  show={showCampus}
  onMouseEnter={handleMouseEnter(setShowCampus)}
  onMouseLeave={handleMouseLeave(setShowCampus)}
>
  <NavDropdown.Item as={Link} to="/campus/clubs" className={dropdownItemClass}>
    Clubs
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/campus/facilities" className={dropdownItemClass}>
    Facilities
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/campus/facilities" className={dropdownItemClass}>
    Student Activities
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown
  title={<span className="text-white hover:text-white">{'R & D Cell'}</span>}
  id="rnd-dropdown"
  // className="custom-dropdown"
  show={showRnd}
  onMouseEnter={handleMouseEnter(setShowRnd)}
  onMouseLeave={handleMouseLeave(setShowRnd)}
>
  <NavDropdown.Item as={Link} to="/rnd/projects" className={dropdownItemClass}>
    Projects
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/rnd/publications" className={dropdownItemClass}>
    Publications
  </NavDropdown.Item>
</NavDropdown>

<Nav.Link as={Link} to="/results" className="text-white">Results</Nav.Link>
<Nav.Link as={Link} to="/placements" className="text-white">Placements</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
   </>
  );
};

export default CustomNavbar;
