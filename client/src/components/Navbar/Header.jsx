import React from "react";

const Header = () => {
  return (
<header className="w-full bg-white border-b border-Gray300 py-4">
<div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-11 gap-y-4 md:gap-y-0">
    {/* Left Logo */}
    <div className="flex-shrink-0">
      <img
        src="/Images/GVR&S Logo.jpg"
        alt="College Logo"
        className="w-24 md:w-28 mt-2 md:mt-4 ml-2 md:ml-6"
      />
    </div>

    {/* Center Content */}
    <div className="flex-1 flex flex-col items-center text-center">
      {/* College Name + EAPCET Code */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 ml-20">
        <h1 className="!text-[34px] md:text-4xl font-bold text-Red !leading-tight tracking-wider font-Serif">
          G.V.R. & S. COLLEGE OF ENGINEERING
        </h1>
        <div className="border border-black rounded px-1 py-0 !text-[20px] md:text-base !font-bold font-Serif">
          EAPCET Code : GVRS
        </div>
      </div>

      {/* Logos + Affiliation Text Block */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        {/* First 3 logos (left) */}
        <div className="flex justify-center gap-2">
          <img src="/Images/aicte.jpg" alt="AICTE" className="h-10 md:h-10" />
          <img src="/Images/naac.png" alt="NAAC" className="h-10 md:h-10" />
          <img src="/Images/nba.jpg" alt="NBA" className="h-10 md:h-10" />
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center text-center px-2 leading-tight">
          <p className="text-green-600 text-xl font-Brush">
            (Approved by AICTE)
          </p>
          <p className="text-black font-semibold font-Serif">
            Affiliated to JNTU Kakinada
          </p>
        </div>

        {/* Last 4 logos (right) */}
        <div className="flex justify-center gap-2">
          <img src="/Images/tuv-sud-logo.png" alt="TUV" className="h-10 md:h-10" />
          <img src="/Images/nirf-logo.png" alt="NIRF" className="h-10 md:h-10" />
          <img src="/Images/ariia.png" alt="ARIIA" className="h-10 md:h-10" />
          <img src="/Images/iic.png" alt="IIC" className="h-10 md:h-10" />
        </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
