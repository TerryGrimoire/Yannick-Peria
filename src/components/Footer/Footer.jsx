import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import tiktok from "../../assets/tiktok.png";
import region from "../../assets/logo_reunion.png";
import ue from "../../assets/logo_UE.png";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_plan">
        <h4>Liens utiles</h4>
        <ul className="flex-col justify-evenly align-start">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Bio">Bio</Link>
          </li>
          <li>
            <Link to="/Peintures">Peintures</Link>
          </li>
          <li>
            <Link to="/Musiques">Musiques</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Mentions">Mentions Légales</Link>
          </li>
          <li>
            <Link to="/Mentions">Politique de confidentialité</Link>
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
              <img src={tiktok} alt="logo de Tiktok" className="tiktok" />
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
      <div className="mentions_obligatoires">
        <h4>Co-Financement</h4>
        <small>
          Ce site a été financé avec l’aide du FEDER (REACT-UE), dans le cadre
          de la réponse de l’Union européenne à la pandémie COVID-19. L’Europe
          s’engage à La Réunion
        </small>
        <ul className="flex align-center justify-start">
          <li>
            <img src={region} alt="logo de Facebook" />
          </li>
          <li>
            <img src={ue} alt="logo de Tiktok" className="tiktok" />
          </li>
        </ul>
      </div>
      <div className="footer_bottom">
        <small>Tous droits réservés 2022 ©</small>
      </div>
    </footer>
  );
}

export default Footer;
