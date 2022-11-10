import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger }) {
  return (
    <nav className="flex-col openBurger justify-between">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
      </button>
      <Link to="/Bio">
        <button type="button" onClick={() => setOpenBurger(false)}>
          BIO
        </button>
      </Link>
      <Link to="/Peintures">
        <button type="button" onClick={() => setOpenBurger(false)}>
          PEINTURES
        </button>
      </Link>
      <Link to="/Musiques">
        <button type="button" onClick={() => setOpenBurger(false)}>
          MUSIQUES
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          CONTACT
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
