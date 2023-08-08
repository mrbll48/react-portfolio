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
    </nav>
  );
}
