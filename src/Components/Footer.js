import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";
function Footer() {
  return (
    <div className="outer_footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer_icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="footer__left__text">
            <ul>
              <li>Audio description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
              <li className="source-code">Source Code</li>
              <li>
                <AiFillCopyrightCircle /> 1996-2024 Netflix Inc.
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__middle">
          <ul>
            <li>Help Center</li>
            <li>Job</li>
            <li>Cookiey Preferenss</li>
          </ul>
        </div>
        <div className="footer__middle">
          <ul>
            <li>Gift Card</li>
            <li>Term Of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer__middle">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Cotact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
