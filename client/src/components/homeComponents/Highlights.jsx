import React, { useState } from "react";
import ReactPlayer from "react-player";
import BrochureModal from "./BrochureModal";
import {
  FaUniversity,
  FaBuilding,
  FaMicroscope,
  FaUsers,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Highlights() {
  const [isMuted, setIsMuted] = useState(true);
  const cards = [
    {
      icon: <FaUniversity className="text-primaryColor text-3xl mb-1 " />,
      title: "Admissions",
      description:
        "Join a community of innovators and gain access to top-tier education.",
      buttons: ["View More >>"],
      link: "#",
    },
    // {
    //   icon: <FaBuilding className="text-primaryColor text-3xl mb-1" />,
    //   title: "Hostels",
    //   description:
    //     "Access premium accommodations and networking opportunities for professional growth.",
    //   buttons: ["View More >>"],
    // },
    {
      icon: <FaMicroscope className="text-primaryColor text-3xl mb-1" />,
      title: "Programs Offered",
      description: "UG and PG Programs",
      buttons: ["View More >>"],
      link: "/academics/programs-offered",
    },
    // {
    //   icon: <FaUsers className="text-primaryColor text-3xl mb-1" />,
    //   title: "RJ E-Nest (i-TBI)",
    //   description: "Engage in a vibrant campus life filled with opportunities.",
    //   buttons: ["View More >>", "Brochure"],
    // },
  ];

  return (
    <div className="md:px-5 md:py-5 flex flex-col  mb-1 gap-5 items-center justify-center  mx-auto w-full ">
      <div className="w-full md:flex-1 md:h-[500px] flex flex-col shadow-xl hover:shadow-2xl bg-white rounded-lg  gap-2   transition duration-300 ease-in-out">
        <div className=" rounded-lg shadow-lg  w-auto h-screen bg-gray-50  ">
          <ReactPlayer
            url="/video/gvrs_video.mp4"
            width="100%"
            height="100%"
            controls={false}
            playing={true}
            loop={true}
            muted={isMuted}
          />
        </div>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-center mx-auto text-md"
        >
          {isMuted ? (
            <FaVolumeMute className="text-primaryColor" size={30} />
          ) : (
            <FaVolumeUp className="text-primaryColor" size={30} />
          )}
        </button>
        <BrochureModal />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full md:w-3/4 lg:w-2/3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-2xl flex flex-col items-center justify-center text-center transition duration-300 ease-in-out p-3 gap-3"
          >
            {card.icon}
            <p className="text-base font-semibold">{card.title}</p>
            <p className="text-gray-600 ">{card.description}</p>
            <div className="flex  flex-wrap justify-center">
              {card.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="border border-Amber bg-primaryColor rounded hover:bg-Amber text-white hover:!text-black transition duration-200 ease-in-out p-2 mx-1"
                >
                  <Link to={card.link}>{btn}</Link>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
