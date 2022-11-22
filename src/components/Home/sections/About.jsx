import React from "react";
import { Link } from "react-router-dom";
import yannick from "../../../assets/yannick.png";

function About() {
  return (
    <section className="flex-col justify-evenly align-center dark about">
      <h3>À PROPOS DE YANNICK</h3>
      <article className="desktop_div">
        <img src={yannick} alt="yannick en portrait" className="yannick" />
        <article className="flex-col justify-center align-start">
          <div>
            <h4>Biographie</h4>
            <p>
              Yannick Peria est né en 1998 au Port où il a effectué toute sa
              scolarité. En 2016, il est admis à l'École Supérieure d'Art de La
              Réunion. Après une année en Erasmus à l'École Supérieure d'Art de
              Bruxelles, il revient à La Réunion et obtient son diplôme national
              supérieur d'expression plastique en 2021.
            </p>
          </div>
          <div>
            <h4>Parcours</h4>
            <p>
              Yannick a effectué plusieurs résidences sur l'île de La Réunion et
              obtenu des récompenses pour son travail. Il est actuellement
              artiste résident à la cité internationale des arts de Paris.
            </p>
          </div>
        </article>
      </article>

      <Link to="/Bio">
        <button type="button" className="button_style">
          En savoir plus
        </button>
      </Link>
      <div className="trace_top" />
      <div className="trace_bottom" />
    </section>
  );
}

export default About;
