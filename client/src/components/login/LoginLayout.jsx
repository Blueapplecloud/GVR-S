// src/layouts/LoginLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Left Content (Login Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
      {/* Right Image */}
      <div className="hidden md:block md:w-1/2 overflow-hidden mx-auto">
        <img
          src="/Images/GVRS_building.JPG"
          alt="Login Visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginLayout;
