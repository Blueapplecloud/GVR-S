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
      icon: <FaUniversity className="text-blue-600 text-3xl mb-1 " />,
      title: "Admissions",
      description:
        "Join a community of innovators and gain access to top-tier education.",
      buttons: ["View More >>"],
    },
    {
      icon: <FaBuilding className="text-purple-600 text-3xl mb-1" />,
      title: "Hostels",
      description:
        "Access premium accommodations and networking opportunities for professional growth.",
      buttons: ["View More >>"],
    },
    {
      icon: <FaMicroscope className="text-green-600 text-3xl mb-1" />,
      title: "Programs Offered",
      description: "UG and PG Programs",
      buttons: ["View More >>"],
    },
    {
      icon: <FaUsers className="text-red-600 text-3xl mb-1" />,
      title: "RJ E-Nest (i-TBI)",
      description: "Engage in a vibrant campus life filled with opportunities.",
      buttons: ["View More >>", "Brochure"],
    },
  ];
  return (
    <div className="!px-15 !py-10 flex flex-col md:flex-row gap-5 items-center justify-center h-screen">
      <div className="w-full md:w-150 flex flex-col shadow-lg bg-white rounded-lg p-4 gap-2">
        <h3>Leading Engineering Institution</h3>
        <p>
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
        <button className="mt-3 py-2 bg-green-900 text-white rounded">
          Explore Brochure
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-1/2 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out p-2"
          >
            {card.icon}
            <p className="text-base font-semibold">{card.title}</p>
            <p className="text-gray-600 ">{card.description}</p>
            <div className="flex  flex-wrap justify-center">
              {card.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="border border-blue-500 text-blue-500  rounded hover:bg-blue-500 hover:text-white transition p-2 mx-1"
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
