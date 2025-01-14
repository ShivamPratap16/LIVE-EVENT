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
// import React, { useEffect, useState } from "react";
// import EventCard from "./EventCard";
// import "./EventSection.css";

// const EventSection = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/events1");
//         if (!response.ok) {
//           throw new Error("Failed to fetch events");
//         }
//         const data = await response.json();
//         setEvents(data); // Update state with fetched events
//       } catch (err) {
//         console.error("Error fetching events:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading events...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <section className="event-section">
//       <h2 className="event_text">Explore All Events</h2>
//       <div className="event-list">
//         {events.map((event) => (
//           <EventCard
//             key={event._id} // Use MongoDB's unique ID
//             title={event.eventName}
//             date={event.date}
//             price={`₹${event.ticketPrice} onwards`}
//             image={event.mediaFiles[0]} // Assuming mediaFiles is an array
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EventSection;

