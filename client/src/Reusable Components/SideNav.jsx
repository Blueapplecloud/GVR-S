import React from "react";
import { NavLink } from "react-router-dom";
import AdminBackdrop from "../components/Admin/Backdrop";

function SideNav() {
  const links = [
    { name: "Placements", path: "/admin/placements" },
    { name: "Students", path: "/admin/students" },
    { name: "Events", path: "/admin/events" },
  ];

  return (
    <aside className="w-64 flex flex-col bg-white shadow-md h-screen p-4 ">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col flex-grow space-y-3 mb-3">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg transition ${
                isActive
                  ? "bg-primaryColor text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center  mt-auto">
        <AdminBackdrop />
      </div>
    </aside>
  );
}
export default SideNav;
