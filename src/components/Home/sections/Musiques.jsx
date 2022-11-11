import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import musiquesData from "../../../data/musiquesData";

function Oueuvres() {
  const handleDragStart = (e) => e.preventDefault();

  const items = musiquesData.map((oeuvre) => (
    <img
      src={oeuvre.image}
      alt={oeuvre.alt}
      onDragStart={handleDragStart}
      role="presentation"
      className="oeuvre_image"
    />
  ));

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 10,
    },
  };
  return (
    <section className="flex-col justify-evenly align-center h100vh musiques dark">
      <h3>MUSIQUES</h3>
      <article className="flex-col oeuvres_article">
        <h4>AUTEUR, COMPOSITEUR, INTERPRÈTE</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          voluptas dolores nam voluptatum, iusto minima vitae accusamus ut
          accusantium assumenda repellat unde pariatur explicabo perferendis.
        </p>
      </article>
      <AliceCarousel
        autoPlay
        disableButtonsControls
        disableDotsControls
        disableSlideInfo
        infinite
        animationDuration="6000"
        mouseTracking
        responsive={responsive}
        items={items}
      />
      <Link to="/Bio">
        <button type="button" className="button_style">
          En savoir plus
        </button>
      </Link>
    </section>
  );
}

export default Oueuvres;
