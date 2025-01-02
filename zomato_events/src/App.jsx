import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import EventSection from "./Components/EventSection";
import Footer from "./Components/Footer";
import ListEvent from "./Components/ListEvent"; // New component for the "List Event" page
import EventPage from "./Components/Eventpage";
import EventHome from "./Components/EventHome";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Home page */}
          <Route
            path="/event/1"
            element={
              <>
                <Header />
                <EventSection />
                <Footer />
              </>
            }
          />
          {/* Route for the List Event page */}
          <Route path="/list-event" element={<ListEvent />} />
          <Route path="/event/triveni-3mp" element={<EventPage/>} />
          <Route path="/" element={<EventHome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
