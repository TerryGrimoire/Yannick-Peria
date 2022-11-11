import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import oeuvresData from "../../../data/oeuvresData";

function Oueuvres() {
  const handleDragStart = (e) => e.preventDefault();

  const items = oeuvresData.map((oeuvre) => (
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
    <section className="flex-col justify-evenly align-center h100vh oeuvres">
      <h3>ARTISTE PEINTRE</h3>
      <article className="flex-col oeuvres_article">
        <h4>LA KOUR</h4>
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
      <Link to="/Peintures">
        <button type="button" className="button_style">
          Découvrir LA KOUR
        </button>
      </Link>
    </section>
  );
}

export default Oueuvres;
