import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/portfolio">
        <button>Portfolio</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/resume">
        <button>Resume</button>
      </Link>
    </nav>
  );
}
