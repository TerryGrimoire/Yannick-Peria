import React from "react";
import pinceau from "../../../assets/pinceau4.png";

function Landing({ title }) {
  return (
    <div className=" flex-col align-center justify-between landing">
      <h1>{title.toUpperCase()}</h1>
      <h2>Artiste Peintre & Chanteur</h2>
      <img src={pinceau} alt="coup de pinceau" />
    </div>
  );
}

export default Landing;
