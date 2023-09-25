import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
      <nav className="navbar w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
            <Link to="/react-portfolio/">
              <p className="nav-link bs-primary text-light border border-dark rounded m-1">
                About Me
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/react-portfolio/portfolio">
              <p className="nav-link text-light border border-dark rounded m-1">
                Portfolio
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/react-portfolio/contact">
              <p className="nav-link text-light border border-dark rounded m-1">
                Contact
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/react-portfolio/resume">
              <p className="nav-link text-light border border-dark rounded m-1">
                Resume
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
