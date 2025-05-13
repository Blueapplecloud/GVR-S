import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

import HeaderComponent from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const CustomNavbar = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state.userData);

  useEffect(() => {
    if (store && store.user && store.user.name) {
    } else {
      navigate("/");
    }
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // for nested mobile dropdowns
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust breakpoint as needed
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false); // Close mobile menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubDropdown(null);
    setOpenNestedDropdown(null);
  };

  const menuItems = [
    {
      label: <FaHome />,
      path: "/",
    },
    {
      label: <>About GVR&S</>,
      dropdown: [
        { label: "GVR&S History", path: "/about/history" },
        { label: "Vision & Mission", path: "/about/vision&mission" },
        { label: "Principal's Message", path: "/about/message" },
        { label: "Contact Us", path: "/about/contactus" },
      ],
    },
    {
      label: <>GVR&S Group</>,
      dropdown: [
        {
          label: "GVR&S Degree College For Women",
          path: "/gvr&s-group/gvr&s-degree-college-for-women",
        },
        {
          label: "GVR&S Degree College For Professional Studies",
          path: "/gvr&s-group/gvr&s-degree-college-for-professional-studies",
        },
        {
          label: "GVR&S Co-operavtive Junior College",
          path: "/gvr&s-group/gvr&s-co-operavtive-junior-college",
        },
      ],
    },
    {
      label: <>Management</>,
      dropdown: [
        { label: "Founder & President", path: "/management/founder" },
        { label: "Chairman", path: "/management/chairman" },
        { label: "Director", path: "/management/director" },
        { label: "Dean", path: "/management/dean" },
        { label: "Executive Body", path: "/management/executive-body" },
        { label: "Governing Body", path: "/management/governing-body" },
        { label: "Teaching Staff", path: "/management/teaching-staff" },
        { label: "Non-Teaching Staff", path: "/management/non-teaching-staff" },
      ],
    },
    {
      label: <>Academics</>,
      dropdown: [
        { label: "Programs Offered", path: "/academics/programs-offered" },
        { label: "Fee Structure", path: "/academics/fee-structure" },
        // { label: "Examination Section", path: "/academics/exam" },
        {
          label: "Academic Regulations",
          path: "/academics/academic-regulations",
        },
        {
          label: "Academic Scholarship & Awards",
          path: "/academics/academic-scholarship",
        },
        { label: "Eligibility", path: "/academics/elgibility" },
      ],
    },
    {
      label: <>Departments</>,
      dropdown: [
        {
          label: <>UG Programs</>,
          dropdown: [
            {
              label: "Computer Science & Engineering",
              path: "/departments/cse",
            },
            {
              label: "Computer Science & Engineering(AI & ML)",
              path: "/departments/cse-aiml",
            },
            {
              label: "Computer Science & Engineering(AI & DS)",
              path: "/departments/cse-aids",
            },
            {
              label: "Electronics and Communication Engineering",
              path: "/departments/ece",
            },
            {
              label: "Electrical and Electronics Engineering",
              path: "/departments/eee",
            },
            { label: "Civil Engineering", path: "/departments/civil" },
            { label: "Mechanical Engineering", path: "/departments/mech" },
            { label: "SCIENCE & HUMANITIES", path: "/departments/sh" },
          ],
        },
        {
          label: <>PG Programs</>,
          dropdown: [
            {
              label: (
                <>
                  <div className="flex items-center">
                    <Link to="/departments/mba" className="mr-2">
                      MBA
                    </Link>
                  </div>
                </>
              ),
              dropdown: [
                { label: "Finance", path: "/departments/mba-finance" },
                {
                  label: "Human Resources",
                  path: "/departments/mba-humar-resources",
                },
                { label: "Marketing", path: "/departments/mba-marketing" },
                {
                  label: "Operation Management",
                  path: "/departments/mba-operation-management",
                },
                {
                  label: "Health Care and Hospital Administration",
                  path: "/departments/mba-health-care-and-hospital-administration",
                },
                {
                  label: "Agri Business Management",
                  path: "/departments/mba-agri-business-management",
                },
              ],
            },
            {
              label: <>MTECH </>,
              dropdown: [
                {
                  label: "Computer Science & Engineering (CSE)",
                  path: "/departments/mtech-cse",
                },
                { label: "Power System (EEE)", path: "/departments/mtech-eee" },
                {
                  label: "CAD/CAM (Mechanical)",
                  path: "/departments/mtech-cad/cam",
                },
                { label: "VLSI (ECM)", path: "/departments/vlsi" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: <>Committees</>,
      dropdown: [
        { label: "Grievance Redressal Committee", path: "/committees/grievance" },
        { label: "Committee For SC/ST", path: "/committees/scst" },
        { label: "Minority Cell", path: "/committees/minority-cell" },
        { label: "Internal Complaint Committee", path: "/committees/icc" },
        {
          label: "Anti Sexual Harassment Committee",
          path: "/committees/ashc",
        },
        { label: "Anti-Ragging Committee", path: "/committees/anti-ragging" },
        { label: "OBC Cell", path: "/committees/obc-cell" },
      ],
    },
    {
      label: <>Campus Life</>,
      dropdown: [
        { label: "Campus", path: "/campus/campus" },
        {
          label: <>Gallery</>,
          dropdown: [
            { label: "Culturals", path: "/gallery/culturals" },
            { label: "Library", path: "/gallery/library" },
            { label: "Sports", path: "/gallery/sports" },
            { label: "Canteen", path: "/gallery/canteen" },
            { label: "Transport", path: "/gallery/transport" },
            { label: "Events", path: "/gallery/events" },
            { label: "Labs", path: "/gallery/labs" },
          ],
        },
      ],
    },
    {
      label: <>NAAC</>,
      dropdown: [
        { label: "NAAC", path: "/naac/naac" },
        { label: "DVV", path: "/naac/dvv" },
      ],
    },
    {
      label: <>Placements</>,
      dropdown: [
        { label: "Placements", path: "/placements/placements" },
        { label: "RTI", path: "/placements/rti" },
      ],
    },
    {
      label: <>Administration</>,
      dropdown: [
        { label: "Organising Chart", path: "/administration/organising-chart" },
      ],
    },
    {
      label: "IQAC",
      path: "/iqac",
    },
  ];

  const renderDropdown = (items, level = 1) => (
    <ul
      className={`absolute ${
        level === 1 ? "left-0 top-full" : "left-full top-0"
      } mt-0.5 bg-white text-black rounded shadow-md min-w-[10rem] w-max z-20`}
      onMouseLeave={() => {
        if (level === 1) setOpenSubDropdown(null);
        else setOpenNestedDropdown(null);
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="relative"
          onMouseEnter={() => {
            if (level === 1) setOpenSubDropdown(i);
            else if (level === 2) setOpenNestedDropdown(i);
          }}
          onMouseLeave={() => {
            if (level === 1) setOpenSubDropdown(null);
            else if (level === 2) setOpenNestedDropdown(null);
          }}
        >
          {item.dropdown ? (
            <>
              <div className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center whitespace-nowrap">
                {item.label}
                {level > 1 && <FaChevronRight className="w-4 h-4" />}
                {level === 1 && openSubDropdown === i && (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </div>
              {((level === 1 && openSubDropdown === i) ||
                (level === 2 && openNestedDropdown === i)) &&
                renderDropdown(item.dropdown, level + 1)}
            </>
          ) : (
            <Link
              to={item.path}
              className="block px-4 py-2 hover:text-primaryColor whitespace-nowrap"
              onClick={() => {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
                setOpenNestedDropdown(null);
              }}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <HeaderComponent />
      <div className="bg-primaryColor text-white py-4 px-6 flex items-center relative z-10">
        <div className="flex items-center mr-auto"> {/* Move mobile toggle to the left */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden mr-4"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group mr-1" /* Reduce space between items */
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="px-2 py-2 hover:bg-primaryColor cursor-pointer flex items-center whitespace-nowrap !min-w-[6rem]"> {/* Reduced padding */}
                    {item.label}
                    {item.label !== <FaHome /> && (
                      <FaChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-2 py-2 hover:bg-primaryColor cursor-pointer flex items-center whitespace-nowrap" /* Reduced padding */
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown && openDropdown === index && renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>
        </div>

        {/* Login Button (Desktop & Mobile View) - Moved to the right */}
        <div className="flex">
          <Link
            to="/login"
            className="bg-white text-primaryColor px-4 py-2 rounded-lg hover:bg-gray-200 whitespace-nowrap"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-black px-4 py-2 flex flex-col absolute top-full left-0 right-0 z-20">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              {item.dropdown ? (
                <>
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Stop bubbling
                      setOpenSubDropdown(
                        openSubDropdown === index ? null : index
                      );
                      setOpenNestedDropdown(null); // 🔥 Reset nested dropdown when opening new main dropdown
                    }}
                    className="flex justify-between items-center cursor-pointer font-semibold"
                  >
                    <span>{item.label}</span>
                    <FaChevronDown
                      className={`transform transition-transform ${
                        openSubDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openSubDropdown === index && (
                    <div className="pl-4 mt-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <div key={subIndex} className="mb-1">
                          {subItem.dropdown ? (
                            <>
                              {/* Nested Dropdown Toggle for PG Programs */}
                              <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation(); // Stop bubbling
                                  setOpenNestedDropdown(
                                    openNestedDropdown === subIndex
                                      ? null
                                      : subIndex
                                  );
                                }}
                              >
                                <span>{subItem.label}</span>
                                <FaChevronRight
                                  className={`transform transition-transform ${
                                    openNestedDropdown === subIndex
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </div>

                              {/* Render Nested Dropdown for MBA & MTECH */}
                              {openNestedDropdown === subIndex && (
                                <div className="pl-4 mt-1">
                                  {subItem.dropdown.map(
                                    (nestedItem, nestedIndex) => (
                                      <div key={nestedIndex} className="mb-1">
                                        <Link
                                          to={nestedItem.path}
                                          className="block py-1 text-sm hover:text-primaryColor"
                                          onClick={(e) => {
                                            e.preventDefault(); // Prevent refresh
                                            setMobileMenuOpen(false);
                                            setOpenSubDropdown(null);
                                            setOpenNestedDropdown(null);
                                          }}
                                        >
                                          {nestedItem.label}
                                        </Link>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={subItem.path}
                              className="block py-1 text-sm hover:text-primaryColor"
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                setOpenSubDropdown(null);
                                setOpenNestedDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block font-semibold py-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default CustomNavbar;