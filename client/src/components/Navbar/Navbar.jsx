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
  const [showUG, setShowUG] = useState(false);
  const [showPG, setShowPG] = useState(false);
  const [showMBA, setShowMBA] = useState(false);
  const [showMTech, setShowMTech] = useState(false);
  const [showGallery, setShowGallery] = useState(false);


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
</NavDropdown>


<NavDropdown
  title={<span className="text-white hover:text-white">{'Management'}</span>}
  id="management-dropdown"
  // className="custom-dropdown"
  show={showManagement}
  onMouseEnter={handleMouseEnter(setShowManagement)}
  onMouseLeave={handleMouseLeave(setShowManagement)}
>
  <NavDropdown.Item as={Link} to="/management/founder" className={dropdownItemClass}>
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
  title={<span className="text-white hover:text-white">Departments</span>}
  id="departments-dropdown"
  show={showDepartments}
  onMouseEnter={handleMouseEnter(setShowDepartments)}
  onMouseLeave={handleMouseLeave(setShowDepartments)}
  className="custom-dropdown"
>
  {/* UG and PG side by side */}
  <div className="flex gap-4 px-3 py-2">
    {/* UG Section */}
    <div
      onMouseEnter={handleMouseEnter(setShowUG)}
      onMouseLeave={handleMouseLeave(setShowUG)}
    >
      <NavDropdown
        title={<span className="text-black hover:text-[#B04040]">UG</span>}
        id="ug-dropdown"
        show={showUG}
        className="submenu-item"
      >
        <NavDropdown.Item as={Link} to="/departments/cse" className={dropdownItemClass}>
          Computer Science & Engineering
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/cse-aiml" className={dropdownItemClass}>
        Computer Science & Engineering (AI & ML)
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/cse-aids" className={dropdownItemClass}>
        Computer Science & Engineering (AI & DS)
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/ece" className={dropdownItemClass}>
          Electronics and Communication Engineering
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/eee" className={dropdownItemClass}>
          Electrical and Electronics Engineering
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/civil" className={dropdownItemClass}>
          Civil Engineering
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/mech" className={dropdownItemClass}>
          Mechanical Engineering
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/departments/bsh" className={dropdownItemClass}>
          BS & H
        </NavDropdown.Item>
      </NavDropdown>
    </div>

    {/* PG Section */}
    <div
      onMouseEnter={handleMouseEnter(setShowPG)}
      onMouseLeave={handleMouseLeave(setShowPG)}
    >
      <NavDropdown
        title={<span className="text-black hover:text-transparent">PG</span>}
        id="pg-dropdown"
        show={showPG}
      >
        {/* MBA and M.Tech side by side inside PG */}
        <div className="flex gap-4 px-2 py-1">
          {/* MBA Section */}
          <div
            onMouseEnter={handleMouseEnter(setShowMBA)}
            onMouseLeave={handleMouseLeave(setShowMBA)}
          >
            <NavDropdown
              title={<span className="text-black hover:text-[#B04040]">MBA</span>}
              id="mba-dropdown"
              show={showMBA}
              className="submenu-item"
            >
              <NavDropdown.Item as={Link} to="/departments/mba-finance" className={dropdownItemClass}>
                Finance
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          {/* M.Tech Section */}
          <div
            onMouseEnter={handleMouseEnter(setShowMTech)}
            onMouseLeave={handleMouseLeave(setShowMTech)}
          >
            <NavDropdown
              title={<span className="text-black hover:text-[#B04040]">M.Tech</span>}
              id="mtech-dropdown"
              show={showMTech}
              className="submenu-item"
            >
              <NavDropdown.Item as={Link} to="/departments/mtech-cse" className={dropdownItemClass}>
                CSE
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/mtech-accounts" className={dropdownItemClass}>
                EEE
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </NavDropdown>
    </div>
  </div>
</NavDropdown>


<NavDropdown
  title={<span className="text-white hover:text-white">{'Campus Life'}</span>}
  id="campus-dropdown"
  show={showCampus}
  onMouseEnter={handleMouseEnter(setShowCampus)}
  onMouseLeave={handleMouseLeave(setShowCampus)}
>
  {/* First Main Item */}
  <NavDropdown.Item as={Link} to="/campus/campus" className={dropdownItemClass}>
    Campus
  </NavDropdown.Item>

  <div
  className="dropdown-submenu"

  onMouseEnter={() => setShowGallery(true)}
  onMouseLeave={() => setShowGallery(false)}
>
  <NavDropdown
   title={<span className="text-black hover:text-white ml-2">{'Gallery'}</span>}
    drop="end"
    show={showGallery}
    id="gallery-dropdown"
  >
    <NavDropdown.Item as={Link} to="/gallery/culturals" className={dropdownItemClass}>
      Culturals
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery/library" className={dropdownItemClass}>
      Library
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery/sports" className={dropdownItemClass}>
      Sports
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery/canteen" className={dropdownItemClass}>
      Canteen
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery/transport" className={dropdownItemClass}>
      Transport
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery/events" className={dropdownItemClass}>
      Events
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery/labs" className={dropdownItemClass}>
      Labs
    </NavDropdown.Item>
  </NavDropdown>
  </div>
  {/* Nested Gallery Dropdown */}
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
