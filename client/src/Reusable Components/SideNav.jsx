import React from 'react';
import { NavLink } from 'react-router-dom';

 function SideNav() {
  const links = [
    { name: 'Placements', path: '/admin/placement' },
    { name: 'Students', path: '/admin/student' },
    { name: 'Events', path: '/admin/events' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4 ">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-3">
        {links.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg transition ${
                isActive ? 'bg-primaryColor text-white' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
export default SideNav;