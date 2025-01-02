import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ title, date, price, image }) => {
  return (
    <div className="event-card1">
      {/* Wrap the image with Link to navigate */}
      <Link to={`/event/triveni-3mp`}>
        <img src={image} alt={title} className="event-image" />
      </Link>
      <div className="event-card-details">
      <div className="event-details">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{price}</p>
      </div>
      </div>
    </div>
  );
};

export default EventCard;
