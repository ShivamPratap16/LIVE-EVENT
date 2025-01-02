import React from 'react';
import './Header.css'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/indore.png'; // Adjust the path as needed
import cityLogo from '../assets/citylogo.png'; // Adjust the path as needed

const Header = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleListEventClick = () => {
    navigate('/list-event'); // Navigate to the "List Event" page
  };
  return (
    
    <div className="event-header">
      <div className="event-header-top">
        <div className="logo-container">
          <span className="zomato-logo">zomato</span>
          <span className="live-text">LIVE</span>
        </div>
        <div className="location-selector">
          <img src={cityLogo} alt="City Logo" className="city-logo" />
         
          <span className="location-text">Indore</span>
          <span className="dropdown-icon">▼</span>
        </div>
        <div className="list-event" onClick={handleListEventClick}>
          <span>LIST YOUR EVENT</span>
        </div>
      </div>
      <div className="event-header-banner">
        <div className="banner-text">
          <h1>EVENTS IN INDORE</h1>
          <p>Experience Indore’s culture through its events and festivals.</p>
        </div>
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default Header;