import React from "react";
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <a class="logo">
          <Link to="/">Passport</Link>
        </a>
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <div className="dropdown">
              <span>Dropdown</span>
              <div className="dropdown-content">
                <a href="#">Link-1</a>
                <a href="#">Link-2</a>
                <a href="#">Link-3</a>
              </div>
            </div>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="contact-us">
          <li>
            <button>Contact Us</button>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
};

export default Nav;
