import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillDribbbleCircle,
} from "react-icons/ai";

import { BsPinterest } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left-content">
          <div className="about-pass">
            <h3>About Passport</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="social-icons">
            <h3>Connect</h3>
            <div className="icons-flex">
              <div className="icon-bg">
                <AiFillInstagram />
              </div>
              <div className="icon-bg">
                <AiFillTwitterCircle />
              </div>
              <div className="icon-bg">
                <AiFillFacebook />
              </div>
              <div className="icon-bg">
                <AiFillLinkedin />
              </div>
              <div className="icon-bg">
                <BsPinterest />
              </div>
              <div className="icon-bg">
                <AiFillDribbbleCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Carrer</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Carrer</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li> 
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li style={{ paddingBottom: "16px" }}>
                43 Raymouth Rd. Baltemoer, London 3910
              </li>
              <li>
                <Link to="tel:+1(123)-456-7890">+1(123)-456-7890</Link>
              </li>
              <li>
                <Link to="tel:+1(123)-456-7890">+1(123)-456-7890</Link>
              </li>
              <li>
                <Link to="mailto:info@mydomain.com">info@mydomain.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright &copy; 2023 All rights reserved | This is a sample made by
          Dev Aaryan &#10084;
        </p>
      </div>
    </footer>
  );
};
