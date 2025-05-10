import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";

const CustomNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // for nested mobile dropdowns

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
      label: (
        <>
          About GVR&S <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        { label: "GVR&S History", path: "/about/history" },
        { label: "Vision & Mission", path: "/about/vision&mission" },
        { label: "Principal's Message", path: "/about/message" },
        { label: "Contact Us", path: "/about/contactus" },
      ],
    },
    {
      label: (
        <>
          GVR&S Group <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        {
          label: "GVR&S Degree College For women",
          path: "/GVR&S Group/GVR&S Degree College For women",
        },
        {
          label: "GVR&S Degree College For Professional studies",
          path: "/GVR&S Group/GVR&S Degree College For Professional studies",
        },
        {
          label: "GVR&S Co-operavtive junior college",
          path: "/GVR&S Group/GVR&S Co-operavtive junior college",
        },
      ],
    },
    {
      label: (
        <>
          Management <FaChevronDown className="hidden lg:inline" />
        </>
      ),
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
      label: (
        <>
          Academics <FaChevronDown className="hidden lg:inline" />
        </>
      ),
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
      label: (
        <>
          Departments <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        {
          label: (
            <>
              UG <FaChevronRight className="hidden lg:inline" />
            </>
          ),
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
          label: (
            <>
              PG <FaChevronRight className="hidden lg:inline" />
            </>
          ),
          dropdown: [
            {
              label: (
                <div className="flex items-center">
                  <Link to="/departments/mba" className="mr-2">
                    MBA
                  </Link>
                  <FaChevronDown className="hidden lg:inline cursor-pointer" />
                </div>
              ),
              dropdown: [
                { label: "Finance", path: "/departments/mba-finance" },
              ],
            },
            {
              label: "MTECH",
              dropdown: [
                { label: "CSE", path: "/departments/mtech-cse" },
                { label: "Power System(EEE)", path: "/departments/mtech-eee" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: (
        <>
          Campus Life <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        { label: "Campus", path: "/campus/campus" },
        {
          label: (
            <>
              Gallery <FaChevronRight className="hidden lg:inline" />
            </>
          ),
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
      label: (
        <>
          NAAC <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        { label: "NAAC", path: "/naac/naac" },
        { label: "DVV", path: "/naac/dvv" },
      ],
    },
    {
      label: (
        <>
          Placements <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        { label: "Placements", path: "/placements/placements" },
        { label: "RTI", path: "/placements/rti" },
      ],
    },
    {
      label: (
        <>
          Administration <FaChevronDown className="hidden lg:inline" />
        </>
      ),
      dropdown: [
        { label: "Organising Chart", path: "/administration/organising chart" },
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
      } mt-0.5 bg-white text-black rounded shadow-md min-w-[3rem] w-max z-20`}
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
              <div className="px-4 py-2 hover:text-primaryColor cursor-pointer flex items-center">
                {item.label}
              </div>
              {((level === 1 && openSubDropdown === i) ||
                (level === 2 && openNestedDropdown === i)) &&
                renderDropdown(item.dropdown, level + 1)}
            </>
          ) : (
            <Link
              to={item.path}
              className="block px-4 py-2 hover:text-primaryColor"
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
      <Header />
      <div className="bg-primaryColor text-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-evenly h-14">
          {/* Mobile Menu Toggle */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex justify-center gap-x-1 items-center w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="px-3 py-2 hover:bg-primaryColor cursor-pointer flex items-center whitespace-nowrap min-w-[6rem]">
                    {item.label}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 hover:bg-primaryColor cursor-pointer flex items-center"
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown &&
                  openDropdown === index &&
                  renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>

          {/* Login Button (Desktop & Mobile View) */}
          <div className="flex">
            <Link
              to="/login"
              className="bg-white text-primaryColor px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-black px-4 py-2 flex flex-col">
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
      </div>
    </>
  );
};

export default CustomNavbar;
