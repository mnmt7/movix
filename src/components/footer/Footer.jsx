import React from "react";
import "./style.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="menu">
        <li className="menu-item">Terms of Use</li>
        <li className="menu-item">Privacy Policy</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Blog</li>
        <li className="menu-item">FAQ</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dignissimos, dolorem odio mollitia similique rem reprehenderit nesciunt
        quam magnam consequatur animi accusantium voluptas delectus assumenda
        fugit praesentium corporis aliquid laboriosam?
      </p>
      <div className="social-logos">
        <div className="social-logo" >
          <FaFacebookF /> 
        </div>
        <div className="social-logo" >
          <FaInstagram /> 
        </div>
        <div className="social-logo" >
          <FaLinkedin /> 
        </div>
        <div className="social-logo" >
          <FaTwitter /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
