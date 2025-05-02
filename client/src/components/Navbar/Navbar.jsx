import React, { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";

const CustomNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // for MBA/MTech

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      label: <FaHome />,
      path: "/",
    },
    {
      label: (
        <>
          About GVR&S <FaChevronDown />
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
          Management <FaChevronDown />
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
          Academics <FaChevronDown />
        </>
      ),
      dropdown: [
        { label: "Programs Offered", path: "/academics/programs" },
        { label: "Fee Structure", path: "/academics/fees" },
        { label: "Examination Section", path: "/academics/exam" },
        {
          label: "Academic Regulations",
          path: "/academics/academic regulations",
        },
        { label: "Academic Scholarship", path: "/academics/scholarship" },
      ],
    },
    {
      label: (
        <>
          Departments <FaChevronDown />
        </>
      ),
      dropdown: [
        {
          label: (
            <>
              UG <FaChevronRight />
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
              PG <FaChevronRight />
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
          Campus Life <FaChevronDown />
        </>
      ),
      dropdown: [
        { label: "Campus", path: "/campus/campus" },
        {
          label: (
            <>
              Gallery <FaChevronRight />
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
          NAAC <FaChevronDown />
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
          Administration <FaChevronDown />
        </>
      ),
      dropdown: [
        { label: "Organising Chart", path: "/administration/organising chart" },
      ],
    },
  ];

  const handleSubDropdownToggle = (index) => {
    if (openSubDropdown === index) {
      setOpenSubDropdown(null);
    } else {
      setOpenSubDropdown(index);
    }
  };

  const renderDropdown = (items, level = 1) => (
    <ul
      className={`absolute ${level === 1 ? 'left-0 top-full' : 'left-full top-0'} mt-0.5 bg-white text-black rounded shadow-md min-w-[8rem] w-max z-20`}
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
                setOpenSubDropdown(null);
                setOpenNestedDropdown(null);
                setMobileMenuOpen(false); // if used
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
          <div className="hidden lg:flex justify-center gap-x-4 items-center w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div
                    className="px-3 py-2 hover:bg-primaryColor cursor-pointer flex items-center"
                    onClick={() => {
                      setOpenDropdown(openDropdown === index ? null : index);
                    }}
                  >
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

                {item.dropdown &&
                  openDropdown === index &&
                  renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
