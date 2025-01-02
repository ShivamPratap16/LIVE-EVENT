import React from "react";
import Slider from "react-slick";
import "./TrendingCrousel.css"; // Add custom styles if needed
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TrendingEventsCarousel = ({ events }) => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Loop through items
    speed: 500,
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Trending Events</h2>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="carousel-card">
               <div className="carousel-image-container">
               <Link to="/event/triveni-3mp"><img
              src={event.image}
              alt={event.title}
              className="carousel-image"
            /> </Link>
            <div className="carousel-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingEventsCarousel;
