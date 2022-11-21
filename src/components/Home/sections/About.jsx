import React from "react";
import { Link } from "react-router-dom";
import yannick from "../../../assets/yannick.png";

function About() {
  return (
    <section className="flex-col justify-evenly align-center h100vh dark about">
      <h3>À PROPOS DE YANNICK</h3>
      <img src={yannick} alt="yannick en portrait" className="yannick" />
      <p>
        Yannick Peria est né en 1998 au Port où il a effectué toute sa
        scolarité. En 2016, il est admis à l'École Supérieure d'Art de La
        Réunion. Après une année en Erasmus à l'École Supérieure d'Art de
        Bruxelles, il revient à La Réunion et obtient son diplôme national
        supérieur d'expression plastique en 2021.
      </p>
      <Link to="/Bio">
        <button type="button" className="button_style">
          En savoir plus
        </button>
      </Link>
    </section>
  );
}

export default About;
