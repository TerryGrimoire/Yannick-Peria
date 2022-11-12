import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import musiquesData from "../../../data/musiquesData";

function Oueuvres() {
  const handleDragStart = (e) => e.preventDefault();

  const items = musiquesData.map((musique) => (
    <iframe
      width="560"
      height="315"
      src={musique.src}
      title="YouTube video player"
      frameBorder="0"
      onDragStart={handleDragStart}
      role="presentation"
      className="musiques_yt"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullScreen"
      allowFullScreen
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
    <section className="flex-col justify-evenly align-center musiques dark">
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
        disableDotsControls
        disableSlideInfo
        infinite
        animationDuration="6000"
        mouseTracking
        responsive={responsive}
        items={items}
      />
      <Link to="/Musiques">
        <button type="button" className="button_style">
          En savoir plus
        </button>
      </Link>
    </section>
  );
}

export default Oueuvres;
