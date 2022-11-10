import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/Bio">BIO</Link>
      <Link to="/Peintures">PEINTURES</Link>
      <Link to="/Musiques">MUSIQUES</Link>
      <Link to="/Contact">CONTACT</Link>
    </nav>
  );
}

export default Navbar;
