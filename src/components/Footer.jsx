import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-sections">
        {/* Top Categories */}
        <div className="footer-section">
          <h4>Top Categories</h4>
          <ul>
            <li>Suit Sets</li>
            <li>Kurta Sets</li>
            <li>Dresses</li>
            <li>Co-ord Sets</li>
            <li>Sarees</li>
            <li>Lehenga</li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>

            <li>Exchange, Cancellation and Refund Policy</li>

            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Get Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Submit for Returns & Exchanges</li>

            <li>Track Your Orders</li>
            <li>Your Addresses</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaPinterest size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
          <form className="email-subscription">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
