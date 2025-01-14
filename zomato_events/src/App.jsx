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
// import DashboardLayout from "./layouts/DashboardLayout";
// import DashboardHome from "./pages/DashboardHome";
// import DeliveryMenu from "./pages/DeliveryMenu";
// import DineInMenu from "./pages/DineInMenu";
// import TaxesAndCharges from "./pages/TaxesAndCharges";
// import Offers from "./pages/Offers";
// import OutletSettings from "./pages/OutletSettings";
// import OutletInfo from "./pages/OutletInfo";
// import Help from "./pages/Help";
// import DetailedView from "./components/Detailedview";
// import SubmissionDetailsPage from "./components/SubmissionDetailsPage";
// // import Controlevent from "./components/Controlevent";
// import Login from "./components/Login";
// import Eventinfo from "./dashboard/index";
// import PromotionalCampaigns from "./pages/Prmotionalcampaign";
// import MonitorEngagement from "./pages/Monitorengagement";
// // const Eventinfo = Loadable(lazy(() => import('pages/dashboard/index')));
// import Controlevent from "./components/Eventinfo"

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
          <Route path="/event/:slug" element={<EventPage/>} />
          <Route path="/" element={<EventHome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
