import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import tiktok from "../../assets/tiktok.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_plan">
        <h4>Plan du site</h4>
        <ul className="flex-col justify-evenly align-start">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Bio">Bio</Link>
          </li>
          <li>
            <Link to="/Peintures">Peintures</Link>
            <li>
              <Link to="/Musiques">Musiques</Link>
            </li>
          </li>
        </ul>
      </div>
      <div className="footer_contact">
        <h4>Retrouvez nous sur les réseaux</h4>

        <ul className="socialMedia_container">
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
      </div>
      <div className="footer_bottom">
        <Link to="/Mentions">
          <small>Politique de confidentialité</small>
        </Link>
        <Link to="/Mentions">
          <small className="small">Mentions Légales</small>
        </Link>
        <small>Tous droits réservés 2022 ©</small>
      </div>
    </footer>
  );
}

export default Footer;
