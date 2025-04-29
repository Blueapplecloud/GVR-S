import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-300 py-4 h-38">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4 px-4">

        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://gvrs.ac.in/wp-content/uploads/2024/11/cropped-newlogo-1.jpg"
            alt="College Logo"
            className="!w-80 mt-4"
          />
        </div>

        {/* Center Text Content */}
        <div className="flex-1 text-center md:text-left !space-y-1 mt-4">
          <h1 className="!text-[30px] md:text-4xl !font-bold !text-red-600 leading-tight">
            GVR&amp;S COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h1>
          <p className="text-gray-800 italic font-serif leading-tight">
            (Approved by AICTE)
          </p>
          <p className="text-gray-800 font-bold font-serif leading-tight">
            Affiliated by JNTU Kakinada
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
