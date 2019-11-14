import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="footer-copyright">
        Crée par <strong>PrimateLand<i className="fas fa-trademark"></i></strong>
      </div>
    </div>
  );
}

export default Footer;
