import React from "react";
import CarouselComponent from "../components/homeComponents/CarouselComponent";
import Highlights from "../components/homeComponents/Highlights";
import CampusNews from "../components/homeComponents/CampusNews";
import CampusOverview from "../components/homeComponents/CampusOverview";
import LogosMarquee from "../components/homeComponents/LogosMarquee";
import CampusLifeCarousel from "../components/homeComponents/CampusLifeCarousel";
import SpotLight from "../components/homeComponents/SpotLight";

function Home() {
  const news = [
    {
      title: "Campus News",
      number: 3,
    },
    {
      title: "Exams Scheduled",
      number: 3,
    },
    {
      title: "Examamination Results",
    },
    {
      title: "Placements News",
      number: 5,
    },
  ];
  return (
    <div className="overflow-hidden">
      <CarouselComponent />
      <Highlights />
      <h1 className="text-center text-primaryColor font-semibold text-6xl sm:w-full mt-1 mb-2  md:inline-block border-2 px-3 py-3 font-Serif">
        EAPCET CODE : GVRS
      </h1>
      <div className="flex flex-col items-center justify-center mt-3 mb-3">
        <h1 className=" text-primaryColor pb-2 text-5xl font-semibold">
          Campus updates
        </h1>
        <div className="flex flex-col md:flex-row gap-2 mt-3">
          {news.map((item, index) => (
            <p
              key={index}
              className="bg-primaryColor text-white px-2 py-2 rounded-xl cursor-pointer"
            >
              {item.title}
              {"  "}
              {item.number && (
                <span className="text-primaryColor font-bold bg-white rounded-full px-1 py-1 ">
                  {item.number}
                </span>
              )}
            </p>
          ))}
        </div>
      </div>
      <CampusNews />
      <CampusOverview />
      <LogosMarquee />
      <CampusLifeCarousel />
      <SpotLight />
    </div>
  );
}

export default Home;
