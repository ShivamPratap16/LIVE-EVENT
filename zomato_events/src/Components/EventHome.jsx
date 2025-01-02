import React from 'react';
import './EventHome.css';
import Footer from './Footer'; // Ensure the path is correct
import TrendingEventsCarousel from './TrendingEvent'; // Replace with the correct path
import CityGallery from './CityGallery'; // Replace with the correct path
import shreyaImage from "../assets/shreya-image.avif"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../assets/videoone.mp4"
import Header from './Header'; // Replace with the correct path
import { useNavigate } from 'react-router-dom';

function EventHome() {
  const events = [
    {
      title: "Food Festival 2024",
      description: "Indulge in the city's best street food and cuisines.",
      image: shreyaImage,
    },
    {
      title: "Comedy Night",
      description: "Laugh out loud with the best comedians in town.",
      image: shreyaImage,
    },
    {
      title: "Live Music Concert",
      description: "Experience a night of soulful music and entertainment.",
      image: shreyaImage,
    },
    {
      title: "Art & Culture Fair",
      description: "Dive into the vibrant world of art and heritage.",
      image:shreyaImage,
    },
    {
      title: "Tech Workshops",
      description: "Learn from experts and upskill yourself.",
      image: shreyaImage,
    },
  ];
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleListEventClick = () => {
    navigate('/list-event'); // Navigate to the "List Event" page
  };

  return (
    
    <div className="event-home">
      {/* <Header/> */}
      {/* Main Event Section */}
      <div className="event-header">
         <div className="event-header-top">
              <div className="logo-container">
                <span className="zomato-logo">zomato</span>
                <span className="live-text">LIVE</span>
              </div>
              {/* <div className="location-selector">
                <img src={cityLogo} alt="City Logo" className="city-logo" />
               
                <span className="location-text">Indore</span>
                <span className="dropdown-icon">▼</span>
              </div> */}
              <div className="list-event" onClick={handleListEventClick}>
                <span>LIST YOUR EVENT</span>
              </div>
            </div>
            </div>
      <div className="event-card">
        <div className="event-details">
          <h1 className="event-title">DILJIT DOSANJH</h1>
          <div className="event-info">
            <p >
              <span role="img" aria-label="calendar">📅</span> 31st December 2024
            </p>
            <p>
              <span role="img" aria-label="location">📍</span> Ludhiana, venue to be announced
            </p>
          </div>
          <button className="event-button">Book tickets</button>
        </div>
        <div className="event-video">
          {/* <h1>hello </h1> */}
        <video src={video1}  muted autoPlay loop className="video-player">
  Your browser 
</video>
        </div>
      </div>

      {/* Trending Events Carousel */}
      <TrendingEventsCarousel events={events} />

      {/* City Gallery Section */}
      <CityGallery />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default EventHome;
