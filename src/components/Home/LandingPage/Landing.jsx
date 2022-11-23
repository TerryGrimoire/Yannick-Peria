import React from "react";
import pinceau from "../../../assets/pinceau4.png";
import pinceau2 from "../../../assets/pinceau6.png";

function Landing({ title }) {
  return (
    <div className=" flex-col align-center justify-between landing">
      <h1>{title.toUpperCase()}</h1>
      <h2>Artiste Peintre & Chanteur</h2>
      <img src={pinceau} alt="coup de pinceau" className="mobile" />
      <img src={pinceau2} alt="coup de pinceau" className="desktop" />
    </div>
  );
}

export default Landing;
