import React, { useState, useCallback } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Header from './Header';
import './Navbar.css';

const CustomNavbar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    showAbout: false,
    showManagement: false,
    showAcademics: false,
    showDepartments: false,
    showCampus: false,
    showRnd: false,
    showUG: false,
    showPG: false,
    showMBA: false,
    showMTech: false,
    showGallery: false,
    showPlacements: false,
    showStudentCorner: false,
  });

  const handleMouseEnter = useCallback((key) => () => {
    setDropdownStates(prev => ({ ...prev, [key]: true }));
  }, []);

  const handleMouseLeave = useCallback((key) => () => {
    setDropdownStates(prev => ({ ...prev, [key]: false }));
  }, []);

  const dropdownItemClass = "bg-white text-black hover:!text-[#B04040] hover:!bg-[#F5F5F5]";

  return (
    <>
      <Header />
      <Navbar sticky="top" expand="lg" className="bg-[#B04040]" variant="dark">
        <Navbar.Brand as={Link} to="/" className="text-white flex items-center ml-20">
          <FaHome className="mr-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-[#B04040]" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">

            {/* About Dropdown */}
            <NavDropdown
              title="About GVR&S"
              show={dropdownStates.showAbout}
              onMouseEnter={handleMouseEnter('showAbout')}
              onMouseLeave={handleMouseLeave('showAbout')}
            >
              <NavDropdown.Item as={Link} to="/about/history" className={dropdownItemClass}>GVR&S History</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/vision&mission" className={dropdownItemClass}>Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/message" className={dropdownItemClass}>Principal's Message</NavDropdown.Item>
            </NavDropdown>

            {/* Management Dropdown */}
            <NavDropdown
              title="Management"
              show={dropdownStates.showManagement}
              onMouseEnter={handleMouseEnter('showManagement')}
              onMouseLeave={handleMouseLeave('showManagement')}
            >
              <NavDropdown.Item as={Link} to="/management/founder" className={dropdownItemClass}>Founder & President</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management/chairman" className={dropdownItemClass}>Chairman</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management/director" className={dropdownItemClass}>Director</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management/dean" className={dropdownItemClass}>Dean</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management/executivebody" className={dropdownItemClass}>Executive Body</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/management/governingbody" className={dropdownItemClass}>Governing Body</NavDropdown.Item>
            </NavDropdown>

            {/* Academics Dropdown */}
            <NavDropdown
              title="Academics"
              show={dropdownStates.showAcademics}
              onMouseEnter={handleMouseEnter('showAcademics')}
              onMouseLeave={handleMouseLeave('showAcademics')}
            >
              <NavDropdown.Item as={Link} to="/academics/programs" className={dropdownItemClass}>Programs Offered</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/academics/fees" className={dropdownItemClass}>Fee Structure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/academics/exam" className={dropdownItemClass}>Examination Section</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/academics/scholarship" className={dropdownItemClass}>Academic Scholarship</NavDropdown.Item>
            </NavDropdown>

            {/* Departments Dropdown */}
            <NavDropdown
              title="Departments"
              show={dropdownStates.showDepartments}
              onMouseEnter={handleMouseEnter('showDepartments')}
              onMouseLeave={handleMouseLeave('showDepartments')}
            >
              <div className="flex gap-4 px-3 py-2">
                <div
                  onMouseEnter={handleMouseEnter('showUG')}
                  onMouseLeave={handleMouseLeave('showUG')}
                >
                  <NavDropdown title={<span className="text-black hover:text-[#B04040]">UG</span>} show={dropdownStates.showUG} drop="end">
                    <NavDropdown.Item as={Link} to="/departments/cse" className={dropdownItemClass}>CSE</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/cse-aiml" className={dropdownItemClass}>CSE (AI & ML)</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/cse-aids" className={dropdownItemClass}>CSE (AI & DS)</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>ECE</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/eee" className={dropdownItemClass}>EEE</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/civil" className={dropdownItemClass}>Civil</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/mech" className={dropdownItemClass}>Mechanical</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/departments/sh" className={dropdownItemClass}>S & H</NavDropdown.Item>
                  </NavDropdown>
                </div>

                <div
                  onMouseEnter={handleMouseEnter('showPG')}
                  onMouseLeave={handleMouseLeave('showPG')}
                >
                  <NavDropdown title={<span className="text-black hover:text-transparent">PG</span>} show={dropdownStates.showPG} drop="end">
                    <div
                      onMouseEnter={handleMouseEnter('showMBA')}
                      onMouseLeave={handleMouseLeave('showMBA')}
                    >
                      <NavDropdown title={<span className="text-black hover:text-[#B04040]">MBA</span>} show={dropdownStates.showMBA} drop="end">
                        <NavDropdown.Item as={Link} to="/departments/mba-finance" className={dropdownItemClass}>Finance</NavDropdown.Item>
                      </NavDropdown>
                    </div>

                    <div
                      onMouseEnter={handleMouseEnter('showMTech')}
                      onMouseLeave={handleMouseLeave('showMTech')}
                    >
                      <NavDropdown title={<span className="text-black hover:text-[#B04040]">M-Tech</span>} show={dropdownStates.showMTech} drop="end">
                        <NavDropdown.Item as={Link} to="/departments/mtech-cse" className={dropdownItemClass}>CSE</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/departments/mtech-eee" className={dropdownItemClass}>EEE</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </NavDropdown>
                </div>
              </div>
            </NavDropdown>

            {/* Campus Life */}
            <NavDropdown
              title="Campus Life"
              show={dropdownStates.showCampus}
              onMouseEnter={handleMouseEnter('showCampus')}
              onMouseLeave={handleMouseLeave('showCampus')}
            >
              <NavDropdown.Item as={Link} to="/campus/campus" className={dropdownItemClass}>Campus</NavDropdown.Item>
              <div
                onMouseEnter={handleMouseEnter('showGallery')}
                onMouseLeave={handleMouseLeave('showGallery')}
              >
                <NavDropdown title={<span className="text-black hover:text-white ml-2">{'Gallery'}</span>} show={dropdownStates.showGallery} drop="end">
                  <NavDropdown.Item as={Link} to="/gallery/culturals" className={dropdownItemClass}>Culturals</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/library" className={dropdownItemClass}>Library</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/sports" className={dropdownItemClass}>Sports</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/canteen" className={dropdownItemClass}>Canteen</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/transport" className={dropdownItemClass}>Transport</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/events" className={dropdownItemClass}>Events</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/labs" className={dropdownItemClass}>Labs</NavDropdown.Item>
                </NavDropdown>
              </div>
            </NavDropdown>

            {/* R&D */}
            <NavDropdown
              title="R&D"
              show={dropdownStates.showRnd}
              onMouseEnter={handleMouseEnter('showRnd')}
              onMouseLeave={handleMouseLeave('showRnd')}
            >
              <NavDropdown.Item as={Link} to="/rnd/activities" className={dropdownItemClass}>R&D Activities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rnd/funded-projects" className={dropdownItemClass}>Funded Projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rnd/publications" className={dropdownItemClass}>Research Publications</NavDropdown.Item>
            </NavDropdown>

            {/* Placements */}
            <NavDropdown
              title="Placements"
              show={dropdownStates.showPlacements}
              onMouseEnter={handleMouseEnter('showPlacements')}
              onMouseLeave={handleMouseLeave('showPlacements')}
            >
              <NavDropdown.Item as={Link} to="/placements/overview" className={dropdownItemClass}>Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/placements/companies" className={dropdownItemClass}>Recruiters</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/placements/statistics" className={dropdownItemClass}>Placement Stats</NavDropdown.Item>
            </NavDropdown>

            {/* Student Corner */}
            <NavDropdown
              title="Student Corner"
              show={dropdownStates.showStudentCorner}
              onMouseEnter={handleMouseEnter('showStudentCorner')}
              onMouseLeave={handleMouseLeave('showStudentCorner')}
            >
              <NavDropdown.Item as={Link} to="/students/achievements" className={dropdownItemClass}>Achievements</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/students/clubs" className={dropdownItemClass}>Clubs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/students/nss" className={dropdownItemClass}>NSS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/students/grievances" className={dropdownItemClass}>Grievance Cell</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
