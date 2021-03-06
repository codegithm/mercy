import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./Footer.css";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <hr />
        <div className='company-details'>
          <div className='company-logo'>
            <img className='footer-logo' src='./Untitled-1-02.png' />
            <span>© 2021 Mercy inc</span>
          </div>
          <div className='socials'>
            <FiTwitter className='social-icon' />
            <FaInstagram className='social-icon' />
            <FaFacebook className='social-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
