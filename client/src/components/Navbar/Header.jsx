import React from "react";
import "./Navbar.css"; // Ensure this path is correct

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-Gray300 py-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-11 gap-y-4 md:gap-y-0">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img
            src="/Images/GVR&S Logo.jpg"
            alt="College Logo"
            className="w-24 md:w-28 mt-2 md:mt-0 ml-0 md:ml-2"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center text-center justify-center w-full px-2">
          {/* College Name + EAPCET Code */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center w-full">
            <h1 className="text-[28px] sm:text-[36px] md:text-4xl lg:text-[42px] xl:text-[50px] font-bold text-Red leading-tight font-Serif text-center">
              G.V.R. & S. COLLEGE OF ENGINEERING
            </h1>
            {/* <div className="border border-black rounded px-1 py-0 text-base md:text-lg font-bold font-Serif">
              EAPCET Code : GVRS
            </div> */}
          </div>

          {/* Logos + Affiliation Text Block */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center mt-2">
            {/* First 3 logos (left) */}
            {/* <div className="flex justify-center gap-2">
              <img src="/Images/aicte.jpg" alt="AICTE" className="h-10 md:h-10" />
              <img src="/Images/naac.png" alt="NAAC" className="h-10 md:h-10" />
              <img src="/Images/nba.jpg" alt="NBA" className="h-10 md:h-10" />
            </div> */}

            {/* Center Text */}
            <div className="flex flex-col items-center px-2 leading-tight">
              <p className="text-green-600 text-lg sm:text-xl md:text-2xl font-Serif">
                (Approved by AICTE,New Delhi)
              </p>
              <p className="text-black font-semibold font-Serif text-base sm:text-lg md:text-xl">
                Affiliated to JNTUK Kakinada | Govt.of.AP Accrediated by NAAC | ISO Certified Institution
              </p>
            </div>

            {/* Last 4 logos (right) */}
            {/* <div className="flex justify-center gap-2">
              <img src="/Images/tuv-sud-logo.png" alt="TUV" className="h-10 md:h-10" />
              <img src="/Images/nirf-logo.png" alt="NIRF" className="h-10 md:h-10" />
              <img src="/Images/ariia.png" alt="ARIIA" className="h-10 md:h-10" />
              <img src="/Images/iic.png" alt="IIC" className="h-10 md:h-10" />
            </div> */}
          </div>

        </div>
          <div className="flex-shrink-0">
          <img
            src="/logo/NAAC-Logo.png"
            alt="NAAC Logo"
            className="w-24 md:w-28 mt-2 md:mt-0 ml-0 md:ml-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
