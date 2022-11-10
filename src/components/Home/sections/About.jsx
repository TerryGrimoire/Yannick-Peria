import React from "react";
import { Link } from "react-router-dom";
import yannick from "../../../assets/yannick.png";

function About() {
  return (
    <section className="flex-col justify-evenly align-center h100vh dark about">
      <h3>A propos de Yannick</h3>
      <img src={yannick} alt="yannick en portrait" className="yannick" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, labore
        saepe amet inventore cumque quae sapiente nam nulla alias, dolorum
        aliquid. Qui cum sunt, fuga mollitia unde placeat, nobis officia,
        pariatur reprehenderit accusantium quisquam! Nostrum iste harum minus
        nisi nesciunt perferendis quis, quidem fugit nihil at id quam, odit
        laborum!
      </p>
      <Link to="/Bio">
        <button type="button">En savoir plus</button>
      </Link>
    </section>
  );
}

export default About;
