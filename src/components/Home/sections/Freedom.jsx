import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import freedomData from "../../../data/freedomData";

function Oueuvres() {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 4,
    },
    1024: {
      items: 10,
    },
  };

  const items = freedomData.map((el) => (
    <div
      onDragStart={handleDragStart}
      className="flex-col align-center justify-center"
    >
      <small>{el.name}</small>
      <img src={el.src} alt={el.alt} className="freedom_image" />
    </div>
  ));
  return (
    <section className="flex-col justify-evenly align-center freedom">
      <h3>ILS PARLENT DE MOI</h3>
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
    </section>
  );
}

export default Oueuvres;
