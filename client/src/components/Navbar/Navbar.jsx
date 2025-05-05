import React, { useState } from "react";
import { FaHome, FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
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
          About GVR&S <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        { label: "GVR&S History", path: "/about/history" },
        { label: "Vision & Mission", path: "/about/vision&mission" },
        { label: "Principal's Message", path: "/about/message" },
      ],
    },
    {
      label: (
        <>
          Management <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        { label: "Founder & President", path: "/management/founder" },
        { label: "Chairman", path: "/management/chairman" },
        { label: "Director", path: "/management/director" },
        { label: "Dean", path: "/management/dean" },
        { label: "Executive Body", path: "/management/executive-body" },
        { label: "Governing Body", path: "/management/governing-body" },
      ],
    },
    {
      label: (
        <>
          Academics <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        { label: "Programs Offered", path: "/academics/programs" },
        { label: "Fee Structure", path: "/academics/fees" },
        { label: "Examination Section", path: "/academics/exam" },
        { label: "Academic Regulations", path: "/academics/academic regulations" },
        { label: "Academic Scholarship", path: "/academics/scholarship" },
      ],
    },
    {
      label: (
        <>
          Departments <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        {
          label: (
            <>
              UG <FaChevronRight className="hidden lg:inline"/>
            </>
          ),
          dropdown: [
            { label: "Computer Science & Engineering", path: "/departments/cse" },
            { label: "Computer Science & Engineering(AI & ML)", path: "/departments/cse-aiml" },
            { label: "Computer Science & Engineering(AI & DS)", path: "/departments/cse-aids" },
            { label: "Electronics and Communication Engineering", path: "/departments/ece" },
            { label: "Electrical and Electronics Engineering", path: "/departments/eee" },
            { label: "Civil Engineering", path: "/departments/civil" },
            { label: "Mechanical Engineering", path: "/departments/mech" },
            { label: "SCIENCE & HUMANITIES", path: "/departments/sh" },
          ],
        },
        {
          label: (
            <>
              PG <FaChevronRight className="hidden lg:inline"/>
            </>
          ),
          dropdown: [
            {
              label: "MBA",
              dropdown: [
                { label: "Finance", path: "/departments/mba-finance" },
              ],
            },
            {
              label: "MTech",
              dropdown: [
                { label: "CSE", path: "/departments/mtech-cse" },
                { label: "EEE", path: "/departments/mtech-eee" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: (
        <>
          Campus Life <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        { label: "Campus", path: "/campus/campus" },
        {
          label: (
            <>
              Gallery <FaChevronRight className="hidden lg:inline"/>
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
          NAAC <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        { label: "NAAC", path: "/naac/naac" },
        { label: "DVV", path: "/naac/dvv" },
      ],
    },
    {
      label: "Placements",
      path: "/placements",
    },
    {
      label: (
        <>
          Administration <FaChevronDown className="hidden lg:inline"/>
        </>
      ),
      dropdown: [
        { label: "Organising Chart", path: "/administration/organising chart" },
      ],
    },
  ];

  const renderDropdown = (items, level = 1) => (
    <ul
      className={`absolute ${level === 1 ? 'left-0 top-full' : 'left-full top-0'} mt-0.5 bg-white text-black rounded shadow-md min-w-[3rem] w-max z-20`}
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
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className="hidden lg:flex justify-center gap-x-4 items-center w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="px-3 py-2 hover:bg-primaryColor cursor-pointer flex items-center">
                    {item.label}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 hover:bg-primaryColor cursor-pointer flex items-center"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown && openDropdown === index && renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-black px-4 py-2">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.dropdown ? (
                  <>
                    <div
                      onClick={() => setOpenSubDropdown(openSubDropdown === index ? null : index)}
                      className="flex justify-between items-center cursor-pointer font-semibold"
                    >
                      <span>{item.label}</span>
                      <FaChevronDown className={`transform transition-transform ${openSubDropdown === index ? "rotate-180" : ""}`} />
                    </div>
                    {openSubDropdown === index && (
                      <div className="pl-4 mt-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <div key={subIndex} className="mb-1">
                            {subItem.dropdown ? (
                              <>
                                <div
                                  className="flex justify-between items-center cursor-pointer"
                                  onClick={() => setOpenNestedDropdown(openNestedDropdown === subIndex ? null : subIndex)}
                                >
                                  <span>{subItem.label}</span>
                                  <FaChevronRight className={`transform transition-transform ${openNestedDropdown === subIndex ? "rotate-90" : ""}`} />
                                </div>
                                {openNestedDropdown === subIndex && (
                                  <div className="pl-4 mt-1">
                                    {subItem.dropdown.map((nestedItem, nestedIndex) => (
                                      <Link
                                        key={nestedIndex}
                                        to={nestedItem.path}
                                        className="block py-1 text-sm"
                                        onClick={toggleMobileMenu}
                                      >
                                        {nestedItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block py-1 text-sm"
                                onClick={toggleMobileMenu}
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
                    className="block font-semibold"
                    onClick={toggleMobileMenu}
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
