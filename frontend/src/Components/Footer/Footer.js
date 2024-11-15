import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const toggleSection = (section) => {
    if (isLargeScreen) return; // Don't toggle sections on larger screens
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="heading-block">
          <h3
            onClick={() => toggleSection("contact")}
            className="footer-heading roboto-bold"
          >
            Contact Us
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1C1B1F"
            onClick={() => toggleSection("contact")}
            className={activeSection === "contact" ? "rotate" : ""}
            style={{ display: isLargeScreen ? "none" : "inline" }}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        {(activeSection === "contact" || isLargeScreen) && (
          <div className="footer-content">
            <p className="roboto-regular">Phone: 123-456-7890</p>
            <p className="roboto-regular">Email: info@church.com</p>
            <p className="roboto-regular">Address: 123 Church Street, City</p>
          </div>
        )}
      </div>
      <div className="footer-section">
        <div className="heading-block">
          <h3
            onClick={() => toggleSection("serviceTimes")}
            className="footer-heading roboto-bold"
          >
            Service Times
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1C1B1F"
            onClick={() => toggleSection("serviceTimes")}
            className={activeSection === "serviceTimes" ? "rotate" : ""}
            style={{ display: isLargeScreen ? "none" : "inline" }}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        {(activeSection === "serviceTimes" || isLargeScreen) && (
          <div className="footer-content">
            <p className="roboto-regular">Sunday: 9:00 AM - 11:00 AM</p>
            <p className="roboto-regular">Wednesday: 7:00 PM - 8:30 PM</p>
          </div>
        )}
      </div>
      <div className="footer-section">
        <div className="heading-block">
          <h3
            onClick={() => toggleSection("quickLinks")}
            className="footer-heading roboto-bold"
          >
            Quick Links
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1C1B1F"
            onClick={() => toggleSection("quickLinks")}
            className={activeSection === "quickLinks" ? "rotate" : ""}
            style={{ display: isLargeScreen ? "none" : "inline" }}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        {(activeSection === "quickLinks" || isLargeScreen) && (
          <div className="footer-content">
            <ul>
              <li>
                <a className="roboto-regular" href="/about">About Us</a>
              </li>
              <li>
                <a className="roboto-regular" href="/events">About Us</a>
              </li>
              <li>
                <a className="roboto-regular" href="/donate">Donate</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="footer-section">
        <div className="heading-block">
          <h3
            onClick={() => toggleSection("followUs")}
            className="footer-heading roboto-bold"
          >
            Follow Us
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1C1B1F"
            onClick={() => toggleSection("followUs")}
            className={activeSection === "followUs" ? "rotate" : ""}
            style={{ display: isLargeScreen ? "none" : "inline" }}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        {(activeSection === "followUs" || isLargeScreen) && (
          <div className="footer-content">
            <a className="roboto-regular" href="https://www.facebook.com">Facebook</a>
            <a className="roboto-regular" href="https://www.twitter.com">Twitter</a>
            <a className="roboto-regular" href="https://www.instagram.com">Instagram</a>
          </div>
        )}
      </div>
      
      <div className="footer-bottom roboto-regular">
        <p>© 2024 Othandweni Ethiopian Christian Church. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
