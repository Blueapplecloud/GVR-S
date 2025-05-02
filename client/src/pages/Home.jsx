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
    <div className="">
      <CarouselComponent />
      <Highlights />
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <h3 className="border-b-2 border-primaryColor pb-1">Campus updates</h3>
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
