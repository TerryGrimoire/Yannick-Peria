import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/Home/LandingPage/Landing";
import About from "../components/Home/sections/About";
import Oeuvres from "../components/Home/sections/Oeuvres";
import Musiques from "../components/Home/sections/Musiques";
import Freedom from "../components/Home/sections/Freedom";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-col main_container">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {/*

        Options here :
        -  Main image Style - Landing page like Charles Portefolio (main image + title in the middle) 
        -  Main video Style - Landing page like Barber 902 (main vidéo + title in the middle)
        -  Animation  Style - Landing page like ASMK (main image animated + title in the middle)
 
        */}

      <Landing title={helmet.title} />
      <About />
      <Oeuvres />
      <Musiques />
      <Freedom />
    </main>
  );
}
