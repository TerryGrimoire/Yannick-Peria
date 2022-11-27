import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex flex-col align-center contact_page">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h1>ME CONTACTER</h1>
      <div className="contact_flex">
        <section>
          <ul className="contact_coord_container">
            <h2>Mes coordonnées</h2>
            <li>☎ 06.92.32.86.86</li>
            <li>📧 yannickperia@gmail.com</li>
            <li>📍 Le Port, La Réunion</li>
          </ul>
        </section>

        <section>
          <ul className="socialMedia_container_contact">
            <h2>Mes réseaux sociaux</h2>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/yannick.perianayagom"
                rel="noreferrer"
              >
                <img src={facebook} alt="logo de Facebook" />
                <p>@yannick.perianayagom</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.tiktok.com/@yannickperia"
                rel="noreferrer"
              >
                <img src={tiktok} alt="logo de Tiktok" />
                <p>@yannickperia</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/yannickperiastudio/"
                rel="noreferrer"
              >
                <img src={instagram} alt="logo de Instagram" />
                <p>@yannickperiastudio</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC6uwJULqffrKiihb5H3CmIg"
                rel="noreferrer"
              >
                <img src={youtube} alt="logo de Youtube" />
                <p>@yannickperia5721</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yannick-peria-21253a1b0/"
                rel="noreferrer"
              >
                <img src={linkedin} alt="logo de Linkedin" />
                <p>@yannick-peria</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Contact;
