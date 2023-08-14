import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <nav className="navbare w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/">
              <button className="">Home</button>
            </Link>
          </li>
          <Link to="/portfolio">
            <button>Portfolio</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
          <Link to="/resume">
            <button>Resume</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
