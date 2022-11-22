import React from "react";
import { Link } from "react-router-dom";
import oeuvresData from "../../../data/oeuvresData";

function Oueuvres() {
  return (
    <section className="flex-col justify-evenly align-center oeuvres">
      <h3>ARTISTE PEINTRE</h3>
      <article className="flex-col oeuvres_article">
        <h4>LA KOUR</h4>
        <p>
          C'est pendant la période du confinement que le projet LA KOUR est né.
          Je peins des lieux qui me sont chers, d'après des photographies que je
          prends avec mon téléphone. Les peindre pour ne pas les perdre, pour
          les immortaliser, pour qu'elles ne disparaissent pas dans le flot
          d'images postées sur le net.
        </p>
      </article>
      <div className="oeuvre_image_container">
        {oeuvresData
          .filter((oeuvre) => oeuvre.id < 7)
          .map((o) => (
            <img src={o.image} alt={o.alt} className="oeuvre_image" />
          ))}
      </div>
      <Link to="/Peintures">
        <button type="button" className="button_style">
          Découvrir LA KOUR
        </button>
      </Link>
      <div className="trace_bottom" />
    </section>
  );
}

export default Oueuvres;
