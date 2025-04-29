import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Carousel from "react-bootstrap/Carousel";

// Array of carousel items with image URL, title, and description
const carouselItems = [
  {
    imageUrl: "/images/carousel/img1.jpg",
  },
  {
    imageUrl: "/images/carousel/img2.jpg",
  },
  {
    imageUrl: "/images/carousel/img3.jpg",
  },
  {
    imageUrl: "/images/carousel/img4.jpg",
  },
  {
    imageUrl: "/images/carousel/img5.jpg",
  },
];

function CarouselComponent() {
  return (
    <Carousel
      fade
      controls={true} // Show arrows
      indicators={true} // Show pagination dots
      interval={3000} // Auto-slide every 3 seconds
      pause="hover" // Pause on hover
      wrap={true} // Infinite loop
    >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 object-cover h-auto"
            src={item.imageUrl}
            alt={item.altText}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
