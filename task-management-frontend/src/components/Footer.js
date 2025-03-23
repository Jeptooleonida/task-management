import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleString();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} . All rights reserved.</p>
      <p>Last updated: {lastUpdated}</p>
    </footer>
  );
};

export default Footer;