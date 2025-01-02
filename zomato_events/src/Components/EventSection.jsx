import React from "react";
import EventCard from "./EventCard";
import "./EventSection.css";
import shreyaImage from "../assets/shreya-image.avif";
const events = [
  {
    id: 1,
    title: "Shreya Ghoshal - All Hearts Tour | India",
    date: "11 January",
    price: "₹1499 onwards",
    image: shreyaImage,
  },
  {
    id: 2,
    title: "Triveni 3mp",
    date: "30 December",
    price: "₹999 onwards",
    image: shreyaImage,
  },
  {
    id: 3,
    title: "Red Flags Featuring Vishal Tyagi",
    date: "29 December",
    price: "₹299 onwards",
    image: shreyaImage,
  },
];

const EventSection = () => {
  return (
    <section className="event-section">
    

      <h2 className = "event_text ">Explore All Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
