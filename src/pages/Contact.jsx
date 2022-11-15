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
    <main className="flex flex-col align-center">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h1>ME CONTACTER</h1>
      <section>
        <ul>
          <h2>Mes coordonnées</h2>
          <li>☎ Par téléphone : XX.XX.XX.XX.XX</li>
          <li>📧 Par email : xxxxxxxx@xxxxx.com</li>
          <li>📍 Le Port, La Réunion</li>
        </ul>
      </section>

      <section>
        <h2>Mes réseaux sociaux</h2>
        <ul className="socialMedia_container_contact">
          <li>
            <a href="https://www.facebook.com/yannick.perianayagom">
              <img src={facebook} alt="logo de Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@yannickperia">
              <img src={tiktok} alt="logo de Tiktok" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yannickperiastudio/">
              <img src={instagram} alt="logo de Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC6uwJULqffrKiihb5H3CmIg">
              <img src={youtube} alt="logo de Youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yannick-peria-21253a1b0/">
              <img src={linkedin} alt="logo de Linkedin" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Contact;
