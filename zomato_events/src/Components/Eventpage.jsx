import React from "react";
import { useParams } from "react-router-dom";
import "./EventPage.css";
import shreya_image from "../assets/shreya-image.avif"
import  { useState,useEffect } from 'react';




const EventPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollContent, setShowScrollContent] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const handleScroll = () => {
    if (window.scrollY > 100) { // Adjust the scroll position as needed
      setShowScrollContent(true);
    } else {
      setShowScrollContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="event-page">
      {/* Header */}
      <header className="header">
        <h1>Zomato LIVE</h1>
        <nav>
          <a href="#">Live</a> / <a href="#">Events in Indore</a> / <span>Triveni 3mp</span>
        </nav>
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Left Section */}
        <div className="poster">
          <img 
            src= {shreya_image} // Replace with actual image URL
            alt="Event Poster"
            className="poster-image"
          />
           <div className="scroll-content-container">
        <div className={`scroll-content ${showScrollContent ? 'visible' : ''}`}>
          <h2>Triveni 3MP</h2>
          <p>Where tradition meets innovation, and three maestros become one.</p>
          <p>30th December</p>
          <p>6:00 PM - 10:00 PM</p>
          <p>Indore</p>
          <p>Venue to be announced</p>
        </div>
      </div>
        </div>
      
        {/* Right Section */}
        <div className="details">
          <h2>Triveni 3mp</h2>
          <p className="tagline">where tradition meets innovation, and three maestros become one.</p>

          <div className="event-info">
            <p><strong>Date:</strong> 30th December</p>
            <p><strong>Time:</strong> 6:00 PM - 10:00 PM</p>
            <p><strong>Location:</strong> Indore (Venue to be announced)</p>
          </div>

          <div className="pricing-book-container">
            <div className="pricing">
              <p><strong>₹999</strong> onwards</p>
            </div>
            <button className="book-button">Book tickets</button>
          </div>

          <div className="about">
          <h3>About</h3>
          <p>
            {isExpanded
              ? "Imagine an evening where three musical rivers merge into one extraordinary flow of melody, emotion, and rhythm—this is the essence of the Triveni 3MP Concert. Step into a world where Shankar Mahadevan's dynamic energy, Hariharan's soulful ghazals, and Anup Jalota's spiritual depth come together to create a symphony that transcends time and genre. This isn’t just a concert; it’s a confluence of legends, a celebration of Indian music’s rich heritage and boundless versatility. Join us for Triveni 3MP"
              : "Imagine an evening where three musical rivers merge into one extraordinary flow of melody, emotion, and rhythm—this is the essence of the Triveni 3MP Concert. Step into a world where Shankar Mahadevan's dynamic energy, Hariharan's soulful ghazals, and Anup Jalota's spiritual depth come together to create a symphony that transcends time and genre..."}
              
          </p>
          <button className="toggle-button" onClick={toggleExpand}>
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
       
        </div>
      </div>
      {/* <div className="scroll-content-container">
        <div className={`scroll-content ${showScrollContent ? 'visible' : ''}`}>
          <h2>Triveni 3MP</h2>
          <p>Where tradition meets innovation, and three maestros become one.</p>
          <p>30th December</p>
          <p>6:00 PM - 10:00 PM</p>
          <p>Indore</p>
          <p>Venue to be announced</p>
        </div>
      </div> */}
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Zomato LIVE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EventPage;
