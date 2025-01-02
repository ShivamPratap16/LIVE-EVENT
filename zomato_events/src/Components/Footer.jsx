import React from 'react';
import './Footer.css'; // Add your CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Top events</h4>
          <ul>
            <li>Events in Delhi NCR</li>
            <li>Events in Bengaluru</li>
            <li>Events in Jaipur</li>
            <li>Events in Goa</li>
            <li>Events in Patna</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Events in Kolkata</li>
            <li>Events in Pune</li>
            <li>Events in Chennai</li>
            <li>Events in Indore</li>
            <li>Events in Shillong</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Events in Mumbai</li>
            <li>Events in Hyderabad</li>
            <li>Events in Chandigarh</li>
            <li>Events in Guwahati</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Work with us</h4>
          <ul>
            <li>List your event</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">zomato</div>
        <div className="footer-links">
          <div className="footer-section">
            <h5>About Zomato</h5>
            <ul>
              <li>Who we are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Zomaverse</h5>
            <ul>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Learn More</h5>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Social Links</h5>
            <ul className="social-links">
              <li>
                <span className="icon">X</span>
              </li>
              <li>
                <span className="icon">Instagram</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
