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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          voluptas dolores nam voluptatum, iusto minima vitae accusamus ut
          accusantium assumenda repellat unde pariatur explicabo perferendis.
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
    </section>
  );
}

export default Oueuvres;
