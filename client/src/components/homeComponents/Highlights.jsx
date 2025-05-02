import React from "react";
import ReactPlayer from "react-player";
import {
  FaUniversity,
  FaBuilding,
  FaMicroscope,
  FaUsers,
} from "react-icons/fa";

function Highlights() {
  const cards = [
    {
      icon: <FaUniversity className="text-primaryColor text-3xl mb-1 " />,
      title: "Admissions",
      description:
        "Join a community of innovators and gain access to top-tier education.",
      buttons: ["View More >>"],
    },
    {
      icon: <FaBuilding className="text-primaryColor text-3xl mb-1" />,
      title: "Hostels",
      description:
        "Access premium accommodations and networking opportunities for professional growth.",
      buttons: ["View More >>"],
    },
    {
      icon: <FaMicroscope className="text-primaryColor text-3xl mb-1" />,
      title: "Programs Offered",
      description: "UG and PG Programs",
      buttons: ["View More >>"],
    },
    {
      icon: <FaUsers className="text-primaryColor text-3xl mb-1" />,
      title: "RJ E-Nest (i-TBI)",
      description: "Engage in a vibrant campus life filled with opportunities.",
      buttons: ["View More >>", "Brochure"],
    },
  ];
  return (
    <div className="px-12 py-10 flex flex-col md:flex-row gap-5 items-center justify-center h-screen  ">
      <div className="w-full md:w-1/2 flex flex-col shadow-xl hover:shadow-2xl bg-white rounded-lg p-4 gap-2 px-5 ">
        <h3 className="text-3xl font-semibold text-primaryColor">
          Leading Engineering Institution
        </h3>
        <p className="text-Red ">
          Blending academic innovation with engineering excellence for a
          transformative educational experience.
        </p>
        <div className="overflow-hidden rounded-lg shadow-lg md:h-64 w-full h-full  ">
          <ReactPlayer
            url="https://youtu.be/wgLrRCczh48?feature=shared"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <button className="mt-3 py-2 bg-primaryColor text-white  hover:bg-Amber hover:!text-black rounded">
          Explore Brochure
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-1/2 w-full ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-2xl flex flex-col items-center justify-center text-center transition duration-300 ease-in-out p-2 gap-1"
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
                  {btn}
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
