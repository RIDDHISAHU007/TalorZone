import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contact Us</h2>
      <div className="contact-details">
        <p>
          <strong>Email ID:</strong>{" "}
          <a href="mailto:support@ambraee.com">support@ambraee.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+919828733355">+91-9828733355</a>
        </p>
        <p>
          <strong>Address:</strong> Ambraee Enterprises, B-8, 2nd Floor, Sharma
          Colony, Kartarpura Industrial Area, Bais Godam, Jaipur - 302006
        </p>
        <p>
          <strong>GST No.:</strong> 08ABYFA7653G1ZT
        </p>
      </div>
      <div className="contact-map">
        <iframe
          title="Ambraee Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.306044887737!2d75.79339931539441!3d26.91243398312479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db654bf909551%3A0x91c82cd5747027df!2sSharma%20Colony%2C%20Kartarpura%20Industrial%20Area%2C%20Bais%20Godam%2C%20Jaipur%2C%20Rajasthan%20302006!5e0!3m2!1sen!2sin!4v1692686522648!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
